import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema } from "@/lib/enquiry";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/**
 * Very small in-memory rate limit. Enough to stop a script hammering the form
 * on a single-instance deployment; swap for a KV/Redis limiter if the site is
 * ever scaled horizontally.
 */
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many enquiries. Please try again shortly." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = enquirySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the form and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped — pretend it worked so the bot stops retrying.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email || "Not provided"],
    ["Suburb", data.suburb],
    ["Enquiry about", data.topic],
    ["Prefers", data.preference || "Either"],
    ["Message", data.message || "—"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#0f2440;max-width:560px">
      <h2 style="margin:0 0 4px;font-size:18px">New website enquiry</h2>
      <p style="margin:0 0 20px;color:#5b6b7f;font-size:13px">
        Submitted via ${escapeHtml(site.domain)}
      </p>
      <table cellpadding="0" cellspacing="0" style="width:100%;font-size:14px;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:8px 12px 8px 0;color:#5b6b7f;white-space:nowrap;vertical-align:top;border-bottom:1px solid #e4e7ec">${escapeHtml(k)}</td>
            <td style="padding:8px 0;font-weight:600;vertical-align:top;border-bottom:1px solid #e4e7ec">${escapeHtml(v).replace(/\n/g, "<br>")}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="margin:20px 0 0;font-size:13px;color:#5b6b7f">
        Reply directly to this email to respond to ${escapeHtml(data.name)}.
      </p>
    </div>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL ?? site.email;
  const from = process.env.ENQUIRY_FROM_EMAIL ?? `Yireh Textiles Website <onboarding@resend.dev>`;

  // Without a key configured (local dev, or before the domain is verified) we
  // log the enquiry rather than dropping it silently.
  if (!apiKey) {
    console.info("[enquiry] RESEND_API_KEY not set. Enquiry received:\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: `New enquiry — ${data.name} (${data.suburb}) — ${data.topic}`,
      replyTo: data.email || undefined,
      text,
      html,
    });

    if (error) {
      console.error("[enquiry] Resend error", error);
      return NextResponse.json(
        {
          ok: false,
          error: `Something went wrong sending your enquiry. Please call ${site.phone.display}.`,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[enquiry] send failed", err);
    return NextResponse.json(
      {
        ok: false,
        error: `Something went wrong sending your enquiry. Please call ${site.phone.display}.`,
      },
      { status: 500 },
    );
  }
}

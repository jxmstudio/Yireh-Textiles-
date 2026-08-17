import { z } from "zod";
import { services } from "./site";

/** Options shown in the "what do you need" dropdown, in client-priority order. */
export const enquiryTopics = [
  ...services.map((s) => s.name),
  "Something else",
] as const;

export const contactPreferences = ["Phone call", "Email", "Either"] as const;

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(80, "That name is too long"),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a contact number")
    .max(20, "That number is too long")
    .regex(/^[0-9+()\s-]+$/, "Please enter a valid phone number"),
  email: z
    .string()
    .trim()
    .max(120)
    .email("Please enter a valid email address")
    .or(z.literal(""))
    .optional(),
  suburb: z
    .string()
    .trim()
    .min(2, "Please enter your suburb")
    .max(80, "That suburb is too long"),
  topic: z.string().trim().min(1, "Please choose what you need"),
  preference: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .max(2000, "Please keep the message under 2000 characters")
    .optional(),
  /** Honeypot. Real people leave this empty; bots fill it in. */
  company: z.string().max(0).optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

/**
 * JXM Forms — our own form backend, replacing the previous Resend API route.
 * Spam filtering happens on their side; the key is public by design (it only
 * identifies the site, like a Formspree form ID).
 */
const JXM_ENDPOINT = "https://jxm-forms.vercel.app/api/submit/yirehtextiles";
const JXM_API_KEY = "ll1FEKXmhckiWS_drlNKrgvAPdnzCYm9";

export async function submitEnquiry(
  values: EnquiryInput,
): Promise<{ ok: boolean; error?: string }> {
  const { company, ...fields } = values;
  const res = await fetch(JXM_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": JXM_API_KEY },
    body: JSON.stringify({
      ...fields,
      // Always present — the backend uses it as the Reply-To.
      email: fields.email ?? "",
      // Bot trap. Real users never see the field, so it stays empty.
      _gotcha: company ?? "",
    }),
  });
  const body = (await res.json().catch(() => ({}))) as {
    ok?: boolean;
    error?: string;
  };
  if (!res.ok || body.ok !== true) {
    return { ok: false, error: body.error };
  }
  return { ok: true };
}

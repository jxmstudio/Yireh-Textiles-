import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/layout/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and stores the information you send through this website.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    heading: "What we collect",
    body: [
      "When you submit an enquiry through this website we collect the details you enter into the form: your name, phone number, email address (if you provide one), suburb, the product or service you are enquiring about, your preferred contact method, and anything you write in the message field.",
      "We do not collect payment details through this website.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use your details for one purpose: to respond to your enquiry and to quote on and carry out the work you have asked about.",
      "We do not sell your information, and we do not add you to a marketing list without you asking us to.",
    ],
  },
  {
    heading: "How it is stored",
    body: [
      "Enquiries submitted through this site are delivered to our business email inbox. They are retained there for as long as we need them to service your enquiry and meet our record-keeping obligations.",
      "Access is limited to the people in our business who need it to respond to you.",
    ],
  },
  {
    heading: "Third parties",
    body: [
      "This website uses a transactional email provider to deliver enquiry notifications to us. Your enquiry passes through that provider in order to reach our inbox.",
      "If analytics are enabled on this site, they collect anonymous usage information such as which pages are visited. They do not collect the contents of your enquiry.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      `You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Email ${site.email} or call ${site.phone.display} and we will action it.`,
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about this policy can be directed to ${site.email} or ${site.phone.display}, ${site.hours.display}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        trail={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
        title="Privacy Policy"
        lead="Plain-English summary of what we do with the information you send us through this website."
      />

      <Section>
        <Container>
          <div className="max-w-3xl space-y-10">
            <p className="text-sm text-muted-foreground">
              Last updated{" "}
              {new Date().toLocaleDateString("en-AU", {
                month: "long",
                year: "numeric",
              })}
            </p>

            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-xl font-semibold text-navy-950">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="text-pretty leading-relaxed text-navy-900/80"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

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

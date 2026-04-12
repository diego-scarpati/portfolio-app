"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "diegoscarpati13@gmail.com";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
  honeypot?: string; // spam trap
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  // Honeypot check — bots fill hidden fields
  if (data.honeypot) {
    return { success: true }; // silently succeed to confuse bots
  }

  // Input validation
  if (!data.name || data.name.trim().length < 2 || data.name.length > 100) {
    return { success: false, error: "Please enter your name." };
  }
  if (!data.email || !isValidEmail(data.email) || data.email.length > 254) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (
    !data.message ||
    data.message.trim().length < 10 ||
    data.message.length > 5000
  ) {
    return {
      success: false,
      error: "Please describe your project (10–5000 characters).",
    };
  }
  if (data.company && data.company.length > 200) {
    return { success: false, error: "Company name is too long." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: data.email,
      subject: `New project brief from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company ?? "Not specified"}
Service: ${data.service}
Budget: ${data.budget}

Project Description:
${data.message}
      `.trim(),
    });
    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}

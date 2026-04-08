'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'diegoscarpati13@gmail.com'

export interface ContactFormData {
  name: string
  email: string
  company?: string
  service: string
  budget: string
  message: string
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: data.email,
      subject: `New project brief from ${data.name}${data.company ? ` (${data.company})` : ''}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company ?? 'Not specified'}
Service: ${data.service}
Budget: ${data.budget}

Project Description:
${data.message}
      `.trim(),
    })
    return { success: true }
  } catch (error) {
    console.error('Contact form error:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { createContactHandler, inquiryHtml } from "@/lib/contact-handler";

export const POST = createContactHandler({
  async save(inquiry) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) throw new Error("Database is not configured");
    const supabase = createClient(url, key);
    const { error } = await supabase.from("contact_messages")
      .insert([{ ...inquiry, company: inquiry.company || null }])
      .abortSignal(AbortSignal.timeout(10000));
    if (error) throw error;
  },
  async send(inquiry) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("Email is not configured");
    const { error } = await new Resend(key).emails.send({
      from: "Active Orbit INC <info@activeorbita.com>",
      to: ["info@activeorbita.com"],
      subject: `New inquiry from ${inquiry.name}`,
      replyTo: inquiry.email,
      html: inquiryHtml(inquiry),
      text: `Name: ${inquiry.name}\nEmail: ${inquiry.email}\nCompany: ${inquiry.company || "Not provided"}\n\n${inquiry.message}`,
    });
    if (error) throw error;
  },
  report(channel) {
    // Log the failed channel, without customer data or provider credentials.
    console.error(`Contact inquiry ${channel} delivery failed`);
  },
});

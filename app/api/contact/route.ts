import { Resend } from "resend";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const { data: insertedRow, error: dbError } = await supabase
  .from("contact_messages")
  .insert([
    {
      name,
      email,
      company: company || null,
      message,
    },
  ])
  .select();

console.log("SUPABASE INSERT RESULT:", { insertedRow, dbError });

    if (dbError) {
      return NextResponse.json(
        { error: dbError.message || "Failed to save contact message." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Active Orbit INC <contact@activeorbita.com>",
      to: ["your-destination-email@example.com"],
      subject: `New inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while processing the contact form.",
      },
      { status: 500 }
    );
  }
}
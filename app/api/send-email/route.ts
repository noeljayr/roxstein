import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { generateEmailHTML } from "@/utils/generateEmail";

export const POST = async (req: NextRequest) => {
  const { message, email, name, phone, services } = await req.json();

  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailHtml = generateEmailHTML({
    email,
    message,
    name,
    phone,
    services,
  });

  try {
    const data = await resend.emails.send({
      from: "Roxstein <noreply@roxstein.ch>",
      to: [
        "admin@roxstein.ch",
        "gian@roxstein.ch",
        "aisa@roxstein.ch",
        "noeljayr01@gmail.com",
        "liam@roxstein.ch",
      ],
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
};

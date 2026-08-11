import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  address?: string;
  service?: string;
  message: string;
  // honeypot field — real users never fill this in
  company?: string;
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 0 &&
    typeof b.email === "string" &&
    b.email.includes("@") &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ ok: false, error: "Please fill in your name, phone, email, and message." }, { status: 400 });
  }

  // Honeypot: bots tend to fill every field, humans never see this one.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.CONTACT_NOTIFY_EMAIL || "info@concreteprosofnashville.com";

  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "estimates@concreteprosofnashville.com",
          to: notifyTo,
          reply_to: body.email,
          subject: `New estimate request from ${body.name}`,
          text: [
            `Name: ${body.name}`,
            `Phone: ${body.phone}`,
            `Email: ${body.email}`,
            body.address ? `Property address: ${body.address}` : null,
            body.service ? `Service requested: ${body.service}` : null,
            "",
            "Message:",
            body.message,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });

      if (!res.ok) {
        console.error("Resend API error", await res.text());
        return NextResponse.json(
          { ok: false, error: "We couldn't send your message right now. Please call us instead." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("Failed to send contact email", err);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message right now. Please call us instead." },
        { status: 502 }
      );
    }
  } else {
    // No email provider configured yet — log so the submission isn't silently
    // dropped during development, and still return success to the visitor.
    // Set RESEND_API_KEY (and optionally CONTACT_NOTIFY_EMAIL /
    // CONTACT_FROM_EMAIL) before launch so real submissions actually deliver.
    console.log("Contact form submission (no RESEND_API_KEY configured):", body);
  }

  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  const { name, email, phone, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Kroll & Kroll Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Neue Anfrage von ${name}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#0F0D0A">
          <h2 style="border-bottom:2px solid #B8965A;padding-bottom:8px">Neue Kontaktanfrage</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#7A7670;width:120px">Name</td><td style="padding:8px 0"><strong>${name}</strong></td></tr>
            <tr><td style="padding:8px 0;color:#7A7670">E-Mail</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px 0;color:#7A7670">Telefon</td><td style="padding:8px 0">${phone}</td></tr>` : ""}
            ${service ? `<tr><td style="padding:8px 0;color:#7A7670">Leistung</td><td style="padding:8px 0">${service}</td></tr>` : ""}
          </table>
          <h3 style="margin-top:24px;margin-bottom:8px">Nachricht</h3>
          <p style="background:#F4F1EC;padding:16px;line-height:1.7;white-space:pre-wrap">${message}</p>
          <p style="margin-top:24px;font-size:12px;color:#9A9590">Gesendet über kroll-bauelemente.de</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Mail konnte nicht gesendet werden." }, { status: 500 });
  }
}

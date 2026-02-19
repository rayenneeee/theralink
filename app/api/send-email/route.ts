import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, professionalName, date, time } = await req.json();

    const safeName = professionalName || "votre professionnel";

    // ✅ Import dynamique (évite l'erreur TypeScript)
    const QRCode = await import("qrcode");

    const qrData = `Rendez-vous avec ${safeName} le ${date} à ${time}`;
    const qrCodeImage = await QRCode.default.toDataURL(qrData);

    const { error } = await resend.emails.send({
      from: "TheraLink <onboarding@resend.dev>",
      to: email,
      subject: "✨ Confirmation de votre rendez-vous",
      html: `
        <div style="font-family:Arial; background:#0f172a; padding:40px; color:white;">
          <div style="max-width:600px; margin:auto; background:#111827; padding:30px; border-radius:20px; text-align:center;">

            <h2 style="color:#10b981;">
              Votre séance avec ${safeName} est confirmée 🎉
            </h2>

            <div style="margin:20px 0;">
              <p><strong>Date :</strong> ${date}</p>
              <p><strong>Heure :</strong> ${time}</p>
            </div>

            <img src="${qrCodeImage}" width="200" style="margin:20px auto;" />

            <p style="opacity:0.7;">
              Présentez ce QR code le jour du rendez-vous.
            </p>

          </div>
        </div>
      `,
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ error });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Erreur serveur" });
  }
}

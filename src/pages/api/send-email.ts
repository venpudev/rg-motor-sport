import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const secretKey = import.meta.env.SITE_KEY;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, message, recaptcha } = data;

    if (!name || !email || !message || !recaptcha) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // ✅ Verifica reCAPTCHA v2
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify`;
    const response = await fetch(verifyURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: recaptcha,
      }),
    });

    const verifyData = await response.json();
    if (!verifyData.success) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA inválido", details: verifyData }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // ✅ Envío de correo con Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rgaytan.asesorias@gmail.com",
      subject: `(Sitio web) Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong><br>${message}</p>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("Verificación reCAPTCHA:", verifyData);

    return new Response(JSON.stringify({ success: true, data: emailData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

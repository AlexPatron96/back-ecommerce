import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true", // false para STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Evita problemas con certificados SSL
  },
});

export const sendResetEmail = async (to: string, resetLink: string) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: "Recuperación de contraseña",
      html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
                   <a href="${resetLink}">${resetLink}</a>`,
    });
    console.log("📧 Correo de restablecimiento enviado con éxito");
  } catch (error) {
    console.error("❌ Error al enviar el correo:", error);
    throw new Error("No se pudo enviar el correo de restablecimiento.");
  }
};

export const sendStructuredEmail = async (
  to: string,
  subject: string,
  content: string,
  resetLink: string
) => {
  try {
    const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
              <h2 style="color: #333; text-align: center;">${subject}</h2>
              <p style="color: #555;">${content}</p>
              <div style="text-align: center; margin-top: 20px;">
                  <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px;">Ver más</a>
              </div>
              <p style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">Este es un mensaje automático. Por favor, no respondas a este correo.</p>
          </div>
      `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: htmlContent,
    });
    console.log("📧 Correo estructurado enviado con éxito");
  } catch (error) {
    console.error("❌ Error al enviar el correo estructurado:", error);
    throw new Error("No se pudo enviar el correo.");
  }
};

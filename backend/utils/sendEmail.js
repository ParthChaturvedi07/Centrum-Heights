// backend/utils/sendEmail.js
import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Centrum Heights" <${process.env.SMTP_USER}>`,
    to,
    subject,
    text,
  });
};

export default sendEmail;

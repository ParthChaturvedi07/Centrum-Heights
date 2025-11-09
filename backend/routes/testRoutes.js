// backend/routes/testRoutes.js
import express from "express";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

// Simple test endpoint for email verification
router.post("/email", async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text)
    return res.status(400).json({ message: "to, subject, and text are required" });

  try {
    await sendEmail({ to, subject, text });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email test failed:", error.message);
    res.status(500).json({ message: "Email send failed", error: error.message });
  }
});

export default router;

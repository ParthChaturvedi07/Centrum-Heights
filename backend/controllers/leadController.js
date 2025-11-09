// backend/controllers/leadController.js
import Lead from "../models/Lead.js";
import sendEmail from "../utils/sendEmail.js";

export const submitLead = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone)
      return res.status(400).json({ message: "Name and phone are required" });

    const newLead = await Lead.create({ name, phone, email, message });

    // Optional: send notification email
    try {
      await sendEmail({
        subject: "New Lead Submission - Centrum Heights",
        to: process.env.NOTIFY_EMAIL,
        text: `New lead:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
      });
    } catch (err) {
      console.error("Email failed:", err.message);
    }

    res.status(201).json({ message: "Lead submitted successfully", newLead });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

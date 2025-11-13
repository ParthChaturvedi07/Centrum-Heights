import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MessageSquare,
  Download,
  X,
  CheckCircle2,
} from "lucide-react";
import api from "../utils/api";
import brochure from "../assets/doc/Centrum Heights Brochure.pdf";

export default function DownloadBrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter name and phone number");
      return;
    }

    setLoading(true);
    try {
      // Submit lead data to backend
      const res = await api.post("/api/leads", formData);
      console.log("Lead submitted:", res.data);

      // Trigger brochure download
      downloadBrochure();

      // Show success state
      setSubmitted(true);

      // Reset and close after 2 seconds
      setTimeout(() => {
        setFormData({ name: "", phone: "", email: "", message: "" });
        setSubmitted(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Submission error:", err);
      alert(err?.response?.data?.message || "Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = brochure;
    link.download = "Centrum Heights Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md backdrop-blur-xl bg-gradient-to-br from-slate-900/95 to-indigo-900/95 border-2 border-white/20 rounded-3xl shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/10">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Download Brochure
                  </h2>
                  <p className="text-sm text-gray-300 mt-1">
                    Get exclusive floor plans & pricing
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        name="name"
                        type="text"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full backdrop-blur-md bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Mobile Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full backdrop-blur-md bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        name="email"
                        type="email"
                        placeholder="Email (Optional)"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full backdrop-blur-md bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <div className="absolute left-4 top-4 pointer-events-none">
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                      </div>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Message (Optional)"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full backdrop-blur-md bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 outline-none transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Download Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          Download Brochure
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-center text-gray-400 mt-4">
                      Your information is safe with us.
                    </p>
                  </form>
                ) : (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 0.6,
                        repeat: 1,
                      }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Success!
                    </h3>
                    <p className="text-center text-gray-300">
                      Your brochure is downloading. Our team will contact you
                      shortly.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

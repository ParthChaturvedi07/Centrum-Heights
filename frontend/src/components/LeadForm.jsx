import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  User,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Download,
  MessageCircle,
} from "lucide-react";
import api from "../utils/api";
import broucher from "../assets/doc/Centrum Heights Brochure.pdf";
gsap.registerPlugin(ScrollTrigger);

export default function LeadForm() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      // Real API call to backend. `api` has baseURL set to /api (see src/utils/api.js)
      const res = await api.post("/api/leads", formData);
      console.log("Lead submitted, response:", res.data);

      // Show success toast
      setShowToast(true);

      // Reset form
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Hide toast after 5 seconds
      setTimeout(() => setShowToast(false), 5000);
    } catch (err) {
      console.error("Lead submission error:", err?.response || err.message || err);
      const msg = err?.response?.data?.message || "Submission failed. Please try again later.";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="enquiry"
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-semibold text-blue-200">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Enquire About Centrum Heights
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Fill out the details below and our team will reach out with pricing,
            floor plans, and availability information
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Main Info Card */}
            <div className="backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Why Enquire Now?
              </h3>
              <ul className="space-y-4">
                {[
                  "Exclusive pre-launch pricing",
                  "Limited inventory available",
                  "Flexible payment plans (10-30-60)",
                  "Prime location in Sector 76",
                  "Direct from developer - No brokerage",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle2
                        className="w-4 h-4 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-gray-200 text-sm sm:text-base">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Download Brochure Card */}
            <motion.a
              href={broucher}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-1">
                    Download Brochure
                  </h4>
                  <p className="text-sm text-gray-300">
                    Get detailed floor plans &amp; pricing
                  </p>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Right - Form */}
          <div ref={formRef}>
            <div className="backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="space-y-5">
                {/* Name Input */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full backdrop-blur-md bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 pl-12 pr-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 outline-none transition-all duration-300"
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
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full backdrop-blur-md bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 pl-12 pr-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 outline-none transition-all duration-300"
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
                    placeholder="Email Address (Optional)"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full backdrop-blur-md bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 pl-12 pr-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 outline-none transition-all duration-300"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <div className="absolute left-4 top-4 pointer-events-none">
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Message / Requirement (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full backdrop-blur-md bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 pl-12 pr-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enquire Now
                    </>
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-center text-gray-400 mt-4">
                  Your information is safe with us. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M16.001 3.2c-7.035 0-12.8 5.766-12.8 12.8 0 2.257.589 4.45 1.71 6.39L3.2 28.8l6.548-1.686a12.74 12.74 0 006.253 1.597h.001c7.035 0 12.8-5.766 12.8-12.8s-5.765-12.8-12.8-12.8zm0 23.467a10.62 10.62 0 01-5.4-1.49l-.387-.229-3.889.999 1.04-3.778-.253-.398a10.56 10.56 0 01-1.64-5.657c0-5.858 4.765-10.624 10.63-10.624 2.84 0 5.508 1.107 7.513 3.114a10.51 10.51 0 013.117 7.51c-.001 5.86-4.767 10.623-10.631 10.623zm5.857-7.979c-.322-.161-1.91-.941-2.206-1.047-.297-.108-.513-.162-.73.161-.215.32-.835 1.047-1.024 1.262-.189.215-.377.243-.7.081-.322-.161-1.362-.502-2.594-1.6-.957-.852-1.603-1.903-1.791-2.226-.189-.322-.02-.497.142-.658.146-.145.322-.377.483-.566.161-.189.215-.324.322-.54.108-.215.054-.405-.027-.566-.081-.162-.73-1.765-1.001-2.416-.264-.635-.531-.55-.73-.56l-.624-.011c-.215 0-.566.081-.863.405-.297.324-1.132 1.107-1.132 2.693s1.16 3.122 1.322 3.338c.162.215 2.28 3.48 5.527 4.882.773.333 1.375.533 1.844.682.774.245 1.48.21 2.037.127.622-.093 1.91-.781 2.181-1.536.27-.755.27-1.402.189-1.536-.081-.135-.297-.215-.619-.377z" />
        </svg>

        {/* Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
      </motion.a>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 backdrop-blur-xl bg-green-500/90 border-2 border-green-400/50 text-white px-6 py-4 rounded-2xl shadow-2xl max-w-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Thank You!</h4>
                <p className="text-sm text-green-50">
                  Our team will contact you shortly with details.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="hidden lg:block absolute top-20 left-10 w-16 h-16 border-2 border-blue-400/20 rounded-2xl rotate-12" />
      <div className="hidden lg:block absolute bottom-20 right-10 w-20 h-20 border-2 border-purple-400/20 rounded-full" />
    </section>
  );
}

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, TrendingUp, Train, DollarSign } from "lucide-react";
import Bg_Video from "../assets/videos/centrum location drone.mp4";
import broucher from "../assets/doc/Centrum Heights Brochure.pdf";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const videoRef = useRef(null);

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDownload = () => {
    if (!isAuthenticated) {
      // redirect to login, preserve return location so user can be sent back
      navigate("/login", { state: { from: location } });
      return;
    }
    // user is authenticated — serve brochure (place brochure.pdf in public/)
    window.open(broucher, "_blank");
  };

  const { scrollYProgress } = useScroll();
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.fromTo(
        badgeRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      // Heading animation with split effect
      gsap.fromTo(
        headingRef.current?.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      // Subheading
      gsap.fromTo(
        subheadingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.6 }
      );

      // Cards with stagger
      gsap.fromTo(
        cardsRef.current?.children,
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          delay: 0.8,
        }
      );

      // CTA buttons
      gsap.fromTo(
        ctaRef.current?.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          delay: 1.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cardData = [
    { label: "Starting Price", value: "₹62L", icon: DollarSign },
    { label: "Unit Types", value: "2 BHK", icon: Home },
    { label: "Metro Distance", value: "100m", icon: Train },
    { label: "Rate/sq.ft", value: "₹6,350", icon: TrendingUp },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
      aria-label="Centrum Heights Hero"
    >
      {/* Video Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale: videoScale }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={Bg_Video} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-blue-900/60" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <div ref={headingRef}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left mt-12 sm:mt-0">
                <div className="overflow-hidden mb-1">
                  <span className="block text-white">CENTRUM HEIGHTS</span>
                </div>
                <div className="overflow-hidden">
                  <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    OPENING MORE DOORS
                  </span>
                </div>
              </h1>
            </div>

            {/* Badge */}
            <div
              ref={badgeRef}
              className="flex justify-center sm:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">
                  Pre-Launch Offer Available
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <div
              ref={subheadingRef}
              className="space-y-2 text-center sm:text-left"
            >
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl mx-auto sm:mx-0">
                Premium 2 BHK Living in Central Noida
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Sector 76 • Metro at 100m • G+5 Low-Rise • Starting ₹62 Lacs
              </p>
            </div>

            {/* Payment Highlight */}
            <div className="flex justify-center sm:justify-start">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-yellow-400/30">
                <span className="px-8 sm:px-10 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-full text-xs font-bold whitespace-nowrap">
                  Pay 40% Now
                </span>
                <span className="text-xs font-medium text-white">
                  Balance 60% on Completion
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.a
                href="#enquiry"
                className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold overflow-hidden text-sm sm:text-base shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Enquire Now</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.button
                onClick={handleDownload}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-sm sm:text-base shadow-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Brochure</span>
              </motion.button>
            </div>
          </div>

          {/* Right Content - Glassmorphic Card */}
          <div className="relative mt-0 md:mt-10 w-full">
            <motion.div
              className="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    Property Overview
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-300">
                  Sector 76, Central Noida
                </p>
              </div>

              {/* Value Display */}
              <div className="mb-4 sm:mb-6 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-md border border-white/10">
                <div className="text-xs text-slate-300 mb-1">Starting From</div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  ₹62 Lakhs
                </div>

                {/* Mini Chart */}
                <div className="flex items-end gap-1 h-10 sm:h-12">
                  {[40, 65, 45, 80, 60, 95, 70, 85, 75, 90].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-blue-400 to-indigo-400 rounded-sm"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                    />
                  ))}
                </div>
              </div>

              {/* Info Grid */}
              <div
                ref={cardsRef}
                className="grid grid-cols-2 gap-2 sm:gap-3 mb-4"
              >
                {cardData.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-1 sm:mb-1.5" />
                      <div className="text-lg sm:text-xl font-bold text-white mb-0.5">
                        {item.value}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-slate-100">
                        {item.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 backdrop-blur-md border border-green-400/20">
                <span className="text-xs font-medium text-white">Status</span>
                <span className="px-2.5 py-1 bg-green-500 text-white text-[10px] font-bold rounded-full">
                  Pre-Launch Active
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
    </section>
  );
}

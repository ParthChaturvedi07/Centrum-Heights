import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, MapPin, Plane, Home, CheckCircle2, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function InvestmentSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

  const points = [
    {
      text: "Located in one of Central Noida's fastest-developing sectors.",
      icon: MapPin,
    },
    {
      text: "Surrounded by established residential and commercial zones ensuring steady demand.",
      icon: Home,
    },
    {
      text: "Proximity to upcoming Jewar Airport enhances future appreciation.",
      icon: Plane,
    },
    {
      text: "Excellent metro and road connectivity ensures consistent rental value.",
      icon: TrendingUp,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Description animation
      gsap.fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current?.children,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          },
        }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="investment"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InvestmentOrDeposit",
          name: "Centrum Heights Investment Potential",
          description:
            "Investment opportunity in Sector 76, Central Noida — strong appreciation due to metro connectivity and Jewar Airport.",
          areaServed: "Noida",
          potentialAction: {
            "@type": "BuyAction",
            target: "https://your-site.example/enquire",
          },
        })}
      </script>

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <style>{`
          @keyframes gradient-rotate {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-rotate {
            background-size: 200% 200%;
            animation: gradient-rotate 15s ease infinite;
          }
        `}</style>
      </div>

      {/* Floating animated orbs */}
      <motion.div
        className="absolute top-10 left-10 sm:top-20 sm:left-20 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-indigo-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-purple-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <motion.div
            ref={headingRef}
            className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl shadow-blue-500/10"
          >
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Investment Opportunity
            </span>
          </motion.div>

          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 bg-gradient-to-r from-violet-50 via-purple-50 to-indigo-50 bg-clip-text text-transparent px-4"
          >
            Investment Potential
          </h2>

          <p
            ref={descRef}
            className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-violet-50 leading-relaxed px-4"
          >
            Centrum Heights appeals equally to investors and end-users, offering{" "}
            <span className="font-semibold text-slate-500">strong appreciation potential</span>{" "}
            due to its strategic location, infrastructure, and connectivity advantages.
          </p>
        </div>

        {/* Investment Points Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          {points.map((point, i) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={i}
                className="group relative p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-start gap-3 sm:gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm md:text-base text-slate-20 leading-relaxed">
                      {point.text}
                    </p>
                  </div>

                  {/* Check icon */}
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-transparent via-transparent to-blue-100/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Bottom glow line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/50"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-10 sm:mb-12 md:mb-14">
          {[
            { label: "Appreciation Rate", value: "12-15%", sublabel: "Annual Growth" },
            { label: "Rental Yield", value: "6-8%", sublabel: "Expected Returns" },
            { label: "Metro Distance", value: "100m", sublabel: "Connectivity" },
            { label: "Airport Proximity", value: "40km", sublabel: "Jewar Airport" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              whileHover={{ y: -6, scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5 sm:mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-600">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="text-center">
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#enquiry"
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Request a Call Back</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </a>
          </motion.div>

          <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-slate-600 px-4">
            Get personalized investment insights and property details
          </p>
        </div>
      </div>
    </section>
  );
}
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);
  const featuresRef = useRef(null);

  const features = [
    {
      title: "Prime Location",
      description:
        "Strategically located in Sector 76, Central Noida, beside Sethi Max Royal. Centrum Heights offers excellent connectivity to major commercial hubs, schools, and healthcare facilities.",
      image:
        "https://images.unsplash.com/photo-1688978022482-00702c9eb83c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736",
    },
    {
      title: "Low-Rise Living",
      description:
        "Experience the exclusivity of G+5 low-rise architecture. Enjoy enhanced privacy, natural ventilation, and easy access without the crowding of high-rise towers.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
    },
    {
      title: "Spacious 2 BHK",
      description:
        "Choose from well-designed 2 BHK apartments in 977 & 1077 sq.ft. configurations. Each unit is crafted for comfort, functionality, and modern lifestyle needs.",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
    },
    {
      title: "Smart Investment",
      description:
        "Attractive pricing starting at ₹60.08 L with flexible 10-30-60 payment plan. Pre-launch rate at ₹6150 per sq.ft., offering excellent value in Central Noida.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        featuresRef.current?.children,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
      ref={sectionRef}
      className="relative h-full flex flex-col overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            About Centrum Heights
          </h2>
          <p className="text-md md:text-lg text-slate-600 leading-relaxed">
            Located beside Sethi Max Royal in Sector 76, Central Noida, Centrum
            Heights offers premium 2 BHK low-rise apartments designed for
            comfort, style, and connectivity. With only G+5 floors, each unit
            ensures privacy and easy access without the crowding of high-rise
            living.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20 w-full flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left - Text Content */}
          <div ref={featuresRef} className="space-y-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="relative cursor-pointer group"
                onMouseEnter={() => setActiveFeature(idx)}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: activeFeature === idx ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden">
                  {/* Title */}
                  <h3
                    className={`text-3xl md:text-4xl font-bold transition-all duration-500 ${
                      activeFeature === idx
                        ? "text-slate-900"
                        : "text-slate-300"
                    }`}
                  >
                    {feature.title}
                    {activeFeature === idx && (
                      <motion.span
                        className="inline-block ml-3 w-3 h-3 bg-green-500 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </h3>

                  {/* Animated underline */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mt-2"
                    initial={{ width: 0 }}
                    animate={{ width: activeFeature === idx ? "100%" : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>

                {/* Description - Shows only for active */}
                <AnimatePresence>
                  {activeFeature === idx && (
                    <motion.p
                      className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-xl"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right - Image Display */}
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

                {/* Title overlay on image */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h4 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                    {features[activeFeature].title}
                  </h4>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-white/20 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}

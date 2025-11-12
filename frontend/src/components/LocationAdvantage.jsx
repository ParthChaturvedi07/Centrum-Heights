import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Navigation,
  Clock,
  Train,
  ShoppingBag,
  Hospital,
  GraduationCap,
} from "lucide-react";
import HeadMeta from "../utils/HeadMeta";

gsap.registerPlugin(ScrollTrigger);

export default function LocationAdvantage() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);
  const mapRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const locations = [
    {
      name: "Spectrum Metro",
      distance: "300 m",
      icon: Train,
      category: "transport",
    },
    {
      name: "Sector 76 Metro Station",
      distance: "500m",
      icon: Train,
      category: "transport",
    },
    {
      name: "Logix Mall",
      distance: "2.3 km",
      icon: ShoppingBag,
      category: "retail",
    },
    {
      name: "DLF Mall of India",
      distance: "5.5 km",
      icon: ShoppingBag,
      category: "retail",
    },
    {
      name: "Fortis Hospital",
      distance: "5.3 km",
      icon: Hospital,
      category: "healthcare",
    },
    {
      name: "Medanta Hospital (upcoming)",
      distance: "450 m",
      icon: Hospital,
      category: "healthcare",
    },
    {
      name: "Amity University",
      distance: "4.6 km",
      icon: GraduationCap,
      category: "education",
    },
    {
      name: "DPS Sector 122",
      distance: "1.5 km",
      icon: GraduationCap,
      category: "education",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
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

      // List items stagger
      gsap.fromTo(
        listRef.current?.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 75%",
          },
        }
      );

      // Map animation
      gsap.fromTo(
        mapRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getCategoryColor = (category) => {
    return "from-blue-500 to-indigo-600";
  };

  return (
    <section
      id="location"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      <HeadMeta description="Centrally located in Sector 76, Noida — Centrum Heights enjoys proximity to metro, malls, schools, hospitals, and business hubs." />

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
        <style>{`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-shift {
            background-size: 200% 200%;
            animation: gradient-shift 15s ease infinite;
          }
        `}</style>
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-12 md:mb-16 px-4">
          <motion.div className="inline-flex items-center gap-2 mb-4 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20">
            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
            <span className="text-xs md:text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Location & Connectivity
            </span>
          </motion.div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6
             bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700
             bg-clip-text text-transparent text-center"
          >
            Strategically Connected
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Centrally located in{" "}
            <span className="font-semibold text-slate-800">
              Sector 76, Noida
            </span>
            , Centrum Heights enjoys proximity to key business districts,
            premium malls, and educational institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Location List */}
          <div className="order-2 lg:order-1">
            <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <Navigation className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
                <h3 className="text-base md:text-lg font-bold text-slate-900">
                  Key Landmarks
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                Everything you need within minutes of your doorstep
              </p>
            </div>

            <ul ref={listRef} className="space-y-2 md:space-y-3">
              {locations.map((loc, i) => {
                const IconComponent = loc.icon;
                return (
                  <motion.li
                    key={i}
                    className="group relative p-3 md:p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(
                        loc.category
                      )} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className="relative flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 p-2 md:p-2.5 rounded-lg bg-gradient-to-br ${getCategoryColor(
                            loc.category
                          )}`}
                        >
                          <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>

                        {/* Name */}
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-sm md:text-base text-slate-900 group-hover:text-slate-800 transition-colors block truncate">
                            {loc.name}
                          </span>

                          {/* Category badge - hidden on mobile */}
                          <div className="hidden sm:flex items-center gap-2 mt-1">
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${getCategoryColor(
                                loc.category
                              )} text-white font-medium capitalize`}
                            >
                              {loc.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Distance */}
                      <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                        <span className="text-blue-600 font-bold text-sm md:text-base lg:text-lg whitespace-nowrap">
                          {loc.distance}
                        </span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${getCategoryColor(
                        loc.category
                      )}`}
                      initial={{ width: 0 }}
                      animate={{ width: hoveredIndex === i ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Google Map */}
          <div ref={mapRef} className="order-1 lg:order-2">
            <motion.div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-white/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
                <iframe
                  title="Centrum Heights Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224328.56225473478!2d77.2393!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e3e0e50737%3A0xaadfbcf5ef87a1c1!2sSector%2076%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                ></iframe>

                {/* Overlay badge */}
                <div className="absolute top-3 left-3 md:top-6 md:left-6 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/50">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs md:text-sm font-semibold text-slate-900">
                      Live Location
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-blue-500/50 rounded-tl-2xl md:rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 md:w-20 md:h-20 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-indigo-500/50 rounded-br-2xl md:rounded-br-3xl" />
            </motion.div>

            {/* Info cards below map */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6">
              <motion.div
                className="p-2 md:p-4 rounded-lg md:rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg text-center"
                whileHover={{ y: -4 }}
              >
                <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-0.5 md:mb-1">
                  100m
                </div>
                <div className="text-[10px] md:text-xs text-slate-600">
                  Metro Station
                </div>
              </motion.div>

              <motion.div
                className="p-2 md:p-4 rounded-lg md:rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg text-center"
                whileHover={{ y: -4 }}
              >
                <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-0.5 md:mb-1">
                  2.3km
                </div>
                <div className="text-[10px] md:text-xs text-slate-600">
                  Logix Mall
                </div>
              </motion.div>

              <motion.div
                className="p-2 md:p-4 rounded-lg md:rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg text-center"
                whileHover={{ y: -4 }}
              >
                <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-0.5 md:mb-1">
                  450m
                </div>
                <div className="text-[10px] md:text-xs text-slate-600">
                  Medanta
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

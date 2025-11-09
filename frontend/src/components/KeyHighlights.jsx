import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function KeyHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const highlights = [
    {
      text: "G+5 premium low-rise residential project in Central Noida",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=800&fit=crop",
    },
    {
      text: "Smart lock system with video door phone and modular kitchen",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop",
    },
    {
      text: "Wooden-finish bedrooms with premium fittings and designer lighting",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=800&fit=crop",
    },
    {
      text: "Walking distance from Sector 76 Metro Station",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=800&fit=crop",
    },
    {
      text: "Surrounded by malls, schools, hospitals, and office hubs",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop",
    },
    {
      text: "Attractive pre-launch pricing and easy payment options",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % highlights.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [highlights.length]);

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section
      id="highlights"
      className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex flex-col"
    >
      {/* Animated Background Elements
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 sm:left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 sm:right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-indigo-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div> */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl"
                animate={{
                  x: [0, -50, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-white px-4">
            Highlights of Centrum Heights
          </h2>
          <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex-1 flex items-center justify-center px-2 sm:px-4 max-h-[500px] sm:max-h-[550px] md:max-h-[600px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Glassmorphism Card */}
              <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl aspect-square max-h-full">
                {/* Background Image */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
                  <img
                    src={highlights[currentIndex].image}
                    alt={`Highlight ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay with blue tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-blue-100/50 to-indigo-100/50" />
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-500/30 rounded-2xl sm:rounded-3xl blur-2xl -z-10" />
                
                {/* Glassmorphism Overlay */}
                <div className="relative h-full backdrop-blur-md  border-2 border-blue-300/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl flex flex-col justify-center">
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl mb-4 sm:mb-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex-1 flex items-center"
                  >
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-900 font-bold leading-tight drop-shadow-lg">
                      {highlights[currentIndex].text}
                    </p>
                  </motion.div>

                  {/* Counter Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 backdrop-blur-xl bg-white/70 border-2 border-blue-300/50 rounded-xl sm:rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2"
                  >
                    <span className="text-gray-900 font-bold text-xs sm:text-sm md:text-base drop-shadow">
                      {currentIndex + 1} / {highlights.length}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4">
          {highlights.map((highlight, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className="group relative touch-manipulation"
              aria-label={`Go to highlight ${idx + 1}`}
            >
              <motion.div
                className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-blue-600 w-10 sm:w-12"
                    : "bg-gray-300 hover:bg-gray-400 w-2.5 sm:w-3"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              {currentIndex === idx && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-sm"
                />
              )}
            </button>
          ))}
        </div>

        {/* Decorative Elements - Hidden on mobile */}
        <div className="hidden md:block absolute top-10 left-10 w-16 h-16 lg:w-20 lg:h-20 border-2 border-blue-300/40 rounded-2xl rotate-12" />
        <div className="hidden md:block absolute bottom-10 right-10 w-12 h-12 lg:w-16 lg:h-16 border-2 border-indigo-300/40 rounded-full" />
      </div>
    </section>
  );
}
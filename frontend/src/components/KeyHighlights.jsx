import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Lock, Sparkles, Train, MapPin, DollarSign } from "lucide-react";

export default function KeyHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const highlights = [
    {
      text: "G+5 premium low-rise residential project in Central Noida",
      image: "https://is1-2.housingcdn.com/01c16c28/97df0e86a5bd273c59e7ef5bf9fca043/v0/medium/2_bhk_independent_builder_floor-for-sale-sector_76-Noida-building.jpg",
      Icon: Building2,
    },
    {
      text: "Smart lock system with video door phone and modular kitchen",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop",
      Icon: Lock,
    },
    {
      text: "Wooden-finish bedrooms with premium fittings and designer lighting",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=800&fit=crop",
      Icon: Sparkles,
    },
    {
      text: "Walking distance from Sector 76 Metro Station",
      image: "https://media.biltrax.com/wp-content/uploads/2022/06/1sEOkcUg-Story-4-Noida-Metro-Aqua-Line-1.gif",
      Icon: Train,
    },
    {
      text: "Surrounded by malls, schools, hospitals, and office hubs",
      image: "https://content.jdmagicbox.com/v2/comp/delhi/q7/011pxx11.xx11.100331161101.b1q7/catalogue/max-super-speciality-hospital-indraprastha-extension-delhi-hospitals-f61czderr0.jpg",
      Icon: MapPin,
    },
    {
      text: "Attractive pre-launch pricing and easy payment options",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
      Icon: DollarSign,
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, highlights.length]);

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % highlights.length);
  };

  const goToPrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + highlights.length) % highlights.length;
    
    if (diff === 0) {
      return {
        zIndex: 30,
        scale: 1,
        rotateY: 0,
        x: 0,
        y: 0,
        opacity: 1,
      };
    } else if (diff === 1) {
      return {
        zIndex: 20,
        scale: 0.9,
        rotateY: -25,
        x: 200,
        y: 20,
        opacity: 0.7,
      };
    } else if (diff === highlights.length - 1) {
      return {
        zIndex: 20,
        scale: 0.9,
        rotateY: 25,
        x: -200,
        y: 20,
        opacity: 0.7,
      };
    } else {
      return {
        zIndex: 10,
        scale: 0.8,
        rotateY: diff > highlights.length / 2 ? 45 : -45,
        x: diff > highlights.length / 2 ? -300 : 300,
        y: 40,
        opacity: 0,
      };
    }
  };

  return (
    <section className="relative min-h-screen relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden flex items-center justify-center py-12 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Centrum Heights
          </h2>
          <p className="text-xl text-blue-200">Discover Premium Living</p>
        </motion.div>

        {/* 3D Card Stack */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center perspective-1000">
          <div className="relative w-full max-w-xl h-full" style={{ perspective: "2000px" }}>
            {highlights.map((highlight, index) => {
              const style = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 mx-auto w-11/12 md:w-full"
                  animate={style}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ${
                      isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                    }`}
                    onClick={() => !isActive && setCurrentIndex(index)}
                  >
                    {/* Background Image */}
                    <img
                      src={highlight.image}
                      alt={`Highlight ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: isActive ? 1 : 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl md:text-7xl mb-6"
                      >
                        {highlight.icon}
                      </motion.div>

                      {/* Text */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isActive ? 1 : 0.6, y: 0 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
                      >
                        {highlight.text}
                      </motion.p>

                      {/* Number Badge */}
                      <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center border-2 border-white/40">
                        <span className="text-2xl font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Previous Button */}
          <motion.button
            onClick={goToPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {highlights.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setIsAutoPlay(false);
                  setCurrentIndex(idx);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-white w-12"
                    : "bg-white/40 w-3 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Auto-play Toggle */}
        <motion.button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto mt-8 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 text-white font-semibold flex items-center gap-2 hover:bg-white/30 transition-colors"
        >
          {isAutoPlay ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </>
          )}
        </motion.button>
      </div>
    </section>
  );
}
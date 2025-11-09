import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, Play, Download } from "lucide-react";
import gallery1 from "../assets/images/vlcsnap-2025-11-07-13h34m14s505.png"
import gallery2 from "../assets/images/vlcsnap-2025-11-09-00h00m00s715.png"
import gallery3 from "../assets/images/vlcsnap-2025-11-09-00h00m05s496.png"
import gallery4 from "../assets/images/vlcsnap-2025-11-09-00h00m15s068.png"
import gallery5 from "../assets/images/vlcsnap-2025-11-09-00h00m46s802.png"
import gallery6 from "../assets/images/WhatsApp Image 2025-11-08 at 13.50.44_7cd76028.jpg"
import broucher from "../assets/doc/Centrum Heights Brochure.pdf";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const images = [
    {
      src: gallery1,
      alt: "Building architecture view 1",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: gallery2,
      alt: "Building architecture view 2",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: gallery3,
      alt: "Building architecture view 3",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: gallery4,
      alt: "Building architecture view 4",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: gallery5,
      alt: "Building architecture view 5",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: gallery6,
      alt: "US",
      span: "md:col-span-2 md:row-span-1",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate grid items
      gsap.from(gridRef.current?.children, {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full mb-4">
            <Camera className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-semibold text-blue-200">
              Visual Tour
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Project Gallery
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore stunning renders and premium designs
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16"
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`relative group overflow-hidden rounded-2xl sm:rounded-3xl ${img.span} h-64 sm:h-72 md:h-auto md:min-h-[250px]`}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Glassmorphism Card on Hover */}
              <div className="absolute inset-0 flex items-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 w-full">
                  <p className="text-white font-semibold text-sm sm:text-base">
                    {img.alt}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
                    <span className="text-xs sm:text-sm text-gray-300">
                      HD Render
                    </span>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500 rounded-2xl sm:rounded-3xl" />
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-12 sm:mb-16"
        >
          <div className="relative group">
            {/* Video Container with Glassmorphism */}
            <div className="relative backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 shadow-2xl overflow-hidden">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Video Wrapper */}
              <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-slate-800">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/3nLYaaTDPQI?rel=0"
                  title="Centrum Heights Project Walkthrough"
                  allowFullScreen
                  loading="lazy"
                ></iframe>

                {/* Play Button Overlay (for thumbnail) */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-900/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full flex items-center justify-center">
                    <Play
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                      fill="white"
                    />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Virtual Walkthrough
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Experience the project in 360° detail
                  </p>
                </div>
                <div className="flex items-center gap-2 text-blue-300 text-sm">
                  <Play className="w-4 h-4" />
                  <span>Watch Now</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Want to See More?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
              Download our complete brochure with floor plans, amenities, and
              pricing details
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <motion.a
                href="#enquiry"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-center"
              >
                Schedule a Visit
              </motion.a>
              <motion.a
                href={broucher}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto backdrop-blur-xl bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Get Brochure
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden lg:block absolute top-20 left-10 w-20 h-20 border-2 border-blue-400/20 rounded-2xl rotate-12" />
      <div className="hidden lg:block absolute bottom-20 right-10 w-16 h-16 border-2 border-purple-400/20 rounded-full" />
    </section>
  );
}

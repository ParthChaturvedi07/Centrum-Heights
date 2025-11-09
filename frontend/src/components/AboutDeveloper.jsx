import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Award, Users, TrendingUp } from "lucide-react";
import OM_INFRA from "../assets/images/ominfra.webp"

gsap.registerPlugin(ScrollTrigger);

export default function AboutDeveloper() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.children, {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: {
          amount: 0.5,
          ease: "power2.inOut"
        },
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: Building2,
      title: "Quality Construction",
      description: "Delivering residential spaces with superior build quality and attention to detail"
    },
    {
      icon: Award,
      title: "Trusted Developer",
      description: "Known for timely delivery and maintaining high standards across projects"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Committed to creating homes that prioritize functionality and comfort"
    },
    {
      icon: TrendingUp,
      title: "Long-term Value",
      description: "Properties designed to offer excellent returns and appreciation over time"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
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
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/60 px-4 py-2 rounded-full mb-4">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              The Builder
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About OM Infra
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="backdrop-blur-xl bg-white/70 border-2 border-gray-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                OM Infra is known for delivering residential spaces that combine
                functionality, aesthetics, and long-term value. Centrum Heights continues
                this tradition by offering modern low-rise living at the most strategic
                location in Noida.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                With a commitment to quality construction and customer satisfaction, OM Infra 
                has established itself as a trusted name in the real estate sector, creating 
                homes that stand the test of time.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                <div className="backdrop-blur-md bg-blue-50/80 border border-blue-200/50 rounded-xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">10+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="backdrop-blur-md bg-green-50/80 border border-green-200/50 rounded-xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="backdrop-blur-md bg-purple-50/80 border border-purple-200/50 rounded-xl p-4 text-center col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">5000+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Happy Families</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Logo & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="backdrop-blur-xl bg-white/60 border-2 border-gray-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              {/* Logo Section */}
              <div className="flex justify-center items-center mb-6 sm:mb-8">
                <div className="backdrop-blur-md bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200/50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      OM
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
                      INFRA
                    </div>
                    <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3" />
                  </div>
                </div>
              </div>

              {/* Decorative Building Image Placeholder */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={OM_INFRA}
                  alt="OM Infra Projects"
                  className="w-full h-full object-contain opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm sm:text-base">
                    Building Quality Homes Since 2013
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Why Choose OM Infra
          </h3>
        </motion.div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="backdrop-blur-xl bg-white/70 border border-gray-200/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-500 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden lg:block absolute top-20 left-10 w-16 h-16 border-2 border-blue-300/40 rounded-2xl rotate-12" />
      <div className="hidden lg:block absolute bottom-20 right-10 w-20 h-20 border-2 border-indigo-300/40 rounded-full" />
    </section>
  );
}
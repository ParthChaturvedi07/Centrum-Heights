import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, TrendingUp } from "lucide-react";
import broucher from "../assets/doc/Centrum Heights Brochure.pdf";

export default function PricingPlan() {
  const units = [
    {
      type: "2 BHK",
      size: "977 sq.ft.",
      price: "₹60.08 L",
      offer: "₹6150/sq.ft",
      plan: "10-30-60 Plan",
      features: [
        "Premium Low-Rise",
        "G+5 Floors Only",
        "Modular Kitchen",
        "Video Door Phone",
      ],
      popular: false,
    },
    {
      type: "2 BHK",
      size: "1077 sq.ft.",
      price: "₹66.23 L",
      offer: "₹6150/sq.ft",
      plan: "10-30-60 Plan",
      features: [
        "Premium Low-Rise",
        "G+5 Floors Only",
        "Modular Kitchen",
        "Video Door Phone",
      ],
      popular: true,
    },
  ];

  useEffect(() => {
    const ld = {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "Centrum Heights Pricing",
      itemListElement: units.map((u) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: `${u.type} (${u.size})`,
        },
        price: u.price.replace(/[^\d]/g, ""),
        priceCurrency: "INR",
        description: `${u.type} low-rise apartment, ${u.offer}, ${u.plan}`,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed=".03"
      id="pricing"
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50"
    >
      {/* Animated Background Elements */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100/80 backdrop-blur-sm border border-purple-200 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">
              Pre-Launch Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Home
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible payment plans designed for your convenience
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {units.map((unit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              {/* Popular Badge */}
              {unit.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full backdrop-blur-xl bg-white/70 border-2 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  unit.popular ? "border-purple-400/60" : "border-gray-200/50"
                }`}
              >
                {/* Glow Effect for Popular */}
                {unit.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {unit.type}
                    </h3>
                    <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {unit.size}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                      {unit.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">
                      Pre-launch:{" "}
                      <strong className="text-green-600">{unit.offer}</strong>
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {unit.features.map((feature, fIdx) => (
                    <motion.li
                      key={fIdx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + fIdx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Payment Plan Badge */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-600 mb-1">Payment Plan</p>
                  <p className="text-lg font-bold text-purple-700">
                    {unit.plan}
                  </p>
                </div>

                {/* CTA Button
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 rounded-xl font-semibold shadow-lg transition-all duration-300 ${
                    unit.popular
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-purple-500/50"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Book Now
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="backdrop-blur-xl bg-yellow-50/80 border-2 border-yellow-200/60 rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-gray-900 mb-1">
                  Limited Time Pre-Launch Offer
                </p>
                <p className="text-gray-700">
                  Book with just{" "}
                  <strong className="text-purple-700">10% payment</strong> — Pay
                  40% now, 60% on completion
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <motion.a
            href="#enquiry"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Enquire Now
          </motion.a>
          <motion.a
            href={broucher}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="backdrop-blur-xl bg-white/70 border-2 border-purple-300 text-purple-700 hover:bg-white/90 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 w-full sm:w-auto text-center"
          >
            Get Brochure &amp; Price Details
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

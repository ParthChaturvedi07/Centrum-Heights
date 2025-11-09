import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeadMeta from "../utils/HeadMeta";

export default function ThankYou() {
  useEffect(() => {
    // Optional: scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center px-6">
      <HeadMeta
        title="Thank You for Your Enquiry – Centrum Heights Noida"
        description="Thank you for showing interest in Centrum Heights, Sector 76, Noida. Our property consultant will contact you shortly with detailed pricing, floor plans, and availability."
        ogTitle="Thank You – Centrum Heights"
        ogDescription="Our sales team will reach out within a few hours. Chat on WhatsApp or return to home."
      />

      <div className="max-w-md bg-white rounded-2xl shadow-xl p-10">
        <img
          src="/assets/icons/thankyou-check.svg"
          alt="Thank You Icon"
          className="mx-auto mb-6 w-16 h-16"
        />

        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Thank You for Your Enquiry
        </h1>

        <p className="text-slate-600 mb-8 leading-relaxed">
          Thank you for showing interest in <strong>Centrum Heights, Sector 76 Noida.</strong><br />
          Our property consultant will contact you within a few hours with detailed pricing,
          floor plans, and availability.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .01 5.37.01 12c0 2.12.55 4.15 1.6 5.96L0 24l6.19-1.63A11.9 11.9 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22c-1.83 0-3.61-.5-5.17-1.45l-.37-.22-3.67.97.98-3.57-.24-.37A9.94 9.94 0 012 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10z" />
            </svg>
            Chat on WhatsApp
          </a>

          {/* Back to Home CTA */}
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Back to Home Page
          </Link>
        </div>
      </div>

      {/* Subtle Footer note */}
      <p className="mt-10 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Centrum Heights. All Rights Reserved.
      </p>
    </section>
  );
}

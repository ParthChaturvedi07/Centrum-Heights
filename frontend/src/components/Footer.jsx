import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Address */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Centrum Heights</h3>
            <p className="text-sm">
              Sector 76, Central Noida <br />
              Contact:{" "}
              <a href="tel:+919999999999" className="text-blue-400">
                +91 8587897666
              </a>
              <br />
              Email:{" "}
              <a href="mailto:info@centrumheights.in" className="text-blue-400">
                centrumheights1@gmail.com
              </a>
            </p>
          </div>

          {/* RERA */}
          <div>
            <p className="text-sm">
              This website is for informational purposes only and does not
              constitute an offer to sell.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 text-center text-sm">
          © {year} Centrum Heights. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

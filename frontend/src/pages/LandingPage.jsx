import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import ProjectOverview from "../components/ProjectOverview";
import KeyHighlights from "../components/KeyHighlights";
import PricingPlan from "../components/PricingPlan";
import Gallery from "../components/Gallery";
import LocationAdvantage from "../components/LocationAdvantage";
import InvestmentSection from "../components/InvestmentSection";
import AboutDeveloper from "../components/AboutDeveloper";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";
import HeadMeta from "../utils/HeadMeta";
import { buildCanonicalUrl } from "../utils/seo";

const LandingPage = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "Centrum Heights",
      description:
        "Premium 2 BHK low-rise apartments in Sector 76, Noida with strong metro connectivity.",
      url: buildCanonicalUrl("/"),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sector 76",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      numberOfRooms: 2,
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Metro connectivity",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Low-rise development",
          value: true,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: buildCanonicalUrl("/"),
        },
      ],
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      <HeadMeta
        title="Centrum Heights - 2 BHK Flats in Sector 76, Central Noida | Pre-Launch Offers"
        description="Explore premium 2 BHK low-rise apartments at Centrum Heights, Sector 76, Central Noida. Metro connectivity, stylish interiors and pre-launch pricing from ₹60 Lacs. Enquire now."
        ogTitle="2 BHK Low-Rise Apartments in Sector 76, Central Noida – Centrum Heights"
        ogDescription="Premium G+5 low-rise apartments with metro connectivity at just 100 metres — pre-launch price starting ₹60 Lacs."
        canonicalPath="/"
        robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        jsonLd={structuredData}
      />
      <Header />
      <main>
        <HeroSection />
        <section id="overview">
          <ProjectOverview />
        </section>
        <section id="highlights">
          <KeyHighlights />
        </section>
        <section id="pricing">
          <PricingPlan />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="location">
          <LocationAdvantage />
        </section>
        <section id="investment">
          <InvestmentSection />
        </section>
        <section id="about">
          <AboutDeveloper />
        </section>
        <section id="enquiry">
          <LeadForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

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

const LandingPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main className="">
        {" "}
        {/* padding to account for fixed header */}
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

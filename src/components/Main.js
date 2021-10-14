import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
import NewsletterSection from "./sections/NewsletterSection";
import TestimonialsSection from "./sections/TestimonialsSection";

export default function Main() {
  return (
    <div className="body-wrap boxed-container">
      <Header />

      <main>
        <HeroSection />
        <FeatureSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

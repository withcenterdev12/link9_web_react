"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InquiryOverlay from "../components/InquiryOverlay";
import FloatingButton from "../components/FloatingButton";
import FAQSection from "../components/sections/FAQSection";
import HeroSection from "../components/sections/HeroSection";
import LastSection from "../components/sections/LastSection";
import BottomNavigationBar from "../components/BottomNavigationBar";
import ServicesSection from "../components/sections/ServicesSection";
import SuccessInquiryOverlay from "../components/SuccessInquiryOverlay";
import InteractiveSection from "../components/sections/InteractiveSection";
import InformationSection from "../components/sections/InformationSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import PaymentBannerSection from "../components/sections/PaymentBannerSection";
import ServiceOverviewSection from "../components/sections/ServiceOverviewSection";
import RecurringPaymentSection from "../components/sections/RecurringPaymentSection";

export default function MainPage() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  function toggleOverlay() {
    setIsOverlayOpen(!isOverlayOpen);
  }

  function closeSuccessOverlay() {
    setShowSuccessOverlay(false);
  }

  return (
    <>
      <Header onOpen={toggleOverlay} />
      <main className="mx-auto flex flex-col items-center overflow-x-hidden sm:w-[1200px]">
        <HeroSection />
        <PaymentBannerSection />
        <ServiceOverviewSection />
        <TestimonialsSection />
        <RecurringPaymentSection />
        <InformationSection />
        <ServicesSection />
        <FAQSection />
        <InteractiveSection />
        <LastSection />
        <Footer />
        {isOverlayOpen && <InquiryOverlay onClose={toggleOverlay} />}
        {showSuccessOverlay && (
          <SuccessInquiryOverlay onClose={closeSuccessOverlay} />
        )}
      </main>
      <FloatingButton onOpen={toggleOverlay} />
      <BottomNavigationBar onOpen={toggleOverlay} />
    </>
  );
}

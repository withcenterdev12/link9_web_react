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
      {/* Page specific SEO – React Document Metadata v19 */}
      <title>링구</title>
      <meta name="description" content="링크로 시작하는 간편 구독 서비스" />
      <meta
        name="keywords"
        content="링구, 간편구독, 구독서비스, 누구나 쉽고 빠르게 구독, 구독, 소상공인, 학원비, 렌터카, 후원금"
      />
      <meta name="author" content="링구" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="링구" />
      <meta
        property="og:description"
        content="링크로 시작하는 간편 구독 서비스"
      />
      <meta property="og:url" content="" />
      <meta
        property="og:image"
        content="https://xn--2e0bw7u.com/img/ogimg.png"
      />

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

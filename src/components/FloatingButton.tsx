"use client";

import Button from "./common/Button";
import { useState, useEffect } from "react";

export default function FloatingButton({
  onOpen,
}: Readonly<{
  onOpen: () => void;
}>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const paymentBannerSection = document.querySelector(
        'section[data-section="payment-banner"]',
      );

      let shouldShow = false;

      if (paymentBannerSection) {
        const paymentRect = paymentBannerSection.getBoundingClientRect();
        const isPaymentVisible = paymentRect.bottom <= window.innerHeight;
        shouldShow = isPaymentVisible;
      }

      const footer = document.querySelector("footer");
      if (footer && shouldShow) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible =
          footerRect.top < window.innerHeight && footerRect.bottom > 0;
        if (isFooterVisible) {
          shouldShow = false;
        }
      }

      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`mx-auto w-full max-w-[1200px] items-center justify-between bg-gradient-to-r from-[#1F4B82] via-[#799CC7] to-[#083A78] px-36 transition-all duration-200 sm:sticky sm:bottom-0 sm:z-50 ${
        isVisible
          ? "flex h-[100px] opacity-97"
          : "pointer-events-none hidden opacity-0"
      }`}
    >
      <div className="flex flex-col">
        <p className="text-xl font-bold text-white sm:text-2xl">
          사장님, 간편한 구독 · 1회성 결제가 필요하신가요?
        </p>
        <p className="text-sm text-[#CFD9E6] sm:text-base">
          번거로운 절차 없이, 지금 바로{" "}
          <span className="font-bold text-white">링구</span>와 함께
          시작해보세요.
        </p>
      </div>
      <Button
        customStyle="font-semibold text-white bg-gradient-to-l h-[52px] rounded-[4px] w-[150px] from-[#3A72B6] via-[#5090DD] to-[#7FB5F8]"
        onClick={onOpen}
      >
        사장님 가입문의
      </Button>
    </div>
  );
}

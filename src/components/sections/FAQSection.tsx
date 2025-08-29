"use client";

import { useState } from "react";
import { faqData, faqCards } from "../../utils/constants";

import Button from "../common/Button";
import FAQCard from "../common/FAQCard";
import Accordion from "../common/Accordion";

import qr_a from "../../../public/images/qr_aos_c.png";
import qr_i from "../../../public/images/qr_ios_c.png";
import apple from "../../../public/images/iconIos.svg";
import playstore from "../../../public/images/iconAos.png";

export default function FAQSection() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [openAccordions, setOpenAccordions] = useState<Set<number>>(
    new Set([1, 2, 3])
  );

  function handleToggle() {
    setShowAll(!showAll);
  }

  function handleAccordionToggle(id: number) {
    setOpenAccordions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }

  const displayedFAQs = showAll ? faqData : faqData.slice(0, 3);

  return (
    <section className="flex min-h-[54.375rem] w-full flex-col items-start bg-gradient-to-b from-[#18232F] via-[#083A78] to-[#18232F] pr-[1.625rem] pb-16 pl-[1.625rem] sm:pr-[6.25rem] sm:pl-[6.25rem]">
      <h2 className="mt-[3.4rem] text-center text-[1.8rem] font-bold text-white sm:mt-[7.6rem] sm:text-[3rem]">
        자주 묻는 질문
      </h2>
      <div className="flex w-full flex-col gap-2">
        {displayedFAQs.map((faq) => (
          <Accordion
            key={faq.id}
            number={faq.id}
            question={faq.question}
            content={faq.content}
            isOpen={openAccordions.has(faq.id)}
            onToggle={() => handleAccordionToggle(faq.id)}
          />
        ))}
      </div>
      <Button
        customStyle="font-semibold mt-7 mb-26 sm:mb-40 self-center text-[#A8CCFF] hover:bg-[#A8CCFF]/5 bg-opacity-5 transition-colors duration-200 px-2 py-[2px] rounded"
        onClick={handleToggle}
      >
        {showAll ? "접기" : "더 보기"}
      </Button>
      <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:justify-between">
        <div className="flex flex-col">
          <p className="text-center text-[1.75rem] font-bold text-[#A8CCFF]">
            때마다 알아서 결제되는
            <br />
            나의 구독 서비스, 링구
          </p>
          {/* Desktop View QR*/}
          <div className="mt-6 hidden justify-between px-2 text-lg font-bold text-[#4D8EDE] sm:flex">
            <div className="flex flex-col items-center">
              <p>안드로이드</p>
              <img src={qr_a} alt="Android QR Code" className="h-20 w-20" />
            </div>
            <div className="flex flex-col items-center">
              <p>아이폰</p>
              <img src={qr_i} alt="Android QR Code" className="h-20 w-20" />
            </div>
          </div>
        </div>
        {/* Mobile View Download*/}
        <div className="flex h-[5.25rem] w-[15.125rem] flex-row items-center justify-around sm:hidden">
          <img
            src={playstore}
            alt="Playstore Logo"
            className="h-[35px] w-[110px] hover:cursor-pointer"
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.heredot.link9corp&pli=1"
              );
            }}
          />
          <img
            src={apple}
            alt="Apple Logo"
            className="h-[35px] w-[110px] hover:cursor-pointer"
            onClick={() => {
              window.open(
                "https://apps.apple.com/kr/app/%EB%A7%81%EA%B5%AC-%EC%82%AC%EC%9E%A5%EB%8B%98-%EB%A7%81%ED%81%AC-%EC%A0%84%EB%8B%AC%EB%A1%9C-%EA%B0%84%ED%8E%B8-%EA%B5%AC%EB%8F%85%EC%9D%98-%EC%8B%9C%EC%9E%91/id6738809526"
              );
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-5 sm:flex sm:flex-row sm:gap-x-5">
          {faqCards.map((faq, index) => (
            <FAQCard
              key={index}
              image={faq.image}
              label={faq.label}
              size={faq.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

import Button from "../common/Button";
import PhoneCard from "../common/PhoneCard";
import FeatureCard from "../common/FeatureCard";
import EnvelopeContent from "../common/EnvelopeContent";
import SuccessOverlay from "../SuccessOverlay";

import { featureCards, phoneCards } from "../../utils/constants";

import qr_i from "../../../public/images/qr_ios_u.png";
import qr_a from "../../../public/images/qr_aos_u.png";
import apple from "../../../public/images/iconIos.svg";
import playstore from "../../../public/images/iconAos.png";

import use_0 from "../../../public/images/use_0.svg";
import use_1 from "../../../public/images/use_1.png";
import phone from "../../../public/images/phone.svg";
import envelope from "../../../public/images/envelope.svg";
import status_bar_blue from "../../../public/images/status_bar_blue.svg";
import status_bar_white from "../../../public/images/status_bar_white.svg";

export default function InteractiveSection() {
  const [isInvitation, setIsInvitation] = useState(false);
  const [selectedCard, setSelectedCard] = useState(phoneCards[0]);
  const [showSuccess, setShowSuccess] = useState(false);

  const statusBar = isInvitation ? status_bar_blue : status_bar_white;
  const phoneBackground = isInvitation ? "bg-[#C3D6F3]" : "bg-white";

  return (
    <section className="flex w-full flex-col items-center bg-gradient-to-b from-[#4D80BF] to-[#A1C0E9] sm:h-[88.5rem]">
      <h2 className="mt-[3.75rem] text-center text-[1.625rem] font-medium tracking-tight text-white sm:mt-[8.3rem] sm:text-left sm:text-5xl">
        혹시, 정기 결제를 하고 싶은 <br className="block sm:hidden" />{" "}
        고객님이신가요?
      </h2>
      <div className="mt-12 flex w-full flex-col gap-4 px-[1.625rem] sm:w-auto sm:flex-row sm:px-0">
        {featureCards.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        ))}
      </div>
      {/* */}
      <div className="mt-[1.625rem] flex w-full flex-col px-[3.125rem] sm:mt-34 sm:flex-row sm:px-26">
        {/* Left Side */}
        <div className="flex h-auto w-full flex-1 flex-col items-center">
          <h3 className="text-center text-lg font-medium text-white sm:text-[1.75rem]">
            어딘가에 꾸준히 입금하고 있으신 <br />
            모든 고객님께 추천 드립니다!
          </h3>
          <Button
            customStyle="bg-gradient-to-b from-[#A1C0E9] to-[#C1D5EF] text-white rounded-2xl w-[18.75rem] h-[3.75rem] font-bold text-lg mt-8"
            onClick={() => {
              window.open("https://web.xn--2e0bw7u.com/");
            }}
            hasArrow
          >
            지금 바로 이용하기
          </Button>
          {/* Download */}
          <div className="mt-8 flex w-full flex-row justify-evenly gap-2 px-10 font-extrabold text-[#4D80BF] sm:gap-0">
            <img
              src={playstore}
              alt="Playstore Logo"
              className="block h-[35px] w-[110px] hover:cursor-pointer sm:hidden"
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.heredot.link9corp&pli=1"
                );
              }}
            />
            <img
              src={apple}
              alt="Apple Logo"
              className="block h-[35px] w-[110px] hover:cursor-pointer sm:hidden"
              onClick={() => {
                window.open(
                  "https://apps.apple.com/kr/app/%EB%A7%81%EA%B5%AC-%EC%82%AC%EC%9E%A5%EB%8B%98-%EB%A7%81%ED%81%AC-%EC%A0%84%EB%8B%AC%EB%A1%9C-%EA%B0%84%ED%8E%B8-%EA%B5%AC%EB%8F%85%EC%9D%98-%EC%8B%9C%EC%9E%91/id6738809526"
                );
              }}
            />
            <div className="hidden flex-col items-center sm:flex">
              <p>안드로이드</p>
              <img src={qr_a} alt="Android QR" width={82} height={82} />
            </div>
            <div className="hidden flex-col items-center sm:flex">
              <p>아이폰</p>
              <img src={qr_i} alt="iPhone QR" width={82} height={82} />
            </div>
          </div>
          <p className="mt-14 text-center text-lg font-medium text-white sm:text-[1.75rem]">
            링구(일반용)는 <br />
            이렇게 사용하세요
          </p>
          <div className="relative mt-8 ml-0 flex h-[240px] w-[438px] items-center justify-center sm:mx-auto">
            <div className="absolute left-0 z-20 flex h-[245px] w-[245px] justify-center rounded-full bg-gradient-to-b from-[#E0EAF7] to-[#B5CDED] p-10">
              <div className="absolute top-5 left-1/2 z-30 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-[#4D80BF] text-xs font-bold text-white">
                1
              </div>
              <div className="flex flex-col text-center">
                <h4 className="text-lg font-bold text-[#2C5D9E]">
                  사장님께 <br />
                  링크를 전달 받고,,
                </h4>
                <img
                  src={use_0}
                  alt="Usage step 1"
                  width={180}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="absolute right-0 z-10 flex h-[245px] w-[245px] items-center justify-center rounded-full bg-gradient-to-b from-[#E0EAF7] to-[#B5CDED]">
              <div className="absolute top-5 left-1/2 z-20 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-[#4D80BF] text-xs font-bold text-white">
                2
              </div>
              <div className="flex flex-col items-center text-center">
                <h4 className="mb-2 text-lg font-bold text-[#2C5D9E]">
                  &quot;구독하기&quot; 누르면 끝!
                </h4>
                <img
                  src={use_1}
                  alt="Usage step 2"
                  width={140}
                  height={150}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <p className="mt-16 text-center font-semibold text-[#2D5D9E]">
            이후, 결제에 신경 쓰실 필요 없이
            <br /> 알아서 챙겨드려요.
          </p>
        </div>
        {/* Right Side */}
        <div className="mb-[3.125rem] flex w-full flex-1 flex-col items-center sm:mb-0">
          <h3 className="self-center text-center text-[1.3rem] font-medium text-white sm:text-[1.75rem]">
            링구(일반용) 체험하기
          </h3>
          <div className="relative mt-[7.75rem] h-[530px] overflow-hidden sm:mt-36 sm:h-[650px]">
            {/* Phone background */}
            <div
              className={`absolute top-[6px] left-[2px] z-0 h-[640px] w-[calc(100%-6px)] rounded-t-[30px] sm:top-[10px] sm:left-[10px] sm:w-[320px] ${phoneBackground}`}
            />
            <img
              src={phone}
              height={700}
              width={340}
              alt="Phone"
              className="relative z-10"
            />
            <div className="absolute top-0 left-0 z-20 flex h-full w-full flex-col px-5 py-12 sm:px-6">
              <img
                src={statusBar}
                alt="Phone Status Bar"
                className="absolute top-[5px] -left-[5px] scale-90"
              />
              {isInvitation ? (
                <>
                  <img
                    src={envelope}
                    alt="Envelope"
                    className="absolute top-[65px] -left-[1px] z-20 scale-[92.5%]"
                  />
                  <p className="absolute top-[120px] left-1/2 z-30 -translate-x-1/2 text-lg font-bold whitespace-nowrap text-white sm:top-[135px]">
                    구독 초대장이 도착했어요
                  </p>
                  <div className="absolute top-[180px] right-[24px] left-[24px] z-10 sm:top-[200px]">
                    <EnvelopeContent
                      imageUrl={selectedCard.imageUrl}
                      title={selectedCard.title}
                      description={selectedCard.description}
                      price={` ${selectedCard.price}`}
                      registrationDate={selectedCard.registrationDate}
                    />
                    <div className="mt-3 flex flex-row gap-2 sm:mt-7">
                      <Button
                        onClick={() => setIsInvitation(false)}
                        customStyle="flex-1 bg-[#F7FAFF] text-[#427ABF] rounded-lg h-[3rem] sm:h-[3.125rem] text-sm sm:text-base "
                      >
                        다음에 할게요
                      </Button>
                      <Button
                        onClick={() => setShowSuccess(true)}
                        customStyle="flex-1 bg-[#427ABF] text-white rounded-lg h-[3rem] sm:h-[3.125rem] text-sm sm:font-extrabold sm:text-lg font-semibold"
                      >
                        구독하기
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="mt-0 animate-bounce text-sm font-semibold sm:mt-4">
                    구독 상품을 눌러보세요
                  </p>
                  <div className="mt-2 flex flex-col gap-2">
                    {phoneCards.map((card, index) => (
                      <div
                        onClick={() => {
                          setSelectedCard(card);
                          setIsInvitation(!isInvitation);
                        }}
                        className="cursor-pointer"
                        key={index}
                      >
                        <PhoneCard
                          imageUrl={card.imageUrl}
                          title={card.title}
                          description={card.description}
                          price={card.price}
                          backgroundColor={card.backgroundColor}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
              {showSuccess && (
                <SuccessOverlay
                  onConfirm={() => {
                    setShowSuccess(false);
                    setIsInvitation(false);
                  }}
                  title={selectedCard.description}
                  price={selectedCard.price}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

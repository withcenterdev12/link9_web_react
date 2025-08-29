"use client";

import Button from "../common/Button";

import apple from "../../../public/images/iconIos.svg";
import qr_i from "../../../public/images/qr_ios_c.png";
import qr_a from "../../../public/images/qr_aos_c.png";
import playstore from "../../../public/images/iconAos.png";
import topArrow from "../../../public/images/top_arrow.svg";
import smallTopArrow from "../../../public/images/small_top_arrow.svg";

import rolling_1 from "../../../public/images/rolling_1.png";
import rolling_2 from "../../../public/images/rolling_2.png";

export default function HeroSection() {
  return (
    <section className="relative h-[40.375rem] w-full overflow-hidden bg-gradient-to-l from-[#0F3159] to-[#18232F] sm:h-[40.625rem]">
      {/* Mobile background scrolling animation */}
      <div className="absolute inset-0 mt-10 flex justify-end overflow-hidden sm:hidden">
        <div className="-mr-54 flex -skew-x-16 transform gap-4 pt-25">
          {/* Left column - moving up */}
          <div className="animate-scroll-up flex flex-col gap-4 opacity-45">
            <img
              src={rolling_1}
              alt="Rolling 1"
              className="h-auto w-48 rounded-lg"
            />
            <img
              src={rolling_1}
              alt="Rolling 1"
              className="h-auto w-48 rounded-lg"
            />
          </div>
          {/* Right column - moving down */}
          <div className="animate-scroll-down flex flex-col gap-4 opacity-20">
            <img
              src={rolling_2}
              alt="Rolling 2"
              className="h-auto w-48 rounded-lg"
            />
            <img
              src={rolling_2}
              alt="Rolling 2"
              className="h-auto w-48 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 flex w-full">
        <div className="flex flex-1 flex-col items-start">
          <img
            src={topArrow}
            alt="Arrow Logo"
            className="hidden sm:block sm:h-[2.198rem] sm:w-[33.18rem]"
          />
          <img
            src={smallTopArrow}
            alt="Arrow Logo"
            className="block sm:hidden"
          />
          <div className="pt-[9.2rem] pl-[1.875rem] sm:pt-[3.8rem] sm:pl-[6.5rem]">
            <h1 className="text-[2rem] leading-tight font-extrabold text-[#A8CCFF] sm:text-[2.75rem]">
              링크 하나로 끝나는
              <br />
              정기 결제
            </h1>
            <div className="mt-4 text-[#FFFFFF]">
              <span className="leading-snug font-medium whitespace-nowrap">
                <p className="text-[1.25rem] sm:text-[25px]">
                  매번 번거로운 결제 요청, 이젠 옛말!
                </p>
                <p className="text-[1rem] sm:text-[20px]">
                  수 개월 반복할 결제, 한번의 등록으로 자동화
                </p>
              </span>
            </div>
            <Button
              customStyle="font-bold text-lg w-[17.5rem] sm:w-[18.5rem] text-white h-[3.75rem] sm:mt-[2.6rem] mt-[2.063rem] bg-gradient-to-b from-[#3A72B6] to-[#4D8EDE] rounded-2xl"
              onClick={() => {
                window.open("https://biz.xn--2e0bw7u.com/");
              }}
              hasArrow={true}
            >
              지금 바로 이용하기
            </Button>
            <div className="mt-[0.85rem] flex h-[5.25rem] w-[17.5rem] flex-col items-center justify-start gap-0 rounded-2xl bg-[#09131E] pt-2 sm:mt-3 sm:h-[10.875rem] sm:w-[18.75rem] sm:flex-row sm:justify-around sm:gap-0 sm:pt-0">
              <div className="hidden w-full flex-col items-center text-[0.938rem] font-bold text-[#4D8EDE] sm:flex">
                <p>또는 앱 다운로드</p>
                <div className="flex w-full flex-row justify-around">
                  <div className="flex flex-col items-center">
                    <p>안드로이드</p>
                    <img
                      src={qr_a}
                      alt="Android QR Code"
                      className="h-[5.125rem] w-[5.125rem]"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <p>아이폰</p>
                    <img
                      src={qr_i}
                      alt="Apple QR Code"
                      className="h-[5.125rem] w-[5.125rem]"
                    />
                  </div>
                </div>
              </div>
              {/* Desktop view QR*/}
              {/* <div className="hidden flex-col items-center gap-y-2 sm:flex">
                  <img
                    src={qr_a}
                    alt="Android QR Code"
                    className="h-[4.125rem] w-[4.125rem]"
                  />
                  <div className="flex flex-row items-center gap-x-1">
                    <Image src={playstoreLogo} alt="Playstore Logo" />
                    <p className="text-[0.625rem] text-[#2C5D9E]">
                      구글 플레이스토어
                    </p>
                  </div>
                </div>
                <div className="hidden flex-col items-center gap-y-2 sm:flex">
                  <Image
                    src={qr_i}
                    alt="Apple QR Code"
                    className="h-[4.125rem] w-[4.125rem]"
                  />
                  <div className="flex flex-row items-center gap-x-1">
                    <Image src={appleLogo} alt="Apple Logo" />
                    <p className="text-[0.625rem] text-[#2C5D9E]">
                      애플 앱스토어
                    </p>
                  </div>
                </div>*/}
              {/* Mobile view download link*/}
              <p className="block font-bold text-[#4D8EDE] sm:hidden">
                또는 앱 다운로드
              </p>
              <div className="flex flex-row gap-2 sm:hidden">
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
            </div>
            <p className="mt-[0.938rem] text-sm font-semibold text-[#006AFF]">
              ✓ 현재 무료 서비스중!
            </p>
          </div>
        </div>
        <div className="relative hidden flex-1 flex-col items-center justify-center overflow-hidden sm:flex">
          <div className="mt-26 -ml-90 flex -skew-x-16 transform gap-6 overflow-hidden">
            {/* Left column - moving up */}
            <div className="animate-scroll-up flex flex-col gap-4 opacity-75">
              <img
                src={rolling_1}
                alt="Rolling 1"
                className="h-auto w-64 rounded-lg shadow-lg"
              />
              <img
                src={rolling_1}
                alt="Rolling 1"
                className="h-auto w-64 rounded-lg shadow-lg"
              />
            </div>
            {/* Right column - moving down */}
            <div className="animate-scroll-down flex flex-col gap-4 opacity-40">
              <img
                src={rolling_2}
                alt="Rolling 2"
                className="h-auto w-64 rounded-lg shadow-lg"
              />
              <img
                src={rolling_2}
                alt="Rolling 2"
                className="h-auto w-64 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import left_image from "../../../public/images/user.png";
import right_image from "../../../public/images/corp.png";
import Button from "../common/Button";

export default function LastSection() {
  return (
    <section className="flex w-full flex-col sm:h-[40.625rem] sm:flex-row">
      {/* Left */}
      <div className="relative flex flex-1 flex-col items-start pt-12 pl-6 sm:h-full sm:pt-[6.625rem] sm:pl-[6.5rem]">
        <img
          src={left_image}
          alt="Left background"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <h2 className="relative z-10 text-3xl font-bold text-white sm:text-5xl">
          매달 나가는 비용을
        </h2>
        <h2 className="relative z-10 mt-1 text-3xl font-bold text-white sm:mt-3 sm:text-5xl">
          간편하게
        </h2>
        <Button
          customStyle="z-10 bg-[#427ABF] text-white h-[4rem] w-[18.75rem] rounded-2xl font-bold text-[17px] mt-82 sm:mt-70 mb-[3.25rem]"
          onClick={() => {
            window.open("https://web.xn--2e0bw7u.com/");
          }}
          hasArrow
        >
          링구 바로가기(일반용)
        </Button>
      </div>
      {/* Right */}
      <div className="relative flex flex-1 flex-col items-start pt-12 pl-6 sm:h-full sm:pt-[6.625rem] sm:pl-[6.5rem]">
        <img
          src={right_image}
          alt="Right background"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
        <h2 className="relative z-10 text-3xl font-bold text-white sm:text-5xl">
          매달 들어올 비용을
        </h2>
        <h2 className="relative z-10 mt-1 text-3xl font-bold text-white sm:mt-3 sm:text-5xl">
          간편하게
        </h2>
        <Button
          customStyle="z-10 bg-[#18232F] text-white h-[4rem] w-[18.5rem] rounded-2xl font-bold px-4 mt-82 sm:mt-70 mb-[3.25rem]"
          onClick={() => {
            window.open("https://biz.xn--2e0bw7u.com/");
          }}
          hasArrow
        >
          링구사장님 바로가기(사업자용)
        </Button>
      </div>
    </section>
  );
}

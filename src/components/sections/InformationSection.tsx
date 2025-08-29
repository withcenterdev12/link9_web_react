import { forWho } from "../../utils/constants";
import man from "../../../public/images/man.png";
import CheckBanner from "../common/CheckBanner";
import stepsMobile from "../../../public/images/steps_mobile.png";
import stepsDesktop from "../../../public/images/steps_desktop.png";

export default function InformationSection() {
  return (
    <section className="w-full bg-[#EEF4FC]">
      <div className="relative flex h-[66.875rem] flex-col items-center sm:h-[31.25rem]">
        {/* How to use section  */}
        <div className="mt-[3.438rem] flex gap-x-16 sm:mt-[6.25rem]">
          <div className="flex flex-col">
            <p className="mb-2 text-center text-lg font-semibold text-[#4D8EDE] sm:text-left sm:text-[0.938rem]">
              링구사장님 사용 방법
            </p>
            <h2 className="text-center text-[1.25rem] font-semibold sm:text-left sm:text-[2rem]">
              링구 사장님은
              <br />
              이렇게 사용하세요
            </h2>
          </div>
          <img
            src={stepsDesktop}
            alt="링구 사용 방법 3단계"
            className="hidden h-[15rem] w-[43.313rem] sm:block"
          />
        </div>
        <img
          src={stepsMobile}
          alt="링구 사용 방법 3단계"
          className="mt-[2.25rem] block h-[46.25rem] w-[16.25rem] sm:hidden"
        />
        <div className="mt-8 self-center text-center sm:mt-18 sm:mr-[15.344rem] sm:self-end">
          <p className="text-[1.25rem] text-[#4D8EDE] sm:text-left">
            이후, 결제에 신경 쓰실 필요 없이 <br className="block sm:hidden" />
            알아서 챙겨드려요.
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 h-px w-[28rem] -translate-x-1/2 bg-[#C1D5EF] sm:w-[62rem]" />
      </div>
      {/* Who needs Lingu section */}
      {/*
          Reference - w:60px h:135px
          Cirremt - w:40px h:90px
      */}
      <div className="flex min-h-[37.5rem] flex-col items-center px-6 sm:flex-row sm:items-start sm:justify-around sm:pt-16">
        <div className="mt-14 flex w-full flex-row items-center justify-between sm:hidden">
          <div className="text-xl leading-snug font-semibold tracking-tight">
            <p className="text-[#4D8EDE]">링구사장님이 필요한 분들</p>
            <p>
              이런 사장님들께
              <br />
              추천 드립니다
            </p>
          </div>
          <img
            src={man}
            alt="Man illustration"
            width={85}
            height={160}
            className="mr-10"
          />
        </div>
        <div className="mb-10 flex flex-col gap-5">
          {forWho.map((text, index) => (
            <CheckBanner key={index}>{text}</CheckBanner>
          ))}
          <p className="mt-2 self-start text-[1.313rem] text-[#2362A3] sm:text-center">
            이외 꾸준히 제공하는 서비스가 있으신 모든 사장님께 추천드립니다.
          </p>
        </div>
        {/* Desktop */}
        <div className="relative hidden min-h-[33.5rem] flex-col items-end sm:flex">
          <div className="text-left">
            <p className="text-lg text-[1.063rem] font-bold text-[#4D8EDE]">
              링구사장님이 필요한 분들
            </p>
            <h2 className="text-[2rem] font-semibold">
              이런 사장님들께
              <br />
              추천드립니다
            </h2>
          </div>
          <img
            src={man}
            alt="Man illustration"
            className="absolute right-0 bottom-0 h-auto w-auto"
          />
        </div>
      </div>
    </section>
  );
}

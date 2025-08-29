import TestimonyCard from "../common/TestimonyCard";
import { testimonialsData } from "../../utils/constants";

export default function TestimonialsSection() {
  return (
    <section className="flex w-full flex-col items-center bg-[#F7FAFF] py-12">
      <div className="mt-0 flex flex-col items-center sm:mt-17">
        <h2 className="mb-3 text-[1.55rem] font-semibold sm:mb-0 sm:text-[2.75rem] sm:font-extrabold">
          먼저 이용하신 사장님들의 극찬!
        </h2>
        <p className="text-center font-bold text-[#879DB9] sm:text-left sm:text-[1.25rem]">
          링구에 상품을 등록한 <br className="block sm:hidden" /> 사장님들의
          후기를 확인하세요
        </p>
      </div>
      <div className="mt-[2.625rem] mb-0 sm:mb-[70px]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:flex-wrap sm:justify-center">
          {testimonialsData.map((testimony, index) => (
            <TestimonyCard key={index} {...testimony} />
          ))}
        </div>
      </div>
    </section>
  );
}

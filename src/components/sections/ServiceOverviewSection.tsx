import service_overview_1 from "../../../public/images/service_overview_1.png";
import service_overview_2 from "../../../public/images/service_overview_2.png";

import service_overview_mobile from "../../../public/images/service_overview_mobile.png";

export default function ServiceOverviewSection() {
  return (
    <section className="flex h-auto w-full flex-col items-center px-[1.875rem] sm:h-[56.25rem] sm:px-[9.375rem]">
      <div className="mt-[3.75rem] mb-[2.75rem] text-center sm:mt-[6.25rem]">
        <p className="mb-2 text-[0.938rem] font-semibold text-[#006AFF] sm:text-[1.563rem]">
          링크를 통한 간편 구독, 링구
        </p>
        <h2 className="text-[1.25rem] font-bold sm:text-[2.75rem]">
          구독 사업 운영을 위한
        </h2>
        <p className="mb-8 font-bold sm:text-[2.75rem]">
          <span className="underline decoration-2 underline-offset-4 sm:decoration-3 sm:underline-offset-8">
            자동 정기 결제
          </span>{" "}
          서비스를 제공합니다
        </p>
      </div>
      <div className="hidden w-full flex-row gap-x-12 sm:flex">
        <div className="flex flex-1 justify-center">
          <img
            src={service_overview_1}
            alt="번거로운 결제 요청 채팅"
            className="h-[30.375rem] w-[26rem]"
          />
        </div>
        <div className="flex flex-1 justify-center">
          <img
            src={service_overview_2}
            alt="사장님의 결제 비서 서비스"
            className="h-[30.375rem] w-[26rem]"
          />
        </div>
      </div>
      <div className="block sm:hidden">
        <img src={service_overview_mobile} alt="" />
      </div>
    </section>
  );
}

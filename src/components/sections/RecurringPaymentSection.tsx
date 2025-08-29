import Button from "../common/Button";
import background from "../../../public/images/calendar.png";

export default function RecurringPaymentSection() {
  return (
    <section className="relative flex h-[18.75rem] w-full items-center justify-center sm:h-[25rem]">
      <img
        src={background}
        alt="Calendar background image"
        className="absolute inset-0 h-full w-full object-cover object-bottom"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-[1.6rem] font-extrabold text-white sm:text-[2.75rem]">
          수작업 없이 <span className="hidden sm:inline-block">,</span>
          <br className="block sm:hidden" /> 완벽한 정기 결제 시스템!
        </h2>
        <p className="mt-2 text-[1rem] text-[#A8CCFF] sm:mt-4 sm:text-[1.25rem]">
          <span>✓</span> <span className="font-bold">현재 무료 서비스중!</span>
        </p>
        <Button
          onClick={() => {
            window.open("https://biz.xn--2e0bw7u.com/");
          }}
          customStyle="font-bold text-white bg-gradient-to-b from-[#3A72B6] to-[#4D8EDE] w-[17.5rem] h-[3.6rem] py-3 rounded-2xl mt-4 text-lg"
          hasArrow
        >
          지금 바로 이용하기
        </Button>
      </div>
    </section>
  );
}

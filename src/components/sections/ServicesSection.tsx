import Button from "../common/Button";
import ServiceCard from "../common/ServiceCard";
import { subscriptionServices } from "../../utils/constants";

export default function ServicesSection() {
  return (
    <section className="flex h-[54.1rem] w-full flex-col items-center bg-[#EEEEEE] sm:h-[65rem]">
      <div className="flex w-full max-w-[1200px] flex-col items-center">
        <h2 className="mt-[3.5rem] mb-19 text-center text-[1.6rem] leading-snug font-bold text-[#2D5D9E] sm:mt-[7.813rem] sm:mb-3 sm:text-[2.55rem]">
          이미 많은 사장님들이
          <br />
          링구를 사용하고 있습니다
        </h2>
        <div className="hidden sm:block">
          <Button
            customStyle="font-bold text-white bg-gradient-to-b from-[#3A72B6] to-[#4D8EDE] w-[18.75rem] h-[3.6rem] rounded-2xl mb-3"
            hasArrow
            onClick={() => {
              window.open("https://biz.xn--2e0bw7u.com/");
            }}
          >
            지금 바로 이용하기
          </Button>
        </div>
        <p className="mb-23 hidden items-center text-sm text-[#006AFF] sm:block">
          <span className="mr-2">✓</span>
          완제 무료 서비스중!
        </p>
        <div
          className="w-full cursor-grab overflow-hidden select-none"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          onMouseDown={(e) => {
            const container = e.currentTarget.querySelector(
              ".scroll-container"
            ) as HTMLElement;
            const startX = e.clientX;
            const scrollLeft = container.scrollLeft;

            const handleMouseMove = (e: MouseEvent) => {
              const x = e.clientX;
              const walk = (startX - x) * 0.75;
              container.scrollLeft = scrollLeft + walk;
            };

            const handleMouseUp = () => {
              document.removeEventListener("mousemove", handleMouseMove);
              document.removeEventListener("mouseup", handleMouseUp);
            };

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
          }}
        >
          <div
            className="scroll-container mr-[1.56rem] mb-7 ml-[1.56rem] flex gap-5 overflow-x-scroll sm:mr-[6.875rem] sm:mb-0 sm:ml-[6.875rem]"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {subscriptionServices.map((service, index) => (
              <div key={index}>
                <ServiceCard
                  title={service.title}
                  image={service.image}
                  subtitle={service.subtitle}
                  registrationDate={service.registrationDate}
                  content={service.content}
                  price={service.price}
                  subContent={service.subContent}
                />
              </div>
            ))}
          </div>
          <style>{`
            .scroll-container::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
        <Button
          customStyle="font-semibold text-white bg-gradient-to-b from-[#3A72B6] to-[#4D8EDE] w-[18.75rem] h-[3.6rem] rounded-2xl mb-3 block sm:hidden"
          hasArrow
          onClick={() => console.log("지금 바로 이용하기")}
        >
          지금 바로 이용하기
        </Button>
        <p className="mb-23 block items-center text-sm text-[#006AFF] sm:hidden">
          <span className="mr-2">✓</span>
          완제 무료 서비스중!
        </p>
      </div>
    </section>
  );
}

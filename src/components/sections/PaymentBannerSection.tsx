import background from "../../../public/images/visa_card.jpg";

export default function PaymentBannerSection() {
  return (
    <section
      data-section="payment-banner"
      className="relative flex h-[37.5rem] w-full items-start justify-end text-white"
    >
      <img
        src={background}
        alt="Visa card background image"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover sm:object-top"
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 mt-[3.75rem] mr-[1.875rem] flex flex-col items-end text-right sm:mt-[6.25rem] sm:mr-[9.375rem]">
        <h2 className="bold mb-[0.75rem] text-2xl leading-tight font-semibold sm:text-[2.75rem] sm:font-extrabold">
          고객의 일상에 더 자연스럽게
          <span className="block sm:inline"> 스며들 수 있도록</span>
        </h2>
        <div className="hidden text-[1.75rem] leading-tight text-white sm:block">
          <p>고객님께서 신경 쓰지 않아도,</p>
          <p>자동으로 결제가 진행됩니다.</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-10 mb-[3.75rem] ml-[1.875rem] text-left text-[1.125rem] leading-tight text-white sm:hidden">
        <p>고객님께서 신경 쓰지 않아도,</p>
        <p>자동으로 결제가 진행됩니다.</p>
      </div>
    </section>
  );
}

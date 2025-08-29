"use client";

export default function EnvelopeContent({
  imageUrl,
  title,
  description,
  price,
  registrationDate,
}: {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  registrationDate: string;
}) {
  return (
    <div className="flex h-[275px] flex-col justify-end overflow-hidden rounded-2xl bg-white shadow-lg sm:h-[290px]">
      <div className="border-b border-gray-200 px-4 py-3">
        <p className="text-lg text-[#5A6068]">From {title}</p>
      </div>
      <div className="flex items-center gap-3 px-3 py-3 sm:px-4 sm:py-6">
        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
          <img
            src={imageUrl}
            alt="Content image"
            className="h-[78px] w-[78px] object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-base leading-snug font-semibold text-[#333333]">
            {description}
          </p>
          <p className="mt-6 text-xs text-[#5A6068] sm:mt-1 sm:text-sm">
            <span className="font-bold">상품 등록일</span> {registrationDate}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-3">
        <p className="text-sm font-semibold text-[#427ABF] sm:text-base">
          매달 27일 {price} 정기 결제
        </p>
        <p className="text-xs text-[#5A6068] sm:text-sm">
          <span className="font-bold">구독 시작일 </span>
          {registrationDate}
        </p>
      </div>
    </div>
  );
}

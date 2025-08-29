"use client";

import success from "../../public/images/success.svg";
import Button from "./common/Button";

export default function SuccessOverlay({
  onConfirm,
  title,
  price,
}: Readonly<{
  onConfirm: () => void;
  title: string;
  price: string;
}>) {
  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center rounded-4xl pb-8 sm:pb-16">
      <div className="mx-4 flex h-[440px] w-[292px] flex-col rounded-2xl bg-white p-4 text-center shadow-xl">
        <img
          src={success}
          alt="Success"
          height={300}
          width={300}
          className="scale-115"
        />
        <h3 className="text-s mt-3">두근두근!</h3>
        <p className="mb-2 text-sm">구독이 시작되었어요.</p>
        <div className="mb-[30px] border-t border-gray-200 pt-2 text-left text-[15px]">
          <div className="flex justify-between">
            <span>{title}</span>
          </div>
          <div className="flex justify-between">
            <span>브랜드</span>
            <span>링구사장님</span>
          </div>
          <div className="flex justify-between">
            <span>결제금액</span>
            <span>{price} 원</span>
          </div>
        </div>
        <Button
          onClick={onConfirm}
          customStyle="bg-[#427ABF] h-[3.125rem] w-[10.125rem] rounded-lg self-center text-xl font-bold text-white transition-all hover:shadow-lg"
        >
          확인
        </Button>
      </div>
    </div>
  );
}

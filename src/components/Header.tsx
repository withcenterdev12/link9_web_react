"use client";

import Button from "./common/Button";
import top_logo from "../../public/images/top_logo.svg";

export default function Header({
  onOpen,
}: Readonly<{
  onOpen: () => void;
}>) {
  return (
    <header className="mx-auto flex h-[3.8rem] w-full max-w-[1200px] items-center justify-between bg-gradient-to-l from-[#0F3159] to-[#18232F] px-[1.563rem] sm:sticky sm:top-0 sm:z-50">
      <img
        src={top_logo}
        alt="링구 logo"
        className="h-[1.375rem] w-[4.813rem]"
      />
      <Button
        customStyle="font-semibold hidden sm:block bg-gradient-to-b from-[#3A72B6] to-[#4D8EDE] text-white rounded-sm text-sm font-semibold transition-colors h-[2.25rem] w-[7.4rem] text-[0.938rem] mr-[120px]"
        onClick={onOpen}
      >
        사장님 가입문의
      </Button>
      <Button
        customStyle="font-semibold block sm:hidden bg-gradient-to-b from-[#3A72B6] to-[#4D8EDE] text-white rounded-sm text-sm font-semibold transition-colors h-[2.25rem] w-[5rem] text-[0.938rem]"
        onClick={onOpen}
      >
        가입문의
      </Button>
    </header>
  );
}

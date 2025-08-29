"use client";

import { navigationBarItems } from "../utils/constants";
import NavigationBarItem from "./common/NavigationBarItem";
import chatIcon from "../../public/images/chat_icon.svg";

export default function BottomNavigationBar({
  onOpen,
}: Readonly<{
  onOpen: () => void;
}>) {
  return (
    <div className="sticky bottom-0 z-50 flex h-[80px] w-full items-center justify-evenly bg-white sm:hidden">
      {navigationBarItems.map((item, index) => (
        <NavigationBarItem
          key={index}
          label={item.label}
          imageString={item.image}
          onClick={item.onClick}
        />
      ))}
      <NavigationBarItem
        label={"가입문의"}
        imageString={chatIcon}
        onClick={onOpen}
      />
    </div>
  );
}

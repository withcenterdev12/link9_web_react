import checkIcon from "../../../public/images/light_blue_check.svg";

export default function CheckBanner({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-[5.3rem] items-center gap-6 rounded-[2.1rem] bg-[#427ABF] px-3 sm:w-[612px] sm:px-6">
      <img src={checkIcon} alt="Check Icon" />
      <span className="text-[17px] font-bold tracking-tighter text-white sm:text-[1.375rem] sm:tracking-normal">
        {children}
      </span>
    </div>
  );
}

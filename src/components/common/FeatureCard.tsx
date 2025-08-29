import checkIcon from "../../../public/images/light_blue_check.svg";

export default function FeatureCard({
  title,
  subtitle,
}: Readonly<{
  title: string;
  subtitle: string;
}>) {
  return (
    <div className="flex h-[5.625rem] w-full items-center gap-6 rounded-[34px] bg-[#427ABF] px-3 sm:w-[16.875rem]">
      <img src={checkIcon} alt="Check Icon" className="flex-shrink-0" />
      <div className="flex flex-col gap-1">
        <span className="leading-tight font-semibold tracking-normal text-white sm:text-lg sm:font-extrabold">
          {title}
        </span>
        <span className="leading-tight font-semibold tracking-normal text-white sm:text-lg sm:font-extrabold">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

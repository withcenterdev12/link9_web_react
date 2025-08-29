import chevronUp from "../../../public/images/blue_chevron_up.svg";

export default function PhoneCard({
  imageUrl,
  title,
  description,
  price,
  backgroundColor,
}: Readonly<{
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  backgroundColor: string;
}>) {
  return (
    <div
      className="flex h-[5rem] w-full max-w-[18.125rem] items-center justify-center gap-2 rounded-2xl px-2 sm:h-[6.25rem] sm:gap-4"
      style={{ backgroundColor }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="h-[64px] w-[64px] rounded-lg object-cover sm:h-[75px] sm:w-[75px]"
      />
      <div className="flex flex-col justify-center">
        <p className="mb-1 text-[11px] text-gray-600 sm:text-sm">
          from <span className="font-semibold text-black">{title}</span>
        </p>
        <p className="mb-2 text-[11px] leading-tight text-[#5A6068] sm:text-[0.813rem]">
          {description}
        </p>
        <div className="flex items-center justify-end">
          <span className="text-[11px] text-[#427ABF] sm:text-base">
            매월 {price} 원
          </span>{" "}
          <img
            src={chevronUp}
            alt="Chevron Arrow"
            height={12}
            width={12}
            className="rotate-90 text-[#427ABF]"
          />
        </div>
      </div>
    </div>
  );
}

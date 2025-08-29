import TestimonyTag from "./TestimonyTag";

import greenIcon from "../../../public/images/green_icon.svg";
import pinkIcon from "../../../public/images/pink_icon.svg";
import blueIcon from "../../../public/images/blue_icon.svg";

import greenCheck from "../../../public/images/green_check.svg";
import pinkCheck from "../../../public/images/pink_check.svg";
import blueCheck from "../../../public/images/blue_check.svg";

const iconMap = {
  green: greenIcon,
  pink: pinkIcon,
  blue: blueIcon,
};

const checkMap = {
  green: greenCheck,
  pink: pinkCheck,
  blue: blueCheck,
};

const statusColorClasses = {
  green: "text-[#5AC7A8]",
  pink: "text-[#DD7777]",
  blue: "text-[#4A8CE9]",
};

export default function TestimonyCard({
  userName,
  userInfo,
  title,
  testimonial,
  avatarColor,
  statusText,
  tags,
}: Readonly<{
  userName: string;
  userInfo: string;
  title: string;
  testimonial: string;
  avatarColor: "green" | "pink" | "blue";
  statusText: string;
  tags: string[];
}>) {
  return (
    <div className="flex min-h-[19.375rem] w-auto flex-col rounded-[0.625rem] bg-white p-4 shadow-lg sm:w-[322px] sm:p-6">
      {/* Header with avatar */}
      <div className="mb-12 flex items-start gap-3 sm:mb-4 sm:gap-4">
        {/* Avatar */}
        <div>
          <img
            src={iconMap[avatarColor]}
            alt={`${avatarColor} avatar`}
            width={52}
            height={52}
            className="h-[3.25rem] w-[3.25rem]"
          />
        </div>
        <div className="flex flex-1 flex-col sm:flex-initial">
          {/* Status */}
          <div className="mb-2 flex items-center gap-2">
            <img
              src={checkMap[avatarColor]}
              alt={`${avatarColor} check`}
              width={20}
              height={20}
              className="sw-5 h-5"
            />
            <span
              className={`text-[1rem] font-bold ${statusColorClasses[avatarColor]}`}
            >
              {statusText}
            </span>
          </div>
          {/* User info */}
          <p className="text-xs text-[#8B95A1] sm:text-[0.75rem]">
            {userName} ({userInfo})
          </p>
        </div>
      </div>
      {/* Title */}
      <h3 className="mb-8 text-xl font-bold text-gray-900 sm:mb-3 sm:text-xl">
        {title}
      </h3>
      {/* Testimonial */}
      <p className="mb-3 flex-1 text-sm leading-relaxed sm:mb-4 sm:text-[0.938rem]">
        &ldquo;{testimonial}&rdquo;
      </p>
      {/* Tags */}
      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <TestimonyTag key={index}>{tag}</TestimonyTag>
        ))}
      </div>
    </div>
  );
}

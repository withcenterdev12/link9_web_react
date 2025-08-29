export default function ServiceCard({
  title,
  image,
  subtitle,
  registrationDate,
  content,
  price,
  subContent,
}: {
  title: string;
  image: string;
  subtitle: string;
  registrationDate: string;
  content: string;
  price: string;
  subContent: string;
}) {
  return (
    <div className="service-card flex h-[31.25rem] w-[18.75rem] flex-col rounded-[16px] bg-white p-6">
      {/* Title */}
      <div className="border-b border-gray-100 pb-6">
        <h2 className="text-xl font-medium">{title}</h2>
      </div>
      <div className="flex h-[15.5rem] flex-col border-b border-gray-100 py-6">
        <div className="mb-6 flex items-center space-x-4">
          <img
            src={image}
            alt="Service representative"
            height={75}
            width={75}
            className="mt-2 h-[75px] w-[75px] rounded-lg object-cover"
          />
          <div className="flex h-full flex-col justify-between">
            {/* Subtitle */}
            <h3 className="text-lg font-semibold text-gray-800">{subtitle}</h3>
            {/* Registration date */}

            <p className="text-sm text-[#757575]">
              <span className="font-bold">상품 등록일 </span>
              {registrationDate}
            </p>
          </div>
        </div>
        {/* Content */}
        <p className="mb-2 text-sm">{content}</p>
      </div>
      <div className="space-y-2 pt-6">
        {/* Price */}
        <h4 className="text-lg font-bold text-[#427ABF]">{price}</h4>
        <p className="text-sm text-gray-600">{subContent}</p>
      </div>
    </div>
  );
}

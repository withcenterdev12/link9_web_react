export default function FAQCard({
  image,
  label,
  size,
}: {
  image: string;
  label: string;
  size: string;
}) {
  return (
    <div className="flex h-[9.063rem] w-[7.2rem] flex-col items-center justify-center rounded-3xl bg-gradient-to-b from-[#18232F] to-[#083A78] p-4 shadow-[0_0_5px_#203D61] ring-1 ring-[#3B82F6]/5">
      <img src={image} alt={label} className={`h-${size} w-${size}`} />
      <p className="-mx-2 text-base leading-tight font-medium text-white">
        {label}
      </p>
    </div>
  );
}

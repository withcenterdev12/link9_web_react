export default function NavigationBarItem({
  label,
  imageString,
  onClick,
}: Readonly<{
  label: string;
  imageString: string;
  onClick: () => void;
}>) {
  return (
    <div
      onClick={onClick}
      className="flex h-[66px] w-[82px] flex-col items-center justify-center hover:cursor-pointer"
    >
      <img src={imageString} height={24} width={24} alt="" />
      <p className="text-[0.875rem] text-[#4683CF]">{label}</p>
    </div>
  );
}

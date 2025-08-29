export default function TestimonyTag({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <span
      className={`rounded border border-[#599BED] px-3 py-1 text-sm text-[#599BED]`}
    >
      {children}
    </span>
  );
}

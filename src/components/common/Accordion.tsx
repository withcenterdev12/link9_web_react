import chevronUp from "../../../public/images/chevron_up.svg";

interface AccordionProps {
  number: number;
  question: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Accordion({
  number,
  question,
  content,
  isOpen,
  onToggle,
}: AccordionProps) {
  return (
    <div className="w-full">
      <div
        onClick={onToggle}
        className="flex w-full items-center justify-between bg-transparent py-4 hover:cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#A8CCFF]">{number}</span>
          <span className="text-lg text-white">{question}</span>
        </div>
        <img
          src={chevronUp}
          alt="Chevron Arrow"
          width={24}
          height={24}
          className={`h-5.5 w-5.5 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      {isOpen && (
        <div className="rounded-xl bg-[#144C8B] p-4">
          <div className="text-base whitespace-pre-line text-white">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

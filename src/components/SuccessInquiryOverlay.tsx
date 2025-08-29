import Button from "./common/Button";

export default function SuccessInquiryOverlay({
  onClose,
}: Readonly<{
  onClose: () => void;
}>) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative h-[770px] w-[900px] overflow-hidden rounded-3xl bg-[#0F3159] flex flex-col items-center justify-center text-center shadow-2xl">
        <h1 className="mb-2 text-4xl leading-relaxed font-bold text-[#C1D5EF]">
          링구 사장님 가입 문의를 주셔서 감사합니다
        </h1>
        <p className="mb-16 text-xl text-white opacity-90">
          순차적으로 연락드리겠습니다
        </p>
        <div className="flex justify-center">
          <Button
            onClick={onClose}
            customStyle="rounded-lg bg-gradient-to-b from-[#3A72B6] to-[#4D8EDE] px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            메인으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
}

import Button from "../components/common/Button";

export default function CompletePage() {
  return (
    <div className="bg0 mx-auto flex h-svh flex-col items-center justify-center bg-[#0F3159] sm:w-[1200px]">
      <h1 className="mb-2 text-center text-2xl leading-relaxed font-bold text-[#C1D5EF] sm:text-4xl">
        링구 사장님 가입 문의를 주셔서 감사합니다
      </h1>
      <p className="mb-16 text-center text-xl text-white opacity-90">
        순차적으로 연락드리겠습니다
      </p>
      <div className="flex justify-center">
        <Button
          onClick={() => {
            window.location.replace("/");
          }}
          customStyle="rounded-lg bg-gradient-to-b from-[#3A72B6] to-[#4D8EDE] px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          메인으로 돌아가기
        </Button>
      </div>
    </div>
  );
}

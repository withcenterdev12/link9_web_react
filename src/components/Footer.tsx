"use client";

export default function Footer() {
  return (
    <footer className="z-10 flex h-[16.5rem] w-full flex-col items-center bg-[#18232F] px-6 pb-72 text-[#5A6068] sm:h-[14.375rem] sm:px-4 sm:pb-64">
      <div className="flex w-full flex-col items-center">
        <img
          src="/images/footer_logo.svg"
          alt="링구"
          width={39}
          height={23}
          className="mt-12 mb-6"
        />
        <div className="flex w-full max-w-6xl flex-col justify-between sm:flex-row">
          <div className="flex flex-col space-y-1 text-[0.813rem] sm:text-base">
            <p>
              <span className="font-bold">상호명</span> 주식회사 여기닷{" "}
              <span className="font-bold">대표자명</span>
              강태원
            </p>
            <p>
              <span className="font-bold">사업장 주소</span> 경기 성남시 수정구
              대왕판교로 815, 기업지원허브 777호
            </p>
            <p
              className="block sm:hidden"
              onClick={() => (window.location.href = "tel: 031-8039-7981")}
            >
              <span className="font-bold">고객센터</span> 031-8039-7981
            </p>
            <p className="hidden sm:block">
              <span className="font-bold">고객센터</span> 031-8039-7981
            </p>
            <p>
              <span className="font-bold">사업자등록번호</span> 289-86-03278
            </p>
          </div>
          <div className="mt-4 flex flex-col space-y-1 text-[0.813rem] font-bold sm:mt-0 sm:text-[1.063rem]">
            <p
              onClick={() => {
                window.open("https://xn--2e0bw7u.com/mntTerms?tabIndex=0");
              }}
              className="hover:cursor-pointer"
            >
              이용약관
            </p>
            <p
              onClick={() => {
                window.open("https://xn--2e0bw7u.com/mntTerms?tabIndex=1");
              }}
              className="hover:cursor-pointer"
            >
              개인정보처리방침
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

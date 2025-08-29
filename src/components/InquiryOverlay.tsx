import { useState } from "react";

import manWithCase from "../../public/images/man_w_case.svg";
import closeButton from "../../public/images/close_button.svg";

export default function InquiryOverlay({
  onClose,
}: Readonly<{
  onClose: () => void;
}>) {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    cellphone: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    companyName: "",
    name: "",
    cellphone: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      companyName: "",
      name: "",
      cellphone: "",
      description: "",
    };

    if (!formData.companyName.trim()) {
      newErrors.companyName = "회사·가게명을 입력해주세요";
    }
    if (!formData.name.trim()) {
      newErrors.name = "성함을 입력해주세요";
    }
    if (!formData.cellphone.trim()) {
      newErrors.cellphone = "연락받으실 전화번호를 입력해주세요";
    }
    if (!formData.description.trim()) {
      newErrors.description = "간략한 사업 형태를 입력해주세요";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const requestBody = {
        ...formData,
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      window.location.replace("/complete");
    } catch (error) {
      console.error("Failed to submit inquiry:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative mx-4 h-[540px] w-full max-w-[900px] overflow-hidden rounded-2xl bg-gradient-to-b from-[#215697] to-[#3A72B6] p-6 text-white shadow-2xl sm:mx-0 sm:h-[770px] sm:rounded-3xl sm:p-8 sm:px-[124px] sm:pt-[60px]">
        <img
          src={closeButton}
          alt="X Button"
          className="absolute top-6 right-6 hover:cursor-pointer"
          onClick={onClose}
        />
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="mb-2 text-xl leading-tight font-bold sm:text-3xl">
            매달 반복되는 결제 요청,
            <br />
            더이상 고민하지 마세요
          </h2>
          <p className="text-xs text-white/80 sm:text-base">
            링구는 사장님의 고민을 해결해드려요
          </p>
        </div>
        <div className="relative">
          <form
            id="inquiry-form"
            onSubmit={handleSubmit}
            className="flex flex-col space-y-2 sm:space-y-3"
          >
            <div>
              <input
                type="text"
                placeholder="회사·가게명을 입력해주세요"
                value={formData.companyName}
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
                className="w-full rounded-lg border-none bg-[#D6E7FF] px-3 py-2 text-sm text-[#959DA8] placeholder-[#959DA8] focus:outline-none sm:px-4 sm:py-3 sm:text-base"
              />
              {errors.companyName && (
                <p className="mt-[2px] text-[10px] text-red-300 sm:text-xs">
                  {errors.companyName}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="성함을 입력해주세요"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full rounded-lg border-none bg-[#D6E7FF] px-3 py-2 text-sm text-[#959DA8] placeholder-[#959DA8] focus:outline-none sm:px-4 sm:py-3 sm:text-base"
              />
              {errors.name && (
                <p className="mt-[2px] text-[10px] text-red-300 sm:text-xs">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="연락받으실 전화번호를 입력해주세요"
                value={formData.cellphone}
                onChange={(e) => handleInputChange("cellphone", e.target.value)}
                className="w-full rounded-lg border-none bg-[#D6E7FF] px-3 py-2 text-sm text-[#959DA8] placeholder-[#959DA8] focus:outline-none sm:px-4 sm:py-3 sm:text-base"
              />
              {errors.cellphone && (
                <p className="mt-[2px] text-[10px] text-red-300 sm:text-xs">
                  {errors.cellphone}
                </p>
              )}
            </div>
            <div>
              <textarea
                placeholder={`간략한 사업 형태를 입력해주세요\n예) 소상공인, 건물관리, 유지보수 등`}
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                rows={4}
                className="sm:rows-5 w-full resize-none rounded-lg border-none bg-[#D6E7FF] px-3 py-2 text-sm text-[#959DA8] placeholder-[#959DA8] focus:outline-none sm:px-4 sm:py-3 sm:text-base"
              />
              {errors.description && (
                <p className="text-xs text-red-300">{errors.description}</p>
              )}
            </div>
            <p className="-mt-[4px] self-center text-[10px] text-[#89A5CC] sm:-mt-[6px] sm:text-sm">
              본인 접수 시, 개인정보 수집에 동의한 것으로 간주 됩니다
            </p>
          </form>
        </div>
        <button
          type="submit"
          form="inquiry-form"
          disabled={isLoading}
          className="absolute right-4 bottom-4 left-4 h-[50px] rounded-lg bg-[#C4DFFF] text-[18px] font-bold text-[#0D2C51] disabled:cursor-not-allowed disabled:opacity-50 sm:right-[124px] sm:bottom-6 sm:left-[124px] sm:h-[60px] sm:text-[20px]"
        >
          {isLoading ? "제출 중..." : "문의하기"}
        </button>
        <div className="absolute bottom-0 left-[-20px] hidden sm:block">
          <div className="relative h-90 w-45">
            <img
              src={manWithCase}
              alt="Man with case"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

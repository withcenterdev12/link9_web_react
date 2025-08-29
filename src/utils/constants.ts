import { detectMobileOS } from "./utils";

import homeIcon from "../../public/images/home_icon.svg";
import download1Icon from "../../public/images/download_1_icon.svg";
import download2Icon from "../../public/images/download_2_icon.svg";

import pen from "../../public/images/pen.png";
import car from "../../public/images/car.png";
import dogs from "../../public/images/dogs.png";
import dress from "../../public/images/dress.png";

import faq1 from "../../public/images/faq_1.svg";
import faq2 from "../../public/images/faq_2.svg";
import faq3 from "../../public/images/faq_3.svg";
import faq4 from "../../public/images/faq_4.svg";

import phoneCard1 from "../../public/images/card_dummy_0.png";
import phoneCard2 from "../../public/images/card_dummy_1.png";
import phoneCard3 from "../../public/images/card_dummy_2.png";
import phoneCard4 from "../../public/images/card_dummy_3.png";
import phoneCard5 from "../../public/images/card_dummy_4.png";

export const testimonialsData: {
  userName: string;
  userInfo: string;
  title: string;
  testimonial: string;
  avatarColor: "green" | "pink" | "blue";
  statusText: string;
  tags: string[];
}[] = [
  {
    userName: "송**님",
    userInfo: "30대, 학원 원장님",
    title: "학원비 매월 결제",
    testimonial:
      "매달 학부모들께 학원비 입금 문자 드리기 번거로웠는데, 링구가 알아서 알림을 보내주니 학원 운영 부담이 줄어들었어요",
    avatarColor: "green",
    statusText: "등록이 편해요",
    tags: ["학원비", "원장님"],
  },
  {
    userName: "박**님",
    userInfo: "40대, IT 업체",
    title: "IT 유지보수료 결제",
    testimonial:
      "매번 정액 유지보수 금액을 세금계산서 없이 링구로 결제하니깐 채권도 없어지고 관리가 쉬워졌어요",
    avatarColor: "pink",
    statusText: "악성 채권이 없어 졌어요",
    tags: ["유지보수 비용", "악성채권 관리"],
  },
  {
    userName: "이**님",
    userInfo: "50대, 건물 관리업",
    title: "건물 미화 관리 서비스",
    testimonial:
      "매월 고객분들께 입금 재촉을 하지 않는것 하나만으로 링구 사용이 매력적이네요. 고객님분들도 바쁜시간 내지 않고 자동 결제 되니 좋아하시더라고요",
    avatarColor: "blue",
    statusText: "입금 요청 지옥에서 탈출",
    tags: ["건물관리", "정확한 알림"],
  },
];

// Data used for the "People who need Lingu" section
export const forWho = [
  "매번 입금 확인을 하는 것이 번거로웠던 학원/과외 선생님",
  "유지보수/기장료등 매달 세금계산서 발행 하시는 대표님",
  "정기 방문 서비스를 하고 있으신 사장님 (미화,월세차 등)",
  "식품/생활용품을 만들어 매월 고객 배송하시는 사장님",
];

export const navigationBarItems = [
  {
    label: "홈",
    image: homeIcon,
    onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
  },
  {
    label: "사용자앱",
    image: download1Icon,
    onClick: () => {
      // Redirect to User App

      const os = detectMobileOS();

      if (os === "iOS") {
        window.open(
          "https://apps.apple.com/kr/app/%EB%A7%81%EA%B5%AC-%EB%A7%81%ED%81%AC-%EC%B4%88%EB%8C%80%EC%9E%A5-%EC%A0%84%EB%8B%AC%EB%A1%9C-%EA%B0%84%ED%8E%B8-%EA%B5%AC%EB%8F%85%EC%9D%98-%EC%8B%9C%EC%9E%91/id6739336473",
        );
      } else {
        window.open(
          "https://play.google.com/store/apps/details?id=com.heredot.link9user",
        );
      }
    },
  },
  {
    label: "사장님앱",
    image: download2Icon,
    onClick: () => {
      // Redirect to CEO App

      const os = detectMobileOS();

      if (os === "iOS") {
        window.open(
          "https://apps.apple.com/kr/app/%EB%A7%81%EA%B5%AC-%EC%82%AC%EC%9E%A5%EB%8B%98-%EB%A7%81%ED%81%AC-%EC%A0%84%EB%8B%AC%EB%A1%9C-%EA%B0%84%ED%8E%B8-%EA%B5%AC%EB%8F%85%EC%9D%98-%EC%8B%9C%EC%9E%91/id6738809526",
        );
      } else {
        window.open(
          "https://play.google.com/store/apps/details?id=com.heredot.link9corp",
        );
      }
    },
  },
];

export const subscriptionServices = [
  {
    title: "[구독 결제] 건물 미화 관리",
    image: pen,
    subtitle: "건물 미화 서비스 구독",
    registrationDate: "25.04.01",
    content:
      "고객분들이 나이때가 있으셔서 은행에 이체 하는 일들이 잦았는데, 링구 설정해 드리고 알아서 결제가 되니 결제 요청도 , 입금도 간편해 졌습니다",
    price: "99만원 구독 결제",
    subContent: "고객 현장 방문 , 견적 산출 후 계약 시 링구로 결제 합니다",
  },
  {
    title: "[구독 결제] IT 유지보수",
    image: car,
    subtitle: "시스템 유지보수 구독 (웹/앱/서버 등)",
    registrationDate: "25.03.25",
    content:
      "매달 유지보수료를 요청 하는데 입금이 늦으시는 고객사가 생길때 마다 채권관리 때문에 힘들었는데 링구 덕분에 스트레스가 줄었습니다",
    price: "88만원 구독 결제",
    subContent:
      "IT 구축 대금에 10% 정도를 유지보수금액으로 계약 체결하여 링구로 결제 합니다",
  },
  {
    title: "[1회성 결제] 인플루언서",
    image: dogs,
    subtitle: "미라클 (인플루언서) 1회성 결제",
    registrationDate: "24.12.25",
    content:
      "링구에서 구독 결제만 지원 하는 줄 알았는데 1회성 결제도 지원되더라구요. 후원금은 멤버들의 음악 제작, 공연 준비, 팬 이벤트 등에 사용합니다",
    price: "10만원 1회성  결제",
    subContent:
      "후원 링크를 공유 하고 팬분들에게 후원금 결제를 통해 지원받아요",
  },
  {
    title: "[1회성 결제] 동물 사랑연대",
    image: dress,
    subtitle: "유기견 아늑한 공간 쉼터, 수시 후원",
    registrationDate: "24.11.21",
    content:
      "기부금은 유기견의 먹이와 쉼터 운영, 의료비 지원에 사용됩니다. 입양 준비와 사회화 훈련 등 새로운 가족을 만나는 데 필요한 과정에 큰 도움이 됩니다.",
    price: "2만원 1회성 결제",
    subContent:
      "후원 링크를 공유 하고 회원분들에게 후원금 결제를 통해서 지원받아요",
  },
];

export const faqData = [
  {
    id: 1,
    question: "PG 심사 내용은 무엇을 하나요?",
    content: `1. 서류심사 및 업종심사를 통해 PG이용 가능심사를 진행합니다.
    
- 서류 : 사업자등록증, 판매상품별 허가증(온라인판매: 통신판매신고증 / 오프라인 : 판매 상품별 판매 허가증)

2. 판매상품의 종류와 판매 객단가 확인요청

3. 판매상품의 판매방식 (ex. 온라인쇼핑몰의 경우 URL, 현장판매인경우 판매고객 대상(개인/법인) 등)

4. 심사완료 후 PG 이용계약을 진행하게 됩니다.
- 심사기간 : 3일 내외 (영업일 기준)
- 심사결과는 문자로 전송됩니다`,
  },
  {
    id: 2,
    question: "링구- 사장님 앱을 이용하려면 어떻게 하나요?",
    content: `회원 가입 > PG심사 > PG 심사 완료시 사용 가능 합니다

PG 요청 및 심사 완료 까지는 영업일 기준 3일 내외 정도 소요 됩니다

완료 시 문자로 결과를 안내 드립니다
    `,
  },
  {
    id: 3,
    question: "PG 수수료는 평균 얼마 인가요?",
    content: `사업 항목 및 결제 대금 금액에 따라 상이 합니다. 평균 4% 내외 수수료로 진행 되며 PG 심사 시 가맹점에 맞는 PG 수수료 제안 드립니다`,
  },
  {
    id: 4,
    question: `구독에서 프로모션 기능이 있을까요?`,
    content: `네 가능합니다. 링구에서 지정된 개월수 만큼 할인가로 결제 이 후 정상가로 결제 하는 기능이 제공됩니다. 예를 들어 구독 첫달은 1달은 1천원 이후 에는 지정된 상품가(정상가) 1만원으로 구독하는 기능이 제공되고있습니다`,
  },
  {
    id: 5,
    question: `구독 완료 후 환불 / 부분 환불등은 어떻게 진행 되나요?`,
    content: `링구 서비스는 기본적으로 환불기능(결제취소)은 제공하고 있으나  부분 환불 기능을 제공 하고 있지 않습니다 사용자가 구독 해지를 하게 되면 익월 추가 결제가 되지 않도록 기능 제공 하고 있으며,  부분 환불등은 고객분과 논의 후 PG사를 통해서 진행 가능 합니다.`,
  },
  {
    id: 6,
    question: `링구 사용자 서비스 사용료는 무료 인가요?`,
    content: `링구는  웹/앱 서비스를 모두 무료로 제공 하고 있습니다.`,
  },
  {
    id: 7,
    question: `링구에서 꼭 구독 형태만 결제 가능한가요? 1회성 결제는 지원되지 않는건가요?`,
    content: `상품 생성 시 구독형 타입 or 일시 결제 타입에 따라서 구독형 및 1회성 결제도 가능합니다.`,
  },
  {
    id: 8,
    question: `PG 정산 주기는 어떻게 되나요?`,
    content: `영업일 기준 평균 3일 후 결제액 정산 처리를 합니다. 이후 PG 사용료(수수료)는 매월 5일 세금계산서로 발행 처리 하고 있습니다`,
  },
  {
    id: 9,
    question: `보증보험 가입은 필수 인가요?`,
    content: `보증보험 가입은 판매상품 심사 및 월 이용 한도 등 필요시 보증보험 가입을 요청 할 수 있습니다.`,
  },
  {
    id: 10,
    question: `링구에서 자동 이체 서비스도 제공 하나요?`,
    content: `링구는 신용카드기반의 결제 플랫폼으로 자동 이체 서비스는 진행 하고 있지 않습니다.`,
  },
  {
    id: 11,
    question: `PG심사 시 필요 서류는 무엇을 사전에 준비 해야 하나요?`,
    content: `1. 서류심사가 완료 되면, PG이용계약서 작성 및 구비서류제출 후 수정 보완사항이 없으면, 서비스이용 계정을 발급하게 되며 이후 결제 서비스 이용이 가능합니다. 

[서류안내]
-공통서류-
1) 사업자등록증
2) 정산대금 수령용 계좌사본(사업자 계좌 必)
3) 대표자 신분증 사본(주민번호 뒷자리 마스킹 처리)

-법인사업자-
1)법인등기부등본 원본 (3개월 이내 발급분)
2)법인인감증명서 원본 (3개월 이내 발급분)
3)주주명부 원본 (3개월 이내 발급분)
4) 사용인감계 원본 1부 (사용 인감 사용시 제출)

-개인사업자-
1) 대표자 인감증명서 원본 1부(3개월 이내 발급분)
※개인사업자의 경우 전자서명으로 진행시 인감증명서 제출 불필요

[원본서류 제출 등기발송 주소]
우.06627
서울시 서초구 강남대로 329, 19층(서초동, 산학재단빌딩)`,
  },
];

export const faqCards = [
  {
    image: faq1,
    label: "초대장 전송",
    size: "20",
  },
  {
    image: faq2,
    label: "정기 결제 처리 1회성 결제 처리",
    size: "16",
  },
  {
    image: faq3,
    label: "구독 현황 확인",
    size: "18",
  },
  {
    image: faq4,
    label: "상품 설정 관리",
    size: "16",
  },
];

export const featureCards = [
  {
    title: "학원비/과외비를",
    subtitle: "매달 송금하시는 분",
  },
  {
    title: "정기서비스를 받는 중인 분",
    subtitle: "(유지보수,방문서비스 등)",
  },
  {
    title: "매번 개인적으로",
    subtitle: "후원금을 보내고 있으신 분",
  },
];

export const phoneCards = [
  {
    imageUrl: phoneCard1,
    title: "링구사장님",
    description: "유기견을 지키는 아늑한 공간 쉼터, 정기 후원",
    price: "15,000",
    registrationDate: "2025-08-27",
    backgroundColor: "#C9DBA7",
  },
  {
    imageUrl: phoneCard2,
    title: "링구사장님",
    description: "미라클 (아이돌그룹) 데뷔 정기 서포트",
    price: "19,000",
    registrationDate: "2025-08-27",
    backgroundColor: "#FFE9F1",
  },
  {
    imageUrl: phoneCard3,
    title: "링구사장님",
    description: "캘리포니아 출신 네이티브 강사/ 주 2회 60분 화상 영어",
    price: "79,000",
    registrationDate: "2025-08-27",
    backgroundColor: "#BDD7E4",
  },
  {
    imageUrl: phoneCard4,
    title: "링구사장님",
    description:
      "요가 스튜디오 직장인 클라스 [내 몸과 마음을 지키는 요가 수업] 주 2회",
    price: "160,000",
    registrationDate: "2025-08-27",
    backgroundColor: "#F0E9DF",
  },
  {
    imageUrl: phoneCard5,
    title: "링구사장님",
    description:
      "수도권 식당 전문 정기 소독, 방역 [고객 만족도 업계 8년 연속 1위]",
    price: "160,000",
    registrationDate: "2025-08-27",
    backgroundColor: "#F0E9DF",
  },
];

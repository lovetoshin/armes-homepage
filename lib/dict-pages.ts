// 페이지 본문 사전 — 소개/프로젝트목록/문의/블로그·뉴스 목록 등 "콘텐츠가 많은 페이지"의 4개 언어 텍스트.
// 화면 뼈대(메뉴·푸터)는 dictionary.ts, 데이터(프로젝트 태그라인 등)는 i18n-data.ts, 페이지 본문은 여기.

import type { Locale } from "./i18n";

type ListDict = {
  metaTitle: string;
  metaDesc: string;
  h1: string;
  heroDesc: string;
};

export const PROJECTS_PAGE: Record<Locale, ListDict> = {
  ko: {
    metaTitle: "프로젝트 | ARMES",
    metaDesc:
      "아르메스가 만든 AI 프로젝트 — SellerAI, RewardTalk, TravelMoa 등. 운영중·준비중·연구중 프로젝트를 한눈에 살펴보세요.",
    h1: "아르메스가 만드는 AI 프로젝트",
    heroDesc:
      "이미지·언어·비전·위치 기술로 일상의 여러 영역에 실제 서비스를 만들어 갑니다. 각 프로젝트의 자세한 내용은 해당 서비스에서 확인하세요.",
  },
  
  
  
};

export const BLOG_PAGE: Record<Locale, ListDict> = {
  ko: {
    metaTitle: "Blog | ARMES",
    metaDesc:
      "AI·쇼핑·여행·주유·전기차·코스트코·SEO·생산성도구까지 — 아르메스가 전하는 생활 속 정보와 노하우를 읽어보세요.",
    h1: "인사이트 & 노하우",
    heroDesc: "AI 활용법부터 쇼핑·여행·주유·코스트코 꿀팁까지, 생활에 바로 쓰는 정보를 나눕니다.",
  },
  
  
  
};

export const CATEGORY_PAGE: Record<Locale, { viewAll: string; comingSoon: string }> = {
  ko: { viewAll: "전체 글 보기", comingSoon: "이 카테고리의 글을 준비 중입니다." },
  
  
  
};

type NewsListDict = ListDict & { emptyNews: string };

export const NEWS_PAGE: Record<Locale, NewsListDict> = {
  ko: {
    metaTitle: "News | ARMES",
    metaDesc: "아르메스의 공식 소식 — 서비스 출시, 업데이트, 제휴, 개발 현황, 공지를 전합니다.",
    h1: "아르메스 소식",
    heroDesc: "서비스 출시와 제휴, 회사의 주요 소식을 전합니다.",
    emptyNews: "아직 등록된 소식이 없습니다.",
  },
  
  
  
};

type AboutDict = {
  metaTitle: string;
  metaDesc: string;
  heroTitle: string;
  heroDesc: string;
  missionTitle: string;
  missionDesc: string;
  visionTitle: string;
  visionDesc: string;
  values: { title: string; desc: string }[]; // 3개 (icon은 고정)
  founderName: string;
  founderRole: string;
  founderStory: string;
  founderPhotoAlt: string;
  areas: { title: string; desc: string; ref: string }[]; // 3개
  companyLabels: {
    name: string;
    ceo: string;
    bizno: string;
    address: string;
    email: string;
  };
  companyValues: { name: string; ceo: string; address: string }; // bizno/email은 고정값
};

export const ABOUT: Record<Locale, AboutDict> = {
  ko: {
    metaTitle: "회사 소개 | ARMES",
    metaDesc:
      "아르메스는 데이터·자동화·위치 기술을 활용해 매일의 불편을 해결하는 생활 서비스 회사입니다. 미션과 비전, 대표 신지한의 유통 16년 경험, 사업 영역을 소개합니다.",
    heroTitle: "매일의 불편을 해결하는 생활 서비스 회사",
    heroDesc:
      "주식회사 아르메스는 데이터·자동화·위치 기술을 활용해 여러 분야의 실생활 서비스를 직접 만들고 운영합니다.",
    missionTitle: "기술을 일상에 닿게 한다",
    missionDesc:
      "아무리 좋은 기술도 일상에서 쓰이지 않으면 의미가 없습니다. 아르메스는 복잡한 기술을 누구나 쉽게 쓸 수 있는 서비스로 만들어, 장사하는 분들과 일상의 소비자에게 실질적인 도움을 주는 것을 목표로 합니다.",
    visionTitle: "여러 분야로 확장하는 생활 서비스 회사",
    visionDesc:
      "커머스에서 시작해 지역 생활, 여행, 콘텐츠까지 — 한 분야에서 검증한 역량을 다음 분야로 넓혀가며 일상의 여러 순간에 아르메스의 서비스가 자연스럽게 함께하도록 합니다.",
    values: [
      { title: "실제로 쓰이는 기술", desc: "데모가 아니라 현장에서 매일 쓰이는 도구를 만듭니다. 기술은 일상의 문제를 풀 때 의미가 있습니다." },
      { title: "첫 경험의 완성도", desc: "처음 만난 사용자가 떠나지 않도록, 출시 단계부터 완성형을 지향합니다." },
      { title: "꾸준한 확장", desc: "한 분야에서 검증한 기술을 다음 프로젝트로 넓혀가며 회사의 역량을 쌓습니다." },
    ],
    founderName: "대표 신지한",
    founderRole: "주식회사 아르메스 대표이사 · 유통 16년",
    founderStory:
      "유통 현장에서 16년을 보냈습니다. 상품을 팔고, 고객을 만나고, 현장의 문제를 직접 겪으며 “무엇이 진짜 불편한가”를 배웠습니다. 그 경험을 바탕으로, 장사하는 분들이 매일 반복하는 일을 기술이 대신하도록 아르메스를 만들었습니다. 화려한 기술보다 현장에서 실제로 쓰이는 도구를 우선합니다.",
    founderPhotoAlt: "주식회사 아르메스 대표 신지한",
    areas: [
      { title: "커머스 자동화", desc: "쇼핑몰 셀러를 위한 이미지·상세페이지 자동화", ref: "SellerAI" },
      { title: "로컬 생활", desc: "지역 매장과 사용자를 잇는 멤버십·공동구매", ref: "RewardTalk" },
      { title: "여행·라이프", desc: "여행과 일상을 돕는 위치 기반 서비스", ref: "TravelMoa 등" },
    ],
    companyLabels: { name: "회사명", ceo: "대표자", bizno: "사업자등록번호", address: "주소", email: "이메일" },
    companyValues: {
      name: "주식회사 아르메스 (ARMES)",
      ceo: "신지한",
      address: "경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호",
    },
  },

  

  

  
};

// ── 문의(Contact) 페이지 + 폼 ──────────────────────────────────────────────
// INQUIRY_TYPES의 value(예: "매장 파트너")는 백엔드로 전송되는 식별자라 코드에 그대로 두고,
// 화면에 보이는 label/desc만 아래 form.types[index]로 번역해 입힌다.
type ContactDict = {
  metaTitle: string;
  metaDesc: string;
  heroBadge: string;
  h1Pre: string;
  h1Hl: string;
  heroDesc: string;
  cards: { title: string; desc: string }[]; // 3개 (icon/색은 고정)
  directLabel: string;
  contactLabels: { phone: string; email: string; address: string };
  addressValue: string;
  hoursLabel: string;
  hours: { weekday: string; weekend: string; weekendValue: string; avg: string; avgValue: string };
  formHeading: string;
  formSubtitle: string;
  footerCopyright: string;
  footerPrivacy: string;
  footerTerms: string;
  form: {
    typeLabel: string;
    types: { label: string; desc: string }[]; // 5개 (value는 코드 고정)
    name: string; namePlaceholder: string;
    email: string; emailPlaceholder: string;
    phone: string; phonePlaceholder: string; phoneHint: string;
    company: string; companyPlaceholder: string;
    region: string; regionHint: string; regionPlaceholder: string;
    message: string; messagePlaceholder: string;
    agreeBold: string; agreeRest: string; agreeMore: string;
    submit: string; submitting: string;
    orContact: string;
    successTitle: string; successDesc: string; successAnother: string;
    errAgree: string; errGeneric: string; errNetwork: string;
  };
};

export const CONTACT: Record<Locale, ContactDict> = {
  ko: {
    metaTitle: "파트너 문의 | ARMES",
    metaDesc: "ARMES 파트너십, 제휴, 투자 문의 및 고객 지원 연락처",
    heroBadge: "파트너 문의",
    h1Pre: "ARMES와 함께",
    h1Hl: "성장하세요",
    heroDesc:
      "매장 파트너, 셀러 파트너, 기업 제휴, 투자 문의까지 — 어떤 형태의 협력도 환영합니다. 문의 주시면 1~2 영업일 내로 담당자가 연락드립니다.",
    cards: [
      { title: "매장 파트너", desc: "RewardTalk 가맹점으로 등록하고 새로운 고객과 연결되세요. 멤버십 적립 설정부터 리워드 운영까지 지원합니다." },
      { title: "Seller AI 파트너", desc: "AI로 이미지·상세페이지를 자동 생성하고 커머스 성장을 가속화하세요. 얼리버드 혜택을 놓치지 마세요." },
      { title: "기업 제휴", desc: "ARMES 로컬 생태계와 함께 성장할 기업 파트너를 찾습니다. 다양한 협력 방식을 논의해보세요." },
    ],
    directLabel: "직접 연락",
    contactLabels: { phone: "대표번호", email: "이메일", address: "주소" },
    addressValue: "경기도 남양주시 진접읍\n경복대로 425-80, 4층 6406호",
    hoursLabel: "운영 시간",
    hours: { weekday: "평일", weekend: "주말 · 공휴일", weekendValue: "휴무", avg: "평균 답변 시간", avgValue: "1~2 영업일" },
    formHeading: "문의 보내기",
    formSubtitle: "모든 문의에 성실히 답변드립니다.",
    footerCopyright: "© 2026 주식회사 아르메스. All rights reserved.",
    footerPrivacy: "개인정보처리방침",
    footerTerms: "이용약관",
    form: {
      typeLabel: "문의 유형",
      types: [
        { label: "매장 파트너", desc: "RewardTalk 가맹점 등록" },
        { label: "셀러 파트너", desc: "Seller AI 이용" },
        { label: "기업 제휴", desc: "B2B 협력 제안" },
        { label: "투자 문의", desc: "IR / 투자 제안" },
        { label: "기타 문의", desc: "일반 문의" },
      ],
      name: "이름", namePlaceholder: "홍길동",
      email: "이메일", emailPlaceholder: "name@company.com",
      phone: "연락처", phonePlaceholder: "01012345678", phoneHint: "- 없이 숫자만 입력",
      company: "회사 / 매장명", companyPlaceholder: "(선택) 아르메스 카페",
      region: "서비스 지역", regionHint: "파트너십을 희망하는 지역을 알려주세요", regionPlaceholder: "예: 경기도 남양주시",
      message: "문의 내용", messagePlaceholder: "파트너십에 대해 궁금한 점, 운영 중인 매장 정보, 협업 제안 등 자유롭게 작성해 주세요.",
      agreeBold: "개인정보 수집 및 이용에 동의합니다.",
      agreeRest: " 수집 항목: 이름, 이메일, 연락처 / 목적: 문의 처리 및 안내 / 보유 기간: 1년 ",
      agreeMore: "자세히 보기",
      submit: "문의 보내기", submitting: "전송 중...",
      orContact: "또는 바로 연락하기:",
      successTitle: "문의가 접수되었습니다",
      successDesc: "빠른 시일 내 담당자가 연락드리겠습니다.\n보통 1~2 영업일 이내에 답변드립니다.",
      successAnother: "다른 문의 하기",
      errAgree: "개인정보 수집 이용에 동의해 주세요.",
      errGeneric: "오류가 발생했습니다.",
      errNetwork: "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
    },
  },

  

  

  
};


// 데이터 번역 레이어 — 기존 데이터 파일(projects.ts, technology.ts)은 손대지 않고,
// 화면에 보이는 한국어 텍스트(태그라인·상태·기술설명 등)의 영/중(간·번) 번역만 여기 모은다.
// 한국어(ko)도 함께 담아 "한 곳에서 4개 언어"를 보게 한다.

import type { Locale } from "./i18n";
import type { ProjectStatus } from "./projects";

// 상태 라벨(운영중/배포대기중/준비중/연구중)
export const STATUS_LABEL: Record<ProjectStatus, Record<Locale, string>> = {
  live: { ko: "운영중",   },
  pending: {
    ko: "배포대기중",
    
    
    
  },
  soon: {
    ko: "준비중",
    
    
    
  },
  research: {
    ko: "연구중",
    
    
    
  },
  dev: {
    ko: "개발중",
    
    
    
  },
};

// 프로젝트 한 줄 소개(태그라인)
export const PROJECT_TAGLINE: Record<string, Record<Locale, string>> = {
  sellerai: {
    ko: "쇼핑몰 셀러를 위한 AI 상품 이미지·상세페이지 자동화",
    
    
    
  },
  tools: {
    ko: "이미지·PDF·텍스트·개발자 도구를 설치 없이 브라우저에서 바로 쓰는 무료 온라인 도구",
    
    
    
  },
  rewardtalk: {
    ko: "내 주변 매장 할인·적립·공동구매를 잇는 로컬 멤버십 플랫폼",
    
    
    
  },
  travelmoa: {
    ko: "여행 특가와 항공권을 한곳에서 찾는 스마트 여행 플랫폼",
    
    
    
  },
  cocoping: {
    ko: "코스트코 할인정보와 가격 변동을 한눈에 보는 쇼핑 도우미",
    
    
    
  },
  rankingpangpang: {
    ko: "분야별 인기 상품을 AI로 분석해 추천하는 랭킹 플랫폼",
    
    
    
  },
  photosort: {
    ko: "사진을 자동으로 분류·정리하는 Vision AI",
    
    
    
  },
  hoosamgukji: {
    ko: "대한민국 후삼국 시대를 배경으로 한 전략 시뮬레이션 게임",
    
    
    
  },
};

// 프로젝트 표시 이름 — 브랜드명은 그대로 두고, 번역이 필요한 것만 여기 둔다(후삼국지).
export const PROJECT_NAME: Record<string, Partial<Record<Locale, string>>> = {
  hoosamgukji: {
    
    
    
  },
};

// 핵심 기술 설명(홈 Technology 섹션)
export const TECH_DESC: Record<string, Record<Locale, string>> = {
  AI: {
    ko: "상품 이미지를 생성·변환하고, 글을 이해해 상세페이지를 만듭니다. 생성형 인공지능으로 사람의 반복 작업을 대신합니다.",
    
    
    
  },
  Automation: {
    ko: "흩어진 정보를 모으고, 매번 손으로 하던 일을 자동으로 처리합니다. 사람이 더 중요한 일에 집중하도록 돕습니다.",
    
    
    
  },
  Vision: {
    ko: "사진 속 내용을 인식해 분석하고 분류합니다. 수많은 이미지를 사람 대신 빠르게 정리합니다.",
    
    
    
  },
  Location: {
    ko: "내 주변과 지역을 기반으로 필요한 정보를 연결합니다. 위치에 맞는 혜택·여행·매장 정보를 제공합니다.",
    
    
    
  },
};

// 블로그/뉴스 카테고리 이름(표시용). URL 슬러그는 언어 공통(영문)이라 별도.
export const CATEGORY_LABEL: Record<string, Record<Locale, string>> = {
  // Blog
  AI: { ko: "AI",   },
  쇼핑: { ko: "쇼핑",   },
  여행: { ko: "여행",   },
  주유: { ko: "주유",   },
  전기차: { ko: "전기차",   },
  코스트코: { ko: "코스트코",   },
  SEO: { ko: "SEO",   },
  생산성도구: { ko: "생산성도구",   },
  후삼국지: { ko: "후삼국지",   },
  // News
  "서비스 출시": { ko: "서비스 출시",   },
  업데이트: { ko: "업데이트",   },
  제휴: { ko: "제휴",   },
  "개발 현황": { ko: "개발 현황",   },
  공지: { ko: "공지",   },
};

export function categoryLabel(category: string, locale: Locale): string {
  return CATEGORY_LABEL[category]?.[locale] ?? category;
}

// 블로그 카테고리 한 줄 소개(검색 의도). 긴 SEO 본문(CATEGORY_HUB)은 한국어 자산이라 별도.
export const CATEGORY_INTRO: Record<string, Record<Locale, string>> = {
  AI: {
    ko: "AI로 이미지·상세페이지·콘텐츠를 더 빠르게 만드는 실전 활용법을 모았습니다.",
    
    
    
  },
  쇼핑: {
    ko: "스마트스토어·온라인 판매와 알뜰 쇼핑에 바로 쓰는 정보와 노하우입니다.",
    
    
    
  },
  여행: {
    ko: "항공권·여행 특가를 더 싸게, 더 똑똑하게 준비하는 방법을 정리합니다.",
    
    
    
  },
  주유: {
    ko: "우리 동네 최저가 주유소와 기름값 아끼는 팁을 다룹니다.",
    
    
    
  },
  전기차: {
    ko: "전기차 충전소 찾기와 충전 요금을 아끼는 방법을 안내합니다.",
    
    
    
  },
  코스트코: {
    ko: "코스트코 할인 정보와 가격 변동, 가성비 쇼핑 팁을 모았습니다.",
    
    
    
  },
  SEO: {
    ko: "검색 상위 노출과 블로그·로컬 SEO의 기본기를 쉽게 설명합니다.",
    
    
    
  },
  생산성도구: {
    ko: "설치·가입 없이 브라우저에서 바로 쓰는 무료 도구 활용법입니다.",
    
    
    
  },
  후삼국지: {
    ko: "후삼국 시대 인물과 역사, 전략 시뮬레이션 이야기를 다룹니다.",
    
    
    
  },
};

export function categoryIntro(category: string, locale: Locale): string {
  return CATEGORY_INTRO[category]?.[locale] ?? CATEGORY_INTRO[category]?.ko ?? "";
}

// 읽는 시간 표기 — 언어별 형식이 달라 함수로 처리. 예) 5분 읽기 / 5 min read / 5分钟阅读
export function readingTimeText(min: number, locale: Locale): string {
  void locale;
  return `${min}분 읽기`;
}

// 헬퍼 — locale 누락 시 한국어로 안전하게 떨어진다.
export function statusLabel(status: ProjectStatus, locale: Locale): string {
  return STATUS_LABEL[status]?.[locale] ?? STATUS_LABEL[status]?.ko ?? "";
}
export function projectTagline(key: string, locale: Locale, fallback = ""): string {
  return PROJECT_TAGLINE[key]?.[locale] ?? PROJECT_TAGLINE[key]?.ko ?? fallback;
}
export function projectName(key: string, locale: Locale, fallback: string): string {
  return PROJECT_NAME[key]?.[locale] ?? fallback;
}
export function techDesc(key: string, locale: Locale, fallback = ""): string {
  return TECH_DESC[key]?.[locale] ?? TECH_DESC[key]?.ko ?? fallback;
}

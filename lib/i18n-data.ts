// 데이터 번역 레이어 — 기존 데이터 파일(projects.ts, technology.ts)은 손대지 않고,
// 화면에 보이는 한국어 텍스트(태그라인·상태·기술설명 등)의 영/중(간·번) 번역만 여기 모은다.
// 한국어(ko)도 함께 담아 "한 곳에서 4개 언어"를 보게 한다.

import type { Locale } from "./i18n";
import type { ProjectStatus } from "./projects";

// 상태 라벨(운영중/배포대기중/준비중/연구중)
export const STATUS_LABEL: Record<ProjectStatus, Record<Locale, string>> = {
  live: { ko: "운영중", en: "Live", "zh-Hans": "运营中", "zh-Hant": "營運中" },
  pending: {
    ko: "배포대기중",
    en: "Launching soon",
    "zh-Hans": "即将上线",
    "zh-Hant": "即將上線",
  },
  soon: {
    ko: "준비중",
    en: "In preparation",
    "zh-Hans": "筹备中",
    "zh-Hant": "籌備中",
  },
  research: {
    ko: "연구중",
    en: "In research",
    "zh-Hans": "研发中",
    "zh-Hant": "研發中",
  },
  dev: {
    ko: "개발중",
    en: "In development",
    "zh-Hans": "开发中",
    "zh-Hant": "開發中",
  },
};

// 프로젝트 한 줄 소개(태그라인)
export const PROJECT_TAGLINE: Record<string, Record<Locale, string>> = {
  sellerai: {
    ko: "쇼핑몰 셀러를 위한 AI 상품 이미지·상세페이지 자동화",
    en: "AI product photos and detail pages, automated for online sellers",
    "zh-Hans": "为网店卖家打造的AI商品图与详情页自动化",
    "zh-Hant": "為網店賣家打造的AI商品圖與詳情頁自動化",
  },
  tools: {
    ko: "이미지·PDF·텍스트·개발자 도구를 설치 없이 브라우저에서 바로 쓰는 무료 온라인 도구",
    en: "Free online tools for images, PDFs, text and developers — right in your browser, no install",
    "zh-Hans": "无需安装，在浏览器中即用的免费在线工具：图片、PDF、文本与开发者工具",
    "zh-Hant": "無需安裝，在瀏覽器中即用的免費線上工具：圖片、PDF、文字與開發者工具",
  },
  rewardtalk: {
    ko: "내 주변 매장 할인·적립·공동구매를 잇는 로컬 멤버십 플랫폼",
    en: "A local membership platform connecting nearby store deals, points and group buys",
    "zh-Hans": "连接周边门店折扣、积分与团购的本地会员平台",
    "zh-Hant": "連結周邊門市折扣、積點與團購的在地會員平台",
  },
  travelmoa: {
    ko: "여행 특가와 항공권을 한곳에서 찾는 스마트 여행 플랫폼",
    en: "A smart travel platform to find flight deals and travel bargains in one place",
    "zh-Hans": "一站式查找旅行特价与机票的智能旅行平台",
    "zh-Hant": "一站式查找旅行特價與機票的智慧旅行平台",
  },
  cocoping: {
    ko: "코스트코 할인정보와 가격 변동을 한눈에 보는 쇼핑 도우미",
    en: "A shopping helper that tracks Costco deals and price changes at a glance",
    "zh-Hans": "一眼掌握Costco折扣信息与价格变动的购物助手",
    "zh-Hant": "一眼掌握好市多折扣資訊與價格變動的購物助手",
  },
  rankingpangpang: {
    ko: "분야별 인기 상품을 AI로 분석해 추천하는 랭킹 플랫폼",
    en: "A ranking platform that analyzes and recommends popular products by category with AI",
    "zh-Hans": "用AI分析并推荐各领域热门商品的排行平台",
    "zh-Hant": "以AI分析並推薦各領域熱門商品的排行平台",
  },
  photosort: {
    ko: "사진을 자동으로 분류·정리하는 Vision AI",
    en: "Vision AI that automatically sorts and organizes your photos",
    "zh-Hans": "自动分类整理照片的视觉AI",
    "zh-Hant": "自動分類整理照片的視覺AI",
  },
  hoosamgukji: {
    ko: "대한민국 후삼국 시대를 배경으로 한 전략 시뮬레이션 게임",
    en: "A strategy simulation game set in Korea's Later Three Kingdoms era",
    "zh-Hans": "以韩国后三国时代为背景的策略模拟游戏",
    "zh-Hant": "以韓國後三國時代為背景的策略模擬遊戲",
  },
};

// 프로젝트 표시 이름 — 브랜드명은 그대로 두고, 번역이 필요한 것만 여기 둔다(후삼국지).
export const PROJECT_NAME: Record<string, Partial<Record<Locale, string>>> = {
  hoosamgukji: {
    en: "Later Three Kingdoms",
    "zh-Hans": "后三国志",
    "zh-Hant": "後三國志",
  },
};

// 핵심 기술 설명(홈 Technology 섹션)
export const TECH_DESC: Record<string, Record<Locale, string>> = {
  AI: {
    ko: "상품 이미지를 생성·변환하고, 글을 이해해 상세페이지를 만듭니다. 생성형 인공지능으로 사람의 반복 작업을 대신합니다.",
    en: "Generates and transforms product images, and reads text to build detail pages. Generative AI takes over repetitive human work.",
    "zh-Hans": "生成与转换商品图像，理解文字并制作详情页。用生成式人工智能替代重复性工作。",
    "zh-Hant": "生成與轉換商品圖像，理解文字並製作詳情頁。以生成式人工智慧替代重複性工作。",
  },
  Automation: {
    ko: "흩어진 정보를 모으고, 매번 손으로 하던 일을 자동으로 처리합니다. 사람이 더 중요한 일에 집중하도록 돕습니다.",
    en: "Gathers scattered information and automates manual, repetitive tasks so people can focus on what matters.",
    "zh-Hans": "汇集分散的信息，自动处理以往手动的工作，让人专注于更重要的事。",
    "zh-Hant": "彙整分散的資訊，自動處理以往手動的工作，讓人專注於更重要的事。",
  },
  Vision: {
    ko: "사진 속 내용을 인식해 분석하고 분류합니다. 수많은 이미지를 사람 대신 빠르게 정리합니다.",
    en: "Recognizes, analyzes and classifies what's in a photo, organizing countless images quickly in your place.",
    "zh-Hans": "识别照片内容并进行分析与分类，代替人快速整理海量图像。",
    "zh-Hant": "辨識照片內容並進行分析與分類，代替人快速整理海量圖像。",
  },
  Location: {
    ko: "내 주변과 지역을 기반으로 필요한 정보를 연결합니다. 위치에 맞는 혜택·여행·매장 정보를 제공합니다.",
    en: "Connects the information you need based on your area and surroundings — location-aware deals, travel and store info.",
    "zh-Hans": "基于你的周边与地区连接所需信息，提供贴合位置的优惠、旅行与门店信息。",
    "zh-Hant": "依據你的周邊與地區連結所需資訊，提供貼合位置的優惠、旅行與門市資訊。",
  },
};

// 블로그/뉴스 카테고리 이름(표시용). URL 슬러그는 언어 공통(영문)이라 별도.
export const CATEGORY_LABEL: Record<string, Record<Locale, string>> = {
  // Blog
  AI: { ko: "AI", en: "AI", "zh-Hans": "AI", "zh-Hant": "AI" },
  쇼핑: { ko: "쇼핑", en: "Shopping", "zh-Hans": "购物", "zh-Hant": "購物" },
  여행: { ko: "여행", en: "Travel", "zh-Hans": "旅行", "zh-Hant": "旅行" },
  주유: { ko: "주유", en: "Fuel", "zh-Hans": "加油", "zh-Hant": "加油" },
  전기차: { ko: "전기차", en: "EV", "zh-Hans": "电动车", "zh-Hant": "電動車" },
  코스트코: { ko: "코스트코", en: "Costco", "zh-Hans": "Costco", "zh-Hant": "好市多" },
  SEO: { ko: "SEO", en: "SEO", "zh-Hans": "SEO", "zh-Hant": "SEO" },
  생산성도구: { ko: "생산성도구", en: "Productivity", "zh-Hans": "效率工具", "zh-Hant": "效率工具" },
  후삼국지: { ko: "후삼국지", en: "Later Three Kingdoms", "zh-Hans": "后三国志", "zh-Hant": "後三國志" },
  // News
  "서비스 출시": { ko: "서비스 출시", en: "Launch", "zh-Hans": "服务发布", "zh-Hant": "服務發布" },
  업데이트: { ko: "업데이트", en: "Update", "zh-Hans": "更新", "zh-Hant": "更新" },
  제휴: { ko: "제휴", en: "Partnership", "zh-Hans": "合作", "zh-Hant": "合作" },
  "개발 현황": { ko: "개발 현황", en: "Development", "zh-Hans": "开发进展", "zh-Hant": "開發進展" },
  공지: { ko: "공지", en: "Notice", "zh-Hans": "公告", "zh-Hant": "公告" },
};

export function categoryLabel(category: string, locale: Locale): string {
  return CATEGORY_LABEL[category]?.[locale] ?? category;
}

// 블로그 카테고리 한 줄 소개(검색 의도). 긴 SEO 본문(CATEGORY_HUB)은 한국어 자산이라 별도.
export const CATEGORY_INTRO: Record<string, Record<Locale, string>> = {
  AI: {
    ko: "AI로 이미지·상세페이지·콘텐츠를 더 빠르게 만드는 실전 활용법을 모았습니다.",
    en: "Practical ways to create images, detail pages and content faster with AI.",
    "zh-Hans": "汇集用AI更快制作图片、详情页与内容的实战方法。",
    "zh-Hant": "彙集以AI更快製作圖片、詳情頁與內容的實戰方法。",
  },
  쇼핑: {
    ko: "스마트스토어·온라인 판매와 알뜰 쇼핑에 바로 쓰는 정보와 노하우입니다.",
    en: "Information and know-how for online selling and smart shopping.",
    "zh-Hans": "可立即用于网店销售与精明购物的信息与技巧。",
    "zh-Hant": "可立即用於網店銷售與精明購物的資訊與技巧。",
  },
  여행: {
    ko: "항공권·여행 특가를 더 싸게, 더 똑똑하게 준비하는 방법을 정리합니다.",
    en: "How to prepare flights and travel deals more cheaply and smartly.",
    "zh-Hans": "整理如何更便宜、更聪明地准备机票与旅行特价。",
    "zh-Hant": "整理如何更便宜、更聰明地準備機票與旅行特價。",
  },
  주유: {
    ko: "우리 동네 최저가 주유소와 기름값 아끼는 팁을 다룹니다.",
    en: "Finding the cheapest gas stations near you and saving on fuel.",
    "zh-Hans": "介绍附近最低价加油站与省油费的技巧。",
    "zh-Hant": "介紹附近最低價加油站與省油費的技巧。",
  },
  전기차: {
    ko: "전기차 충전소 찾기와 충전 요금을 아끼는 방법을 안내합니다.",
    en: "Finding EV charging stations and saving on charging costs.",
    "zh-Hans": "指引如何寻找电动车充电站与节省充电费用。",
    "zh-Hant": "指引如何尋找電動車充電站與節省充電費用。",
  },
  코스트코: {
    ko: "코스트코 할인 정보와 가격 변동, 가성비 쇼핑 팁을 모았습니다.",
    en: "Costco deals, price changes and value shopping tips.",
    "zh-Hans": "汇集Costco折扣信息、价格变动与高性价比购物技巧。",
    "zh-Hant": "彙集好市多折扣資訊、價格變動與高性價比購物技巧。",
  },
  SEO: {
    ko: "검색 상위 노출과 블로그·로컬 SEO의 기본기를 쉽게 설명합니다.",
    en: "The basics of ranking higher and blog/local SEO, explained simply.",
    "zh-Hans": "通俗讲解搜索排名与博客·本地SEO的基础。",
    "zh-Hant": "淺顯講解搜尋排名與部落格·在地SEO的基礎。",
  },
  생산성도구: {
    ko: "설치·가입 없이 브라우저에서 바로 쓰는 무료 도구 활용법입니다.",
    en: "How to use free tools right in your browser — no install, no signup.",
    "zh-Hans": "无需安装与注册，在浏览器中即用的免费工具用法。",
    "zh-Hant": "無需安裝與註冊，在瀏覽器中即用的免費工具用法。",
  },
  후삼국지: {
    ko: "후삼국 시대 인물과 역사, 전략 시뮬레이션 이야기를 다룹니다.",
    en: "Characters, history and strategy-simulation stories of Korea's Later Three Kingdoms.",
    "zh-Hans": "讲述后三国时代的人物、历史与策略模拟故事。",
    "zh-Hant": "講述後三國時代的人物、歷史與策略模擬故事。",
  },
};

export function categoryIntro(category: string, locale: Locale): string {
  return CATEGORY_INTRO[category]?.[locale] ?? CATEGORY_INTRO[category]?.ko ?? "";
}

// 읽는 시간 표기 — 언어별 형식이 달라 함수로 처리. 예) 5분 읽기 / 5 min read / 5分钟阅读
export function readingTimeText(min: number, locale: Locale): string {
  switch (locale) {
    case "en":
      return `${min} min read`;
    case "zh-Hans":
      return `${min}分钟阅读`;
    case "zh-Hant":
      return `${min}分鐘閱讀`;
    default:
      return `${min}분 읽기`;
  }
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

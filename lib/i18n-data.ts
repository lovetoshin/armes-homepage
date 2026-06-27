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

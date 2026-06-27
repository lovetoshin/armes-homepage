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
  en: {
    metaTitle: "Projects | ARMES",
    metaDesc:
      "AI projects by ARMES — SellerAI, RewardTalk, TravelMoa and more. See our live, upcoming and research projects at a glance.",
    h1: "AI projects built by ARMES",
    heroDesc:
      "With image, language, vision and location technology, we build real services across many areas of daily life. For details on each project, visit its own service.",
  },
  "zh-Hans": {
    metaTitle: "项目 | ARMES",
    metaDesc:
      "ARMES打造的AI项目——SellerAI、RewardTalk、TravelMoa等。一览运营中、筹备中与研发中的项目。",
    h1: "ARMES打造的AI项目",
    heroDesc:
      "我们以图像、语言、视觉与位置技术，在日常的多个领域打造真实的服务。各项目的详情请在对应服务中查看。",
  },
  "zh-Hant": {
    metaTitle: "專案 | ARMES",
    metaDesc:
      "ARMES打造的AI專案——SellerAI、RewardTalk、TravelMoa等。一覽營運中、籌備中與研發中的專案。",
    h1: "ARMES打造的AI專案",
    heroDesc:
      "我們以圖像、語言、視覺與位置技術，在日常的多個領域打造真實的服務。各專案的詳情請在對應服務中查看。",
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
      "아르메스는 AI·데이터·자동화 기술을 활용해 실생활 서비스를 만드는 AI 기반 서비스 기업입니다. 미션과 비전, 대표 신지한의 유통 16년 경험, 사업 영역을 소개합니다.",
    heroTitle: "AI로 일상을 바꾸는 서비스 기업",
    heroDesc:
      "주식회사 아르메스는 AI·데이터·자동화·위치기술을 활용해 여러 분야의 실생활 서비스를 직접 만들고 운영합니다.",
    missionTitle: "기술을 일상에 닿게 한다",
    missionDesc:
      "아무리 좋은 기술도 일상에서 쓰이지 않으면 의미가 없습니다. 아르메스는 복잡한 AI를 누구나 쉽게 쓸 수 있는 서비스로 만들어, 장사하는 분들과 일상의 소비자에게 실질적인 도움을 주는 것을 목표로 합니다.",
    visionTitle: "여러 분야로 확장하는 AI 서비스 회사",
    visionDesc:
      "커머스에서 시작해 지역 생활, 여행, 콘텐츠까지 — 한 분야에서 검증한 AI 역량을 다음 분야로 넓혀가며 일상의 여러 순간에 아르메스의 기술이 자연스럽게 함께하도록 합니다.",
    values: [
      { title: "실제로 쓰이는 기술", desc: "데모가 아니라 현장에서 매일 쓰이는 AI를 만듭니다. 기술은 일상의 문제를 풀 때 의미가 있습니다." },
      { title: "첫 경험의 완성도", desc: "처음 만난 사용자가 떠나지 않도록, 출시 단계부터 완성형을 지향합니다." },
      { title: "꾸준한 확장", desc: "한 분야에서 검증한 기술을 다음 프로젝트로 넓혀가며 회사의 역량을 쌓습니다." },
    ],
    founderName: "대표 신지한",
    founderRole: "주식회사 아르메스 대표이사 · 유통 16년",
    founderStory:
      "유통 현장에서 16년을 보냈습니다. 상품을 팔고, 고객을 만나고, 현장의 문제를 직접 겪으며 “무엇이 진짜 불편한가”를 배웠습니다. 그 경험을 바탕으로, 장사하는 분들이 매일 반복하는 일을 AI가 대신하도록 아르메스를 만들었습니다. 화려한 기술보다 현장에서 실제로 쓰이는 도구를 우선합니다.",
    founderPhotoAlt: "주식회사 아르메스 대표 신지한",
    areas: [
      { title: "커머스 AI", desc: "쇼핑몰 셀러를 위한 이미지·상세페이지 자동화", ref: "SellerAI" },
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

  en: {
    metaTitle: "About | ARMES",
    metaDesc:
      "ARMES is an AI-driven company building real-life services with AI, data and automation. Meet our mission and vision, CEO Jihan Shin's 16 years in retail, and our business areas.",
    heroTitle: "An AI-driven company that changes everyday life",
    heroDesc:
      "ARMES Inc. builds and operates real-life services across many fields, using AI, data, automation and location technology.",
    missionTitle: "Bring technology into everyday life",
    missionDesc:
      "No matter how good a technology is, it means nothing if it isn't used in everyday life. ARMES turns complex AI into services anyone can use easily, aiming to bring real help to business owners and everyday consumers.",
    visionTitle: "An AI service company expanding across fields",
    visionDesc:
      "Starting from commerce and reaching into local life, travel and content — we extend the AI capabilities proven in one field to the next, so ARMES technology naturally accompanies many moments of daily life.",
    values: [
      { title: "Technology that gets used", desc: "We build AI used every day in the field, not just in demos. Technology matters when it solves real, everyday problems." },
      { title: "A complete first experience", desc: "So that first-time users don't leave, we aim for a finished product from the moment of launch." },
      { title: "Steady expansion", desc: "We carry technology proven in one field into the next project, building the company's capabilities over time." },
    ],
    founderName: "CEO Jihan Shin",
    founderRole: "CEO, ARMES Inc. · 16 years in retail",
    founderStory:
      "I spent 16 years on the front lines of retail — selling products, meeting customers and facing real problems first-hand, learning what truly gets in the way. On that experience, I founded ARMES so that AI could take over the tasks business owners repeat every day. We put tools that actually get used in the field ahead of flashy technology.",
    founderPhotoAlt: "Jihan Shin, CEO of ARMES Inc.",
    areas: [
      { title: "Commerce AI", desc: "Image and detail-page automation for online sellers", ref: "SellerAI" },
      { title: "Local life", desc: "Membership and group buying that connect local stores and users", ref: "RewardTalk" },
      { title: "Travel & life", desc: "Location-based services for travel and daily life", ref: "TravelMoa & more" },
    ],
    companyLabels: { name: "Company", ceo: "CEO", bizno: "Business Reg. No.", address: "Address", email: "Email" },
    companyValues: {
      name: "ARMES Inc.",
      ceo: "Jihan Shin",
      address: "4F #6406, 425-80 Gyeongbokdae-ro, Jinjeop-eup, Namyangju-si, Gyeonggi-do, Korea",
    },
  },

  "zh-Hans": {
    metaTitle: "公司介绍 | ARMES",
    metaDesc:
      "ARMES是一家运用AI、数据与自动化打造日常生活服务的AI服务型企业。了解我们的使命与愿景、代表申智汉16年的流通经验，以及业务领域。",
    heroTitle: "用AI改变日常的服务型企业",
    heroDesc:
      "ARMES株式会社运用AI、数据、自动化与位置技术，亲自打造并运营多个领域的日常生活服务。",
    missionTitle: "让技术触及日常",
    missionDesc:
      "再好的技术，若无法用于日常便毫无意义。ARMES将复杂的AI打造成人人都能轻松使用的服务，致力于为做生意的人和日常消费者带来切实的帮助。",
    visionTitle: "向多个领域拓展的AI服务公司",
    visionDesc:
      "从电商起步，延伸至本地生活、旅行与内容——我们将在一个领域验证过的AI能力拓展到下一个领域，让ARMES的技术自然融入日常生活的诸多时刻。",
    values: [
      { title: "真正被使用的技术", desc: "我们打造的是在现场每天被使用的AI，而非演示品。技术只有在解决日常问题时才有意义。" },
      { title: "首次体验的完整度", desc: "为了让初次使用的用户不流失，我们从上线之初就追求成品级的完成度。" },
      { title: "持续的拓展", desc: "我们把在一个领域验证过的技术延伸到下一个项目，逐步积累公司的实力。" },
    ],
    founderName: "代表 申智汉",
    founderRole: "ARMES株式会社代表理事 · 16年流通经验",
    founderStory:
      "我在流通现场度过了16年。卖商品、见客户、亲身经历现场的问题，学会了“什么才是真正的不便”。基于这些经验，我创办了ARMES，让AI替做生意的人完成每天重复的工作。比起华丽的技术，我们更看重在现场真正被使用的工具。",
    founderPhotoAlt: "ARMES株式会社代表 申智汉",
    areas: [
      { title: "电商AI", desc: "为网店卖家提供的图片与详情页自动化", ref: "SellerAI" },
      { title: "本地生活", desc: "连接本地门店与用户的会员与团购", ref: "RewardTalk" },
      { title: "旅行·生活", desc: "助力旅行与日常的位置服务", ref: "TravelMoa 等" },
    ],
    companyLabels: { name: "公司名称", ceo: "代表人", bizno: "营业执照号", address: "地址", email: "邮箱" },
    companyValues: {
      name: "ARMES株式会社 (ARMES)",
      ceo: "申智汉",
      address: "韩国京畿道南扬州市榛接邑景福大路425-80, 4楼6406室",
    },
  },

  "zh-Hant": {
    metaTitle: "公司介紹 | ARMES",
    metaDesc:
      "ARMES是一家運用AI、資料與自動化打造日常生活服務的AI服務型企業。了解我們的使命與願景、代表申智漢16年的流通經驗，以及業務領域。",
    heroTitle: "以AI改變日常的服務型企業",
    heroDesc:
      "ARMES株式會社運用AI、資料、自動化與位置技術，親自打造並營運多個領域的日常生活服務。",
    missionTitle: "讓技術觸及日常",
    missionDesc:
      "再好的技術，若無法用於日常便毫無意義。ARMES將複雜的AI打造成人人都能輕鬆使用的服務，致力於為做生意的人與日常消費者帶來切實的幫助。",
    visionTitle: "向多個領域拓展的AI服務公司",
    visionDesc:
      "從電商起步，延伸至在地生活、旅行與內容——我們將在一個領域驗證過的AI能力拓展到下一個領域，讓ARMES的技術自然融入日常生活的諸多時刻。",
    values: [
      { title: "真正被使用的技術", desc: "我們打造的是在現場每天被使用的AI，而非展示品。技術唯有在解決日常問題時才有意義。" },
      { title: "首次體驗的完整度", desc: "為了讓初次使用的用戶不流失，我們從上線之初就追求成品級的完成度。" },
      { title: "持續的拓展", desc: "我們把在一個領域驗證過的技術延伸到下一個專案，逐步累積公司的實力。" },
    ],
    founderName: "代表 申智漢",
    founderRole: "ARMES株式會社代表理事 · 16年流通經驗",
    founderStory:
      "我在流通現場度過了16年。賣商品、見客戶、親身經歷現場的問題，學會了「什麼才是真正的不便」。基於這些經驗，我創辦了ARMES，讓AI替做生意的人完成每天重複的工作。比起華麗的技術，我們更重視在現場真正被使用的工具。",
    founderPhotoAlt: "ARMES株式會社代表 申智漢",
    areas: [
      { title: "電商AI", desc: "為網店賣家提供的圖片與詳情頁自動化", ref: "SellerAI" },
      { title: "在地生活", desc: "連結在地門市與用戶的會員與團購", ref: "RewardTalk" },
      { title: "旅行·生活", desc: "助力旅行與日常的位置服務", ref: "TravelMoa 等" },
    ],
    companyLabels: { name: "公司名稱", ceo: "代表人", bizno: "營業執照號", address: "地址", email: "電子郵件" },
    companyValues: {
      name: "ARMES株式會社 (ARMES)",
      ceo: "申智漢",
      address: "韓國京畿道南楊州市榛接邑景福大路425-80, 4樓6406室",
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

  en: {
    metaTitle: "Partner Inquiry | ARMES",
    metaDesc: "ARMES partnership, collaboration and investment inquiries, plus customer support contact.",
    heroBadge: "Partner inquiry",
    h1Pre: "Let's grow",
    h1Hl: "together",
    heroDesc:
      "From store partners and seller partners to business alliances and investment — we welcome every form of collaboration. Reach out and our team will respond within 1–2 business days.",
    cards: [
      { title: "Store partner", desc: "Register as a RewardTalk merchant and connect with new customers. We support everything from membership point setup to reward operations." },
      { title: "Seller AI partner", desc: "Auto-generate images and detail pages with AI and accelerate your commerce growth. Don't miss the early-bird benefits." },
      { title: "Business alliance", desc: "We're looking for corporate partners to grow with the ARMES local ecosystem. Let's discuss various ways to collaborate." },
    ],
    directLabel: "Direct contact",
    contactLabels: { phone: "Phone", email: "Email", address: "Address" },
    addressValue: "4F #6406, 425-80 Gyeongbokdae-ro,\nJinjeop-eup, Namyangju-si, Gyeonggi-do",
    hoursLabel: "Hours",
    hours: { weekday: "Weekday", weekend: "Weekend · Holidays", weekendValue: "Closed", avg: "Avg. response", avgValue: "1–2 business days" },
    formHeading: "Send an inquiry",
    formSubtitle: "We respond sincerely to every inquiry.",
    footerCopyright: "© 2026 ARMES Inc. All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    form: {
      typeLabel: "Inquiry type",
      types: [
        { label: "Store partner", desc: "RewardTalk merchant" },
        { label: "Seller partner", desc: "Use Seller AI" },
        { label: "Business alliance", desc: "B2B proposal" },
        { label: "Investment", desc: "IR / investment" },
        { label: "Other", desc: "General inquiry" },
      ],
      name: "Name", namePlaceholder: "John Doe",
      email: "Email", emailPlaceholder: "name@company.com",
      phone: "Phone", phonePlaceholder: "01012345678", phoneHint: "Numbers only, no dashes",
      company: "Company / Store", companyPlaceholder: "(Optional) ARMES Cafe",
      region: "Service area", regionHint: "Tell us the area you'd like to partner in", regionPlaceholder: "e.g. Namyangju, Gyeonggi",
      message: "Message", messagePlaceholder: "Feel free to write your questions about partnership, your store info, collaboration ideas, and more.",
      agreeBold: "I agree to the collection and use of my personal information.",
      agreeRest: " Items: name, email, phone / Purpose: handling and responding to inquiries / Retention: 1 year ",
      agreeMore: "Details",
      submit: "Send inquiry", submitting: "Sending...",
      orContact: "Or contact us directly:",
      successTitle: "Your inquiry has been received",
      successDesc: "Our team will contact you shortly.\nWe usually reply within 1–2 business days.",
      successAnother: "Make another inquiry",
      errAgree: "Please agree to the collection and use of personal information.",
      errGeneric: "An error occurred.",
      errNetwork: "A network error occurred. Please try again shortly.",
    },
  },

  "zh-Hans": {
    metaTitle: "合作咨询 | ARMES",
    metaDesc: "ARMES合作、提携与投资咨询，以及客户支持联系方式。",
    heroBadge: "合作咨询",
    h1Pre: "与ARMES",
    h1Hl: "共同成长",
    heroDesc:
      "从门店合作、卖家合作到企业提携与投资咨询——我们欢迎任何形式的合作。来信咨询，我们将在1~2个工作日内回复。",
    cards: [
      { title: "门店合作", desc: "注册成为RewardTalk加盟店，连接新客户。从会员积分设置到奖励运营，我们全程支持。" },
      { title: "Seller AI 合作", desc: "用AI自动生成图片与详情页，加速电商增长。不要错过早鸟优惠。" },
      { title: "企业提携", desc: "我们正在寻找与ARMES本地生态共同成长的企业伙伴。欢迎探讨多样的合作方式。" },
    ],
    directLabel: "直接联系",
    contactLabels: { phone: "代表电话", email: "邮箱", address: "地址" },
    addressValue: "韩国京畿道南扬州市榛接邑\n景福大路425-80, 4楼6406室",
    hoursLabel: "营业时间",
    hours: { weekday: "工作日", weekend: "周末·节假日", weekendValue: "休息", avg: "平均回复", avgValue: "1~2个工作日" },
    formHeading: "发送咨询",
    formSubtitle: "我们会认真回复每一条咨询。",
    footerCopyright: "© 2026 ARMES株式会社. All rights reserved.",
    footerPrivacy: "隐私政策",
    footerTerms: "服务条款",
    form: {
      typeLabel: "咨询类型",
      types: [
        { label: "门店合作", desc: "RewardTalk加盟" },
        { label: "卖家合作", desc: "使用Seller AI" },
        { label: "企业提携", desc: "B2B合作提案" },
        { label: "投资咨询", desc: "IR / 投资提案" },
        { label: "其他", desc: "一般咨询" },
      ],
      name: "姓名", namePlaceholder: "张三",
      email: "邮箱", emailPlaceholder: "name@company.com",
      phone: "联系电话", phonePlaceholder: "01012345678", phoneHint: "仅填数字，不含连字符",
      company: "公司/门店名", companyPlaceholder: "(选填) ARMES咖啡",
      region: "服务地区", regionHint: "请告知您希望合作的地区", regionPlaceholder: "例: 京畿道南扬州市",
      message: "咨询内容", messagePlaceholder: "关于合作的疑问、门店信息、合作提案等，欢迎自由填写。",
      agreeBold: "我同意收集和使用个人信息。",
      agreeRest: " 收集项目: 姓名、邮箱、电话 / 目的: 咨询处理与告知 / 保存期限: 1年 ",
      agreeMore: "查看详情",
      submit: "发送咨询", submitting: "发送中...",
      orContact: "或直接联系:",
      successTitle: "您的咨询已提交",
      successDesc: "负责人将尽快与您联系。\n通常在1~2个工作日内回复。",
      successAnother: "再次咨询",
      errAgree: "请同意收集和使用个人信息。",
      errGeneric: "发生错误。",
      errNetwork: "网络出现错误，请稍后再试。",
    },
  },

  "zh-Hant": {
    metaTitle: "合作諮詢 | ARMES",
    metaDesc: "ARMES合作、提攜與投資諮詢，以及客戶支援聯絡方式。",
    heroBadge: "合作諮詢",
    h1Pre: "與ARMES",
    h1Hl: "共同成長",
    heroDesc:
      "從門市合作、賣家合作到企業提攜與投資諮詢——我們歡迎任何形式的合作。來信諮詢，我們將在1~2個工作日內回覆。",
    cards: [
      { title: "門市合作", desc: "註冊成為RewardTalk加盟店，連接新客戶。從會員積點設定到獎勵營運，我們全程支援。" },
      { title: "Seller AI 合作", desc: "以AI自動生成圖片與詳情頁，加速電商成長。別錯過早鳥優惠。" },
      { title: "企業提攜", desc: "我們正在尋找與ARMES在地生態共同成長的企業夥伴。歡迎探討多樣的合作方式。" },
    ],
    directLabel: "直接聯絡",
    contactLabels: { phone: "代表電話", email: "電子郵件", address: "地址" },
    addressValue: "韓國京畿道南楊州市榛接邑\n景福大路425-80, 4樓6406室",
    hoursLabel: "營業時間",
    hours: { weekday: "工作日", weekend: "週末·國定假日", weekendValue: "休息", avg: "平均回覆", avgValue: "1~2個工作日" },
    formHeading: "發送諮詢",
    formSubtitle: "我們會認真回覆每一則諮詢。",
    footerCopyright: "© 2026 ARMES株式會社. All rights reserved.",
    footerPrivacy: "隱私權政策",
    footerTerms: "服務條款",
    form: {
      typeLabel: "諮詢類型",
      types: [
        { label: "門市合作", desc: "RewardTalk加盟" },
        { label: "賣家合作", desc: "使用Seller AI" },
        { label: "企業提攜", desc: "B2B合作提案" },
        { label: "投資諮詢", desc: "IR / 投資提案" },
        { label: "其他", desc: "一般諮詢" },
      ],
      name: "姓名", namePlaceholder: "張三",
      email: "電子郵件", emailPlaceholder: "name@company.com",
      phone: "聯絡電話", phonePlaceholder: "01012345678", phoneHint: "僅填數字，不含連字號",
      company: "公司/門市名", companyPlaceholder: "(選填) ARMES咖啡",
      region: "服務地區", regionHint: "請告知您希望合作的地區", regionPlaceholder: "例: 京畿道南楊州市",
      message: "諮詢內容", messagePlaceholder: "關於合作的疑問、門市資訊、合作提案等，歡迎自由填寫。",
      agreeBold: "我同意蒐集與使用個人資訊。",
      agreeRest: " 蒐集項目: 姓名、電子郵件、電話 / 目的: 諮詢處理與告知 / 保存期限: 1年 ",
      agreeMore: "查看詳情",
      submit: "發送諮詢", submitting: "發送中...",
      orContact: "或直接聯絡:",
      successTitle: "您的諮詢已送出",
      successDesc: "負責人將盡快與您聯絡。\n通常於1~2個工作日內回覆。",
      successAnother: "再次諮詢",
      errAgree: "請同意蒐集與使用個人資訊。",
      errGeneric: "發生錯誤。",
      errNetwork: "網路發生錯誤，請稍後再試。",
    },
  },
};


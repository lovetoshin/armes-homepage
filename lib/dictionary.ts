// UI 공통 글자 사전(메뉴·푸터·버튼·공통 라벨). 페이지 본문이 아닌 "화면 뼈대" 텍스트만 여기 둔다.
// 작고 가벼워서 클라이언트 컴포넌트(Navbar 등)에서도 그대로 import 해서 쓸 수 있다.
// 페이지별 본문(소개글·프로젝트 설명 등)은 각 페이지에서 따로 번역한다.

import type { Locale } from "./i18n";

type Dict = {
  nav: {
    about: string;
    projects: string;
    tech: string;
    contact: string;
    menu: string;
    language: string;
  };
  footer: {
    tagline: string; // 브랜드 한 줄
    groups: {
      company: string;
      projects: string;
      tech: string;
      news: string;
      contact: string;
    };
    links: {
      about: string;
      allProjects: string;
      techIntro: string;
      news: string;
      blog: string;
      partner: string;
      privacy: string;
      terms: string;
    };
    legal: {
      company: string; // 회사명
      bizno: string; // "사업자등록번호: ..."
      ceo: string; // "대표자: 신지한"
      address: string;
      copyright: string;
    };
  };
  common: {
    backToList: string;
    relatedPosts: string;
    relatedServices: string;
    readMore: string;
    all: string; // 카테고리 "전체"
    emptyPosts: string;
  };
};

const dictionaries: Record<Locale, Dict> = {
  ko: {
    nav: {
      about: "회사소개",
      projects: "프로젝트",
      tech: "기술",
      contact: "문의하기",
      menu: "메뉴",
      language: "언어 선택",
    },
    footer: {
      tagline: "AI로 일상을 바꾸는 서비스 기업",
      groups: {
        company: "회사",
        projects: "프로젝트",
        tech: "기술",
        news: "소식",
        contact: "문의",
      },
      links: {
        about: "회사소개",
        allProjects: "전체 보기",
        techIntro: "기술 소개",
        news: "News",
        blog: "Blog",
        partner: "파트너·제휴 문의",
        privacy: "개인정보처리방침",
        terms: "이용약관",
      },
      legal: {
        company: "주식회사 아르메스",
        bizno: "사업자등록번호: 798-86-02943",
        ceo: "대표자: 신지한",
        address: "경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호",
        copyright: "© 2026 ARMES. All rights reserved.",
      },
    },
    common: {
      backToList: "목록으로",
      relatedPosts: "관련 글",
      relatedServices: "관련 서비스",
      readMore: "자세히 보기",
      all: "전체",
      emptyPosts: "해당 카테고리의 글이 아직 없습니다.",
    },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      tech: "Technology",
      contact: "Contact",
      menu: "Menu",
      language: "Select language",
    },
    footer: {
      tagline: "An AI-driven company building services that change everyday life",
      groups: {
        company: "Company",
        projects: "Projects",
        tech: "Technology",
        news: "Updates",
        contact: "Contact",
      },
      links: {
        about: "About",
        allProjects: "View all",
        techIntro: "Our technology",
        news: "News",
        blog: "Blog",
        partner: "Partnership inquiry",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
      legal: {
        company: "ARMES Inc.",
        bizno: "Business Reg. No.: 798-86-02943",
        ceo: "CEO: Jihan Shin",
        address: "4F #6406, 425-80 Gyeongbokdae-ro, Jinjeop-eup, Namyangju-si, Gyeonggi-do, Korea",
        copyright: "© 2026 ARMES. All rights reserved.",
      },
    },
    common: {
      backToList: "Back to list",
      relatedPosts: "Related posts",
      relatedServices: "Related services",
      readMore: "Read more",
      all: "All",
      emptyPosts: "No posts in this category yet.",
    },
  },

  "zh-Hans": {
    nav: {
      about: "公司介绍",
      projects: "项目",
      tech: "技术",
      contact: "联系我们",
      menu: "菜单",
      language: "选择语言",
    },
    footer: {
      tagline: "用人工智能改变日常生活的服务型企业",
      groups: {
        company: "公司",
        projects: "项目",
        tech: "技术",
        news: "动态",
        contact: "联系",
      },
      links: {
        about: "公司介绍",
        allProjects: "查看全部",
        techIntro: "技术介绍",
        news: "News",
        blog: "Blog",
        partner: "合作咨询",
        privacy: "隐私政策",
        terms: "服务条款",
      },
      legal: {
        company: "ARMES 株式会社",
        bizno: "营业执照号: 798-86-02943",
        ceo: "代表人: 申智汉",
        address: "韩国京畿道南扬州市榛接邑景福大路425-80, 4楼6406室",
        copyright: "© 2026 ARMES. All rights reserved.",
      },
    },
    common: {
      backToList: "返回列表",
      relatedPosts: "相关文章",
      relatedServices: "相关服务",
      readMore: "查看详情",
      all: "全部",
      emptyPosts: "该分类暂无文章。",
    },
  },

  "zh-Hant": {
    nav: {
      about: "公司介紹",
      projects: "專案",
      tech: "技術",
      contact: "聯絡我們",
      menu: "選單",
      language: "選擇語言",
    },
    footer: {
      tagline: "以人工智慧改變日常生活的服務型企業",
      groups: {
        company: "公司",
        projects: "專案",
        tech: "技術",
        news: "動態",
        contact: "聯絡",
      },
      links: {
        about: "公司介紹",
        allProjects: "查看全部",
        techIntro: "技術介紹",
        news: "News",
        blog: "Blog",
        partner: "合作諮詢",
        privacy: "隱私權政策",
        terms: "服務條款",
      },
      legal: {
        company: "ARMES 株式會社",
        bizno: "營業執照號: 798-86-02943",
        ceo: "代表人: 申智漢",
        address: "韓國京畿道南楊州市榛接邑景福大路425-80, 4樓6406室",
        copyright: "© 2026 ARMES. All rights reserved.",
      },
    },
    common: {
      backToList: "返回列表",
      relatedPosts: "相關文章",
      relatedServices: "相關服務",
      readMore: "查看詳情",
      all: "全部",
      emptyPosts: "此分類目前尚無文章。",
    },
  },
};

export function getUI(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries.ko;
}

// 다국어(국제화) 중심축 — 모든 언어 관련 로직이 이 파일 한 곳을 기준으로 돈다.
// 언어를 추가/변경하려면 이 파일만 고치면 된다. (현재: 한국어 기본 + 영어 + 중국어 간체/번체)
//
// 핵심 원칙(SEO 안전):
//  - 한국어는 기존 주소 그대로(루트). 예: armes.co.kr/blog
//  - 영어/중국어만 주소 앞에 언어코드를 붙임. 예: armes.co.kr/en/blog, /zh-hans/blog, /zh-hant/blog
//  - 자동 강제이동(리다이렉트) 없음. 사람이 언어 버튼으로 직접 전환 + hreflang으로 구글에 연결만 알림.

// 지원 언어 코드(내부 식별자)
export const LOCALES = ["ko", "en", "zh-Hans", "zh-Hant"] as const;
export type Locale = (typeof LOCALES)[number];

// 기본 언어(한국어) — 루트 주소를 쓰며 URL에 언어코드가 안 붙는다.
export const DEFAULT_LOCALE: Locale = "ko";

// URL에 실제로 등장하는 언어 세그먼트(소문자). 한국어는 빈 문자열(루트).
export const LOCALE_SEGMENT: Record<Locale, string> = {
  ko: "",
  en: "en",
  "zh-Hans": "zh-hans",
  "zh-Hant": "zh-hant",
};

// 한국어를 뺀, 주소에 코드가 붙는 언어들(라우팅/정적생성용)
export const PREFIXED_LOCALES = LOCALES.filter(
  (l) => l !== DEFAULT_LOCALE
) as Exclude<Locale, "ko">[];

// <html lang="…"> 및 og:locale 등에 쓰는 표준 언어 태그
export const HTML_LANG: Record<Locale, string> = {
  ko: "ko",
  en: "en",
  "zh-Hans": "zh-Hans",
  "zh-Hant": "zh-Hant",
};

// og:locale 형식
export const OG_LOCALE: Record<Locale, string> = {
  ko: "ko_KR",
  en: "en_US",
  "zh-Hans": "zh_CN",
  "zh-Hant": "zh_TW",
};

// 언어 전환기(우측 상단 드롭다운)에 표시할 이름 — 각 언어를 그 언어 글자로 표기
export const LOCALE_LABEL: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
};

// 짧은 표기(아이콘 옆 칩)
export const LOCALE_SHORT: Record<Locale, string> = {
  ko: "KO",
  en: "EN",
  "zh-Hans": "简",
  "zh-Hant": "繁",
};

// 주어진 URL 세그먼트(예: "zh-hans")가 어떤 Locale인지 — 아니면 null
export function localeFromSegment(segment: string): Locale | null {
  const hit = (Object.entries(LOCALE_SEGMENT) as [Locale, string][]).find(
    ([, seg]) => seg !== "" && seg === segment
  );
  return hit ? hit[0] : null;
}

// 현재 경로(pathname)를 보고 어떤 언어 화면인지 판단. 예: "/en/blog" → "en", "/blog" → "ko"
export function localeFromPathname(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0] ?? "";
  return localeFromSegment(seg) ?? DEFAULT_LOCALE;
}

// 경로에서 언어 접두어를 떼어 "한국어 기준 경로"로 되돌림. 예: "/en/blog/foo" → "/blog/foo"
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && localeFromSegment(parts[0])) {
    const rest = "/" + parts.slice(1).join("/");
    return rest === "/" ? "/" : rest;
  }
  return pathname === "" ? "/" : pathname;
}

// 한국어 기준 경로를 특정 언어용 경로로 변환.
// localize("/blog/foo", "en") → "/en/blog/foo", localize("/blog/foo", "ko") → "/blog/foo"
export function localize(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const seg = LOCALE_SEGMENT[locale];
  if (!seg) return clean; // 한국어: 그대로
  return clean === "/" ? `/${seg}` : `/${seg}${clean}`;
}

// hreflang 묶음 생성 — 한 페이지의 모든 언어판 주소 + x-default(한국어).
// generateMetadata의 alternates.languages 에 그대로 넣는다.
export function hreflangAlternates(
  basePath: string
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const locale of LOCALES) {
    out[HTML_LANG[locale]] = localize(basePath, locale);
  }
  out["x-default"] = localize(basePath, DEFAULT_LOCALE);
  return out;
}

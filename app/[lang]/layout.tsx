import { notFound } from "next/navigation";
import {
  localeFromSegment,
  HTML_LANG,
  LOCALE_SEGMENT,
  PREFIXED_LOCALES,
} from "@/lib/i18n";

// [lang] 트리는 전부 비(非)한국어(영어·중국어 간·번).
// 2026-07-29 애드센스 전략 철회 → 외국어도 전부 색인해 외국인 트래픽을 확보한다.
// (예전 noindex 메타 제거. 각 페이지의 hreflang/canonical은 그대로 유지 → 구글이 언어별로 정확히 인식)
// 한국어 루트 /는 app/layout.tsx라 별개.

// 영어/중국어(간·번)만 정적 생성 — 한국어는 루트(app/)가 따로 담당하므로 여기 포함하지 않는다.
export function generateStaticParams() {
  return PREFIXED_LOCALES.map((l) => ({ lang: LOCALE_SEGMENT[l] }));
}

// 알 수 없는 언어코드로 들어오면 404 — 한국어(ko)나 엉뚱한 값으로 영어 트리가 열리는 것을 막는다.
export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = localeFromSegment(lang);
  if (!locale) notFound();

  // 접근성: 이 하위 트리의 실제 언어를 명시(루트 <html lang="ko"> 아래에서 언어 구간을 정확히 표시)
  return <div lang={HTML_LANG[locale]}>{children}</div>;
}

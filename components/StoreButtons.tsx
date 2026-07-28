// 앱 스토어 다운로드 배지 (구글 플레이 + 애플 앱스토어).
// 주소가 있는 스토어만 그린다(둘 다 없으면 아무것도 렌더 안 함).
// 착지 페이지(페북 "더 알아보기"·유튜브 소개)에서 다운로드를 유도하는 핵심 CTA라
// 페이지에서 가장 눈에 띄도록 표준 검정 배지 스타일 + 큼직한 크기로 노출한다.
// 배지 안 텍스트가 모바일에서 세로로 쪼개지지 않도록 .store-badge-nowrap(전역 CSS) 적용.

export default function StoreButtons({
  androidUrl,
  iosUrl,
  appName,
}: {
  androidUrl?: string;
  iosUrl?: string;
  appName: string;
}) {
  if (!androidUrl && !iosUrl) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-8">
      {androidUrl && (
        <a
          href={androidUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${appName} 구글 플레이에서 다운로드`}
          className="store-badge-nowrap group inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#191F28] text-white hover:bg-black transition-colors shadow-sm"
        >
          {/* 구글 플레이 공식 4색 삼각형 로고 */}
          <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 512 512" aria-hidden="true">
            <path fill="#00D0FF" d="M47 20.4C42.2 25.5 39.5 33.4 39.5 43.6v424.8c0 10.2 2.7 18.1 7.5 23.2l1.4 1.4 238-238v-5.6l-238-238z" />
            <path fill="#00F076" d="M365.3 349.3L286 270v-5.6l79.3-79.3 1.8 1 94 53.4c26.9 15.3 26.9 40.3 0 55.6l-94 53.4z" transform="translate(-79.3 -14.7)" />
            <path fill="#FF3A44" d="M287.4 348.3L206 267 47 426c8.9 9.4 23.5 10.6 40 1.2l200.4-113.9z" transform="translate(0 -1)" />
            <path fill="#FFC800" d="M287.4 165.7L87 51.8C70.5 42.4 55.9 43.6 47 53l159 159 81.4-81.3z" transform="translate(0 -1)" />
          </svg>
          <span className="flex flex-col items-start leading-none">
            <span className="text-[11px] text-white/70 mb-0.5">다운로드하기</span>
            <span className="text-[16px] font-bold">Google Play</span>
          </span>
        </a>
      )}

      {iosUrl && (
        <a
          href={iosUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${appName} 앱스토어에서 다운로드`}
          className="store-badge-nowrap group inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#191F28] text-white hover:bg-black transition-colors shadow-sm"
        >
          {/* 애플 공식 로고 */}
          <svg className="w-6 h-7 flex-shrink-0" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
          <span className="flex flex-col items-start leading-none">
            <span className="text-[11px] text-white/70 mb-0.5">다운로드하기</span>
            <span className="text-[16px] font-bold">App Store</span>
          </span>
        </a>
      )}
    </div>
  );
}

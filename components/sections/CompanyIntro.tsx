import Link from "next/link";
import { projects } from "@/lib/projects";

// 홈의 회사·서비스 소개 섹션 — 순수 서버 컴포넌트로 렌더해 회사 정체성과
// 서비스 개요가 글(HTML)로 담기게 한다. 검색엔진이 사이트의 실제 내용을
// 이해하도록 돕고, 운영 중 서비스로 가는 내부링크를 제공한다.
// (프로젝트 상세 기능은 각 서비스가 책임지므로 여기선 개요 수준만.)
export default function CompanyIntro() {
  const live = projects.filter((p) => p.status === "live");
  const building = projects.filter((p) => p.status !== "live");

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5">
        <p className="text-[13px] font-bold text-[#1d62f0]">About ARMES</p>
        <h2 className="mt-1 text-[24px] font-extrabold leading-snug text-gray-900 sm:text-[30px]">
          기술로 일상의 작은 불편을 없애는 회사
        </h2>

        <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-gray-600">
          <p>
            주식회사 아르메스(ARMES)는 데이터·자동화·위치 기술을 활용해, 사람들이 매일 겪는 작은 불편을
            실제로 해결하는 서비스를 만드는 회사입니다. 화면 속 멋진 기술을 자랑하기보다, 쇼핑몰 운영자, 여행을 준비하는
            사람, 동네에서 장을 보는 소비자처럼 <strong className="font-bold text-gray-800">현실의 사용자가 바로 쓸 수 있는 도구</strong>를
            만드는 데 집중합니다.
          </p>
          <p>
            우리는 어려운 작업을 누구나 클릭 몇 번으로 끝낼 수 있게 만드는 것을 목표로 합니다. 상품 사진 한 장을 만들기 위해
            비싼 스튜디오와 디자이너가 필요했던 일, 이미지·문서·영상을 다루기 위해 값비싼 프로그램을 설치해야 했던 일,
            흩어진 할인 정보를 일일이 찾아다녀야 했던 일 — 이런 번거로움을 기술로 대신 처리해, 사용자가 정작 중요한 일에
            집중할 수 있도록 돕습니다.
          </p>
        </div>

        <h3 className="mt-12 text-[18px] font-extrabold text-gray-900">지금 운영 중인 서비스</h3>
        <div className="mt-4 space-y-4">
          {live.map((p) => (
            <div key={p.key} className="rounded-2xl border border-gray-100 bg-[#fafbff] p-5">
              <div className="flex items-center gap-2">
                <span className="text-[22px]">{p.icon}</span>
                <h4 className="text-[17px] font-extrabold text-gray-900">{p.name}</h4>
                <span className="rounded-full bg-[#E7F7EF] px-2 py-0.5 text-[11px] font-bold text-[#15803D]">운영중</span>
              </div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-gray-600">
                {p.tagline}. <span className="text-gray-500">주요 대상: {p.audience}.</span>
              </p>
              {p.href && (
                <Link
                  href={p.href}
                  className="mt-3 inline-block text-[13.5px] font-bold text-[#1d62f0] hover:underline"
                >
                  {p.name} 바로가기 →
                </Link>
              )}
            </div>
          ))}
        </div>

        <h3 className="mt-10 text-[18px] font-extrabold text-gray-900">준비 중인 서비스</h3>
        <p className="mt-3 text-[14.5px] leading-[1.9] text-gray-600">
          아르메스는 운영 중인 서비스 외에도 여러 프로젝트를 개발하고 있습니다.{" "}
          {building.map((p, i) => (
            <span key={p.key}>
              <strong className="font-bold text-gray-800">{p.name}</strong>
              {`(${p.tagline})`}
              {i < building.length - 1 ? ", " : "를 준비하며 일상의 더 많은 영역으로 기술을 넓혀가고 있습니다."}
            </span>
          ))}
        </p>

        <div className="mt-8">
          <Link
            href="/projects"
            className="inline-block rounded-xl border border-gray-200 px-5 py-2.5 text-[14px] font-bold text-gray-600 transition-colors hover:border-[#1d62f0] hover:text-[#1d62f0]"
          >
            전체 프로젝트 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}

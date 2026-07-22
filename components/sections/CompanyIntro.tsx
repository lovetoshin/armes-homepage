// 홈의 회사 소개 섹션 — 순수 서버 컴포넌트로 렌더해 회사 정체성이 글(HTML)로
// 담기게 한다. 서비스 목록은 위 Showcase·ProjectsSection이 담당하므로 여기선 소개 글만.
// 배경은 아래 TechnologySection(#F8FAFF)과 같은 색 — 프로젝트까지 흰색, 여기부터 연회색 한 영역.
export default function CompanyIntro() {
  return (
    <section className="bg-[#F8FAFF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
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

      </div>
    </section>
  );
}

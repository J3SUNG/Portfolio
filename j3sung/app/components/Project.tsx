import whosTheZARAIcon from "/public/img/projects/icons/rabbitIcon.png";
import nadriIcon from "/public/img/projects/icons/parasolIcon.png";
import suiteCarIcon from "/public/img/projects/icons/suiteIcon.png";
import iDonCareIcon from "/public/img/projects/icons/iDonCareIcon.png";
import jettyChartIcon from "/public/img/projects/icons/jettyChartIcon.png";
import blockCodingIcon from "/public/img/projects/icons/kakao.png";
import wtz1 from "/public/img/projects/wtz1.png";
import wtz2 from "/public/img/projects/wtz2.gif";
import wtz3 from "/public/img/projects/wtz3.gif";
import wtz4 from "/public/img/projects/wtz4.gif";
import nad1 from "/public/img/projects/nad1.gif";
import nad2 from "/public/img/projects/nad2.gif";
import nad3 from "/public/img/projects/nad3.gif";
import nad4 from "/public/img/projects/nad4.gif";
import sui1 from "/public/img/projects/sui1.png";
import sui2 from "/public/img/projects/sui2.jpg";
import sui3 from "/public/img/projects/sui3.jpg";
import sui4 from "/public/img/projects/sui4.jpg";
import bc1 from "/public/img/projects/bc1.png";
import bc2 from "/public/img/projects/bc2.gif";
import bc3 from "/public/img/projects/bc3.gif";
import bc4 from "/public/img/projects/bc4.gif";
import idc1 from "/public/img/projects/idc1.png";
import idc2 from "/public/img/projects/idc2.png";
import idc3 from "/public/img/projects/idc3.png";
import idc4 from "/public/img/projects/idc4.png";
import jc1 from "/public/img/projects/jc1.png";
import jc2 from "/public/img/projects/jc2.png";
import jc3 from "/public/img/projects/jc3.png";
import jc4 from "/public/img/projects/jc4.png";
import empty from "/public/img/projects/empty.png";
import Image from "next/image";

export default function Project() {
  let projects = [
    {
      name: "블록 코딩 서비스",
      img: [bc1, bc2, bc3, bc4],
      skill: "Typescript, HTML, CSS, jira, git",
      team: "프론트엔드 : 1인 개발",
      subject: "블록 코딩 서비스 개발",
      description: [
        "• 블록 구현 (선언문, 일반문, 제어문, 표현식)",
        "• 블록 연결 및 배치",
        "• 프로그램 실행 제어",
        "• 프로그램 실행 예외 처리",
        "• URL 블록 공유 기능",
        "• Javascript 코드 추출 기능",
        "• JSON 저장 / 불러오기 기능",
        "• 디버깅 기능 구현",
        "• 복사 기능",
        "• 되돌리기 기능",
      ],
      experience: [
        "• 코드 리뷰와 대면 리뷰를 통해 피드백을 받고, 피드백을 통해 개선하는 경험",
        "• 기술을 적용 할 때 해당 기술이 왜 필요하고, 어떤 점이 이점이 되는지를 고민하는 습관을 가짐",
        "• 설계에 문제가 생길 경우, 프로젝트가 커질 수록 문제가 발생하고 늦어질수록 고치는 비용이 많이 드는 것을 경험",
      ],
      url: [{ name: "github", link: "https://github.com/J3SUNG/BlockCoding" }],
      icon: blockCodingIcon,
    },
    {
      name: "Jetty Chart",
      img: [jc1, jc2, jc3, jc4],
      skill: "React, jira, git",
      team: "개발 : 6명",
      subject: "오픈소스 차트 라이브러리 개발 프로젝트",
      description: [
        "• 차트 개발 (bar, line, pie, donut, bump, scatter, pyramid, map)",
        "• 데모 사이트 개발",
        "• NPM 배포",
      ],
      role: ["• 파이차트, 도넛차트 개발, 데모 사이트 개발"],
      experience: [
        "• SSAFY 공통 프로젝트 우수상 (3등)",
        "• 오픈소스 프로젝트 진행",
        "• 다양한 커스터마이징 기능의 차트 라이브러리 제공",
        "• 데모 사이트 자동화를 통해서 빠르게 사이트 제작 완료",
      ],
      url: [
        { name: "데모 사이트", link: "https://jetty-chart-demo.vercel.app/" },
        { name: "npm", link: "https://www.npmjs.com/package/jetty-chart" },
        { name: "github", link: "https://github.com/J3SUNG/jetty-chart" },
      ],
      icon: jettyChartIcon,
    },
    {
      name: "아이돈케어",
      img: [idc1, idc2, idc3, idc4],
      skill:
        "Typescript, React, Tailwind, PWA, Recoil, Spring Boot, Spring Security, JPA, MYSQL, Redis, Docker, Jira, Git",
      team: "FrontEnd 3명 / BackEnd 3명",
      subject: "마이데이터를 활용한 아이 용돈 관리 서비스 제작",
      description: [
        "• 로그인 보안 JWT 구현",
        "• 부모와 자식 관계 관리",
        "• 용돈 지급 및 정기 용돈 설정",
        "• 미션 기능",
        "• 결제, 이체 기능",
        "• 용돈, 미션, 결제 등 내역 조회 기능",
        "• 활동 보고서 (내역 시각화)",
      ],
      url: [{ name: "github", link: "https://github.com/J3SUNG/idoncare" }],
      role: [
        "• FrontEnd",
        "• UI/UX 개발",
        "• 용돈 기능 구현",
        "• 관계 기능 구현",
        "• 로그인 관리",
        "• 공통 컴포넌트 개발",
      ],
      experience: [
        "• React Query, Recoil, PWA, Jest 등 새로운 기술 사용 경험",
        "• 최적화 통해 성능 향상",
        "• 모바일 환경 UI/UX에 대한 공부 필요",
      ],
      icon: iDonCareIcon,
    },
    {
      name: "Who's The ZARA",
      img: [wtz1, wtz2, wtz3, wtz4],
      skill:
        "Typescript, React, Tailwind, Vite, Open Vidu, Stomp, Spring Boot, Spring Security, JPA, MYSQL, Redis, Docker, Jira, Git",
      team: "FrontEnd 3명 / BackEnd 3명",
      subject: "WEB RTC를 활용한 별주부전 컨셉 마피아 게임",
      description: [
        "• 로그인 보안 JWT 구현",
        "• 게임 방 조회, 생성, 수정, 삭제",
        "• 상점 기능",
        "• 게임 전적 데이터 시각화",
        "• 직업별 능력 구현 (토끼, 자라, 무당, 장군, 탐관, 의원, 산적)",
        "• 화상 및 팀원 간 채팅 기능",
        "• 캐릭터 이동, 아바타, 말풍선",
        "• 시간 별 상황 전환, 투표 및 능력 사용 기능",
      ],
      role: [
        "• 팀장, FrontEnd 개발",
        "• 웹사이트 UI/UX 개발",
        "• 게임 개발",
        "• 캐릭터 애니메이션 개발",
        "• 웹소켓, API 연결",
      ],
      experience: [
        "• SSAFY 공통 프로젝트 우수상 (1등)",
        "• Web RTC, Stomp 등 새로운 기술 사용 경험",
        "• 게임 테스터들을 통해서 UX/UI 개선 경험",
        "• 주제에 따라 중요한 부분이 다르다는 것을 인지(게임은 재미와 고객유치)",
        "• 협업을 통해 Git, Jira, 컨벤션, 설계의 중요성 인지",
      ],
      url: [
        {
          name: "github",
          link: "https://github.com/J3SUNG/Who-s-The-ZARA",
        },
        {
          name: "회고",
          link: "https://j3sung.tistory.com/1129",
        },
      ],
      icon: whosTheZARAIcon,
    },
    {
      name: "나들이",
      img: [nad1, nad2, nad3, nad4],
      skill: "Vue.js, Javascript, HTML, CSS, SpringBoot, MySQL, emailjs, cheerio, vue-chartjs, Git",
      team: "FrontEnd 1명 / BackEnd 1명",
      subject: "지역별 관광 데이터를 활용한 여행 정보 사이트",
      description: [
        "• 지역별 관광지 데이터를 Map에 제공",
        "• 선택한 관광지를 통해서 여행노트 작성 및 공유 가능",
        "• 인기있는 관광지, 최근 본 여행지, 여행 관련 뉴스 등 제공",
        "• 로그인 보안 JWT 구현",
        "• 커뮤니티, 공지사항 제공",
        "• 관광지 방문 로그를 활용하여 데이터 시각화",
      ],
      role: [
        "• 팀장, FrontEnd를 1인 개발",
        "• 웹사이트 UI/UX 개발",
        "• 관광지 데이터 시각화",
        "• 뉴스 데이터 크롤링",
      ],
      experience: [
        "• SSAFY 관통 프로젝트 최우수상 ",
        "• 공공데이터 API, Kakao Map API 활용",
        "• 다양한 라이브러리 사용 (크롤링, 이메일, 차트)",
        "• 기획 설계의 중요성을 인지",
      ],
      url: [
        {
          name: "github",
          link: "https://github.com/J3SUNG/Nadri",
        },
        {
          name: "회고",
          link: "https://j3sung.tistory.com/1121",
        },
      ],
      icon: nadriIcon,
    },
    {
      name: "Suite Car",
      img: [sui1, sui2, sui3, sui4],
      skill: "JavaScript, BootStrap, HTML, PHP, Slim, MySQL, Kotlin, C, Git",
      team: "FrontEnd 1명 / BackEnd 1명 / App 1명 / AI 1명",
      subject: "센서 데이터 분석 및 시각화, 운전자 도우미",
      description: [
        "• 센서 데이터를 AI를 통해 보정",
        "• Map API를 통해서 사용자와 해당 센서들에 대한 위치 확인",
        "• 센서 데이터 시각화 (미세먼지, GPS, 심박수)",
        "• 어플리케이션을 통해서 차량운전자에게 적절한 기능 추천",
      ],
      role: [
        "• 팀장, FrontEnd 개발",
        "• 소프트웨어 설계(프로시저 디자인, 플로우 차트)",
        "• 웹사이트 UI/UX 개발",
        "• 차트, 맵을 사용해서 시각화",
        "• 추천 알고리즘 개발",
      ],
      experience: [
        "• Outstanding Achievement Award 수상",
        "• 소프트웨어 설계를 통해 팀원간 협력 및 유지보수에 큰 이점",
        "• 오류 노트 작성으로 같은 오류를 쉽게 해결",
      ],
      url: [
        {
          name: "github",
          link: "https://github.com/J3SUNG/Suite-Car",
        },
        {
          name: "회고",
          link: "https://j3sung.tistory.com/519",
        },
      ],
      icon: suiteCarIcon,
    },
  ];

  return (
    <>
      <section id="project" className="w-[1280px] m-auto pt-[40px]">
        <h2 className="font-bold text-blue-900 text-[72px]">Project</h2>
        {projects.map((item) => (
          <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[32px] my-[40px] w-full rounded-md">
            <div className="flex items-center">
              <h2 className="text-[40px] font-bold mr-[20px]">{item.name}</h2>
              <Image alt="whos the zara icon" src={item.icon} className="w-[50px] h-[50px]" />
            </div>
            <p className="text-[20px] font-bold text-gray-600">{item.subject}</p>
            <div className="w-full h-[600px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-[20px]">
              <div className="flex flex-wrap">
                {item.img.map((imgItem) => (
                  <Image
                    src={imgItem}
                    alt={item.name}
                    className={`w-[50%] h-[300px] object-contain shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`}
                  />
                ))}
              </div>
            </div>
            {item.url.length > 0 && (
              <div className="mt-[16px]">
                <h3 className="text-[24px] font-bold">링크</h3>
                {item.url.map((urlItem) => (
                  <p className="text-[20px]">
                    {urlItem.name} :{" "}
                    <a className="text-sky-500" href={urlItem.link} target="_blank">
                      {urlItem.link}
                    </a>
                  </p>
                ))}
              </div>
            )}
            <div className="mt-[16px]">
              <h3 className="text-[24px] font-bold">팀원</h3>
              <p className="text-[20px]">{item.team}</p>
            </div>
            <div className="mt-[16px]">
              <h3 className="text-[24px] font-bold">기술스택</h3>
              <p className="text-[20px]">{item.skill}</p>
            </div>

            <div className="mt-[16px]">
              <h3 className="text-[24px] font-bold mb-[5px]">주요기능</h3>
              <div className="flex w-[1000px] flex-wrap">
                {item.description.map((descriptionItem) => (
                  <p className="text-[20px] mr-[32px]">{descriptionItem}</p>
                ))}
              </div>
            </div>
            {item.role && (
              <div className="mt-[16px]">
                <h3 className="text-[24px] font-bold mb-[5px]">담당역할</h3>
                {item.role.map((roleItem) => (
                  <p className="text-[20px]">{roleItem}</p>
                ))}
              </div>
            )}
            <div className="mt-[16px]">
              <h3 className="text-[24px] font-bold mb-[5px]">성과 및 배운점</h3>
              {item.experience.map((experienceItem) => (
                <p className="text-[20px]">{experienceItem}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

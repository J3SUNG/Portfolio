import nadri from "/public/img/projects/nadri.png";
import suiteCar from "/public/img/projects/suiteCar.jpg";
import zigball from "/public/img/projects/zigball.png";
import noPiano from "/public/img/projects/noPiano.png";
import whosTheZARA from "/public/img/projects/WhosTheZARA.png";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  let projects = [
    {
      name: "Who's The ZARA",
      img: whosTheZARA,
      skill:
        "Typescript, React, Tailwind, Vite, Open Vidu, Stomp, Spring Boot, Spring Security, JPA, MYSQL, Redis, Docker, Jira, Git",
      team: "FrontEnd 3명 / BackEnd 3명",
      subject: "WEB RTC를 활용한 별주부전 컨셉 마피아 게임",
      description: [
        "- 로그인 보안 JWT 구현",
        "- 게임 방 조회, 생성, 수정, 삭제",
        "- 상점 기능",
        "- 게임 전적 데이터 시각화",
        "- 직업별 능력 구현 (토끼, 자라, 무당, 장군, 탐관, 의원, 산적)",
        "- 화상 및 팀원 간 채팅 기능",
        "- 캐릭터 이동, 아바타, 말풍선",
        "- 시간 별 상황 전환, 투표 및 능력 사용 기능",
      ],
      role: [
        "- 팀장, FrontEnd를 1인 개발",
        "- 웹사이트 UI/UX 개발",
        "- 게임 개발",
        "- 방 CRUD 개발",
        "- 웹소켓, API 연결",
      ],
      experience: [
        "- SSAFY 공통 프로젝트 우수상 (1등)",
        "- Web RTC, Stomp 등 새로운 기술 사용 경험",
        "- 게임 테스터들을 통해서 UI/UX 공부가 필요",
        "- 게임이라는 주제인 만큼 재미와 고객유치가 중요",
        "- 협업을 통해 Git, Jira, 컨벤션, 설계의 중요성 인지 ",
      ],
      url: "https://github.com/J3SUNG/Who-s-The-ZARA",
    },
    {
      name: "나들이",
      img: nadri,
      skill: "Vue.js, Javascript, HTML, CSS, SpringBoot, MySQL, emailjs, cheerio, vue-chartjs, Git",
      team: "FrontEnd 1명 / BackEnd 1명",
      subject: "지역별 관광 데이터를 활용한 여행 정보 사이트",
      description: [
        "- 지역별 관광지 데이터를 Map에 제공",
        "- 선택한 관광지를 통해서 여행노트 작성 및 공유 가능",
        "- 인기있는 관광지, 최근 본 여행지, 여행 관련 뉴스 등 제공",
        "- 로그인 보안 JWT 구현",
        "- 커뮤니티, 공지사항 제공",
        "- 관광지 방문 로그를 활용하여 데이터 시각화",
      ],
      role: [
        "- 팀장, FrontEnd를 1인 개발",
        "- 웹사이트 UI/UX 개발",
        "- 관광지 데이터 시각화",
        "- 뉴스 데이터 크롤링",
      ],
      experience: [
        "- SSAFY 관통 프로젝트 최우수상 ",
        "- 공공데이터 API, Kakao Map API 활용",
        "- 다양한 라이브러리 사용 (크롤링, 이메일, 차트)",
        "- 여러 사람들의 피드백을 통해 사용자 UI/UX의 중요성 인지",
      ],
      url: "https://github.com/J3SUNG/Nadri",
    },
    {
      name: "Suite Car",
      img: suiteCar,
      skill: "JavaScript, BootStrap, HTML, PHP, Slim, MySQL, Kotlin, C, Git",
      team: "FrontEnd 1명 / BackEnd 1명 / App 1명 / AI 1명",
      subject: "센서 데이터 분석 및 시각화, 차량 운전자에게 추천 선택지 제공",
      description: [
        "- 센서 데이터를 AI를 통해 보정",
        "- Map API를 통해서 사용자와 해당 센서들에 대한 위치 확인",
        "- 센서 데이터 시각화 (미세먼지, GPS, 심박수)",
        "- 어플리케이션을 통해서 차량운전자에게 적절한 기능 추천",
      ],
      role: [
        "- 팀장, FrontEnd 개발",
        "- 소프트웨어 설계(프로시저 디자인, 플로우 차트)",
        "- 웹사이트 UI/UX 개발",
        "- 차트, 맵을 사용해서 시각화",
        "- 추천 알고리즘 개발",
      ],
      experience: [
        "- Outstanding Achievement Award 수상",
        "- 소프트웨어 설계를 통해 팀원간 협력 및 유지보수에 큰 이점",
        "- 오류 노트 작성으로 같은 오류를 쉽게 처리 할 수 있었음",
      ],
      url: "https://github.com/J3SUNG/Suite-Car",
    },
  ];

  return (
    <>
      <section
        id="project"
        className="flex justify-center flex-col w-[1140px] sm:m-auto h-auto mt-[40px] sm:mt-[140px] ml-[14px]"
      >
        <h2 className="text-4xl font-bold text-left text-blue-900 sm:text-7xl">Project</h2>
        <div className="sm:mt-10 flex item-center sm:justify-center rounded-lg flex-wrap w-[93vw] sm:w-auto">
          {projects.map((item) => (
            <div className="relative overflow-hidden flex rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-[16px] sm:py-[40px] px-[16px] sm:px-[40px] my-[20px] sm:my-[40px] h-[800px] w-full flex-wrap sm:flex-nowrap">
              <div className="py-[10px] font-Binggrae flex flex-col justify-between">
                <h2 className="text-[14px] sm:text-5xl font-bold mb-[10px] sm:mb-[20px]">
                  {item.name}
                </h2>
                <div>
                  <h3 className="text-[14px] sm:text-2xl font-bold">주제</h3>
                  <p className="text-[10px] sm:text-lg w-[440px]">{item.subject}</p>
                </div>
                <div>
                  <h3 className="text-[14px] sm:text-2xl font-bold">기술스택</h3>
                  <p className="text-[10px] sm:text-lg w-[520px]">{item.skill}</p>
                </div>
                <div>
                  <h3 className="text-[14px] sm:text-2xl font-bold">팀원</h3>
                  <p className="text-[10px] sm:text-lg w-[440px]">{item.team}</p>
                </div>
                <div className="min-w-[85vw] sm:min-w-[420px] sm:w-[420px] max-h-[280px] min-h-[280px] sm:mr-[80px] rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-black">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full h-[200px] sm:h-full object-fill rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:pr-0"
                  />
                  <div className="absolute rounded-3xl bg-sky-900 min-w-[85vw] sm:min-w-[420px] sm:w-[420px] h-[200px] sm:h-[280px] sm:left-[40px] top-[16px] sm:top-[470px] opacity-0 hover:opacity-90 hover:cursor-pointer z-20">
                    <Link
                      href={item.url}
                      target="_blank"
                      className="flex items-center justify-center w-full h-full text-center text-white"
                    >
                      <p className="text-sm text-white sm:text-xl">GitHub 페이지로 바로가기</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="py-[10px] font-Binggrae flex flex-col justify-around ml-[20px] w-full items-center">
                <div>
                  <h3 className="text-[14px] sm:text-2xl font-bold mb-[5px]">주요기능</h3>
                  {item.description.map((descriptionItem) => (
                    <p className="text-[10px] sm:text-[18px] w-[500px]">{descriptionItem}</p>
                  ))}
                </div>
                <div>
                  <h3 className="text-[14px] sm:text-2xl font-bold mb-[5px]">담당역할</h3>
                  {item.role.map((roleItem) => (
                    <p className="text-[10px] sm:text-[18px] w-[500px]">{roleItem}</p>
                  ))}
                </div>
                <div>
                  <h3 className="text-[14px] sm:text-2xl font-bold mb-[5px]">성과 및 배운점</h3>
                  {item.experience.map((experienceItem) => (
                    <p className="text-[10px] sm:text-[18px] w-[500px]">{experienceItem}</p>
                  ))}
                </div>
              </div>
              <div className="absolute rounded-full top-[-570px] sm:top-[-600px] left-[-500px] sm:left-[-660px] -z-10 w-[800px] h-[800px] bg-sky-100 opacity-50"></div>
              <div className="absolute rounded-full top-[500px] right-[-660px] sm:right-[-600px] -z-10 w-[800px] h-[800px] bg-yellow-100"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

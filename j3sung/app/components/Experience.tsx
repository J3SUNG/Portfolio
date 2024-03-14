import Image from "next/image";
import triangle from "/public/img/yield.png";
import SSAFY from "../../public/img/experience/SSAFY.png";
import QI from "../../public/img/experience/QI.jpg";
import INTUSEER from "../../public/img/experience/INTUSEER.png";
import kakao from "../../public/img/experience/kakao.png";

export default function Experience() {
  const experience = [
    {
      date: "2024-01-03 ~ 2024-02-29",
      title: "카카오 채용 연계형 인턴",
      content: ["- 블록 코딩 서비스 개발", "- Front-end : HTML, CSS, Typescript"],
      img: kakao,
    },
    {
      date: "2023-01-04 ~ 2023-12-29",
      title: "삼성 청년 SW 아카데미 (SSAFY 9기)",
      content: [
        "- 지역별 관광 데이터를 활용한 여행 정보 사이트 프로젝트 (최우수상)",
        "- WEB RTC를 활용한 별주부전 컨셉 마피아 게임 프로젝트 (우수상 1등)",
        "- 마이데이터를 활용한 아이 용돈 관리 서비스 프로젝트 ",
        "- 오픈소스 차트 라이브러리 개발 프로젝트 (우수상 3등)",
      ],
      img: SSAFY,
    },
    {
      date: "2020-09-15 ~ 2021-06-30",
      title: "Qualcomm Institute 학생 인턴",
      content: [
        "- 미세먼지 데이터 분석 및 시각화 프로젝트 참여",
        "- 소프트웨어 설계 (프로시저 디자인, 플로우 차트)",
        "- 프론트엔드 개발 (회원가입, 센서 CRUD 및 데이터 시각화) (JavaScript, React)",
        "- 데이터 시각화 (Python, Bokeh, Zeppelin, Tableau)",
      ],
      img: QI,
    },
    {
      date: "2020-03-26 ~ 2020-08-14",
      title: "인투시어 (경력 개발부)",
      content: [
        "- 회원 가입 및 로그인 솔루션 제작 프로젝트 참여",
        "- Nodejs, React 개발 및 소프트웨어 설계 (프로시저 디자인, 플로우 차트)",
        "- TDD(테스트 주도 개발) 방식",
      ],
      img: INTUSEER,
    },
  ];
  return (
    <section id="experience" className="w-[1280px] m-auto pt-[40px]">
      <h2 className="font-bold text-blue-900 text-[72px]">Experience</h2>
      <div className="relative">
        {experience.map((item) => (
          <div className="flex flex-col pl-[40px] py-[10px] ml-[10px] relative">
            <div className="flex font-bold text-[24px] mt-[10px]">
              <p className="mr-[10px]">{item.title}</p>
              <p>({item.date})</p>
            </div>
            <div className="mt-[10px] pl-0 text-[22px] w-full whitespace-normal">
              {item.content.map((content) => (
                <p className="mb-[4px]">{content}</p>
              ))}
            </div>
            <hr className="mt-[24px] w-full" />
            <div className="absolute right-0 w-[200px] flex justify-center top-1/3 -translate-y-1/3">
              <Image
                src={item.img}
                alt="experience image"
                className=" w-auto h-[80px] mx-[10px] "
              />
            </div>
            <Image
              className="absolute left-[-6px] top-[30px] z-10 w-[18px] h-[18px]"
              src={triangle}
              alt="point"
            />
          </div>
        ))}
        <div className="absolute bg-sky-200 top-[10px] left-[10px] w-[5px] h-[880px]"></div>
      </div>
    </section>
  );
}

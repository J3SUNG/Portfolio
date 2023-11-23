import Image from "next/image";
import triangle from "/public/img/yield.png";
import SSAFY from "../../public/img/experience/SSAFY.png";
import QI from "../../public/img/experience/QI.jpg";
import INTUSEER from "../../public/img/experience/INTUSEER.png";

export default function Experience() {
  const experience = [
    {
      date: "2023-01-04 ~ 현재 진행 중",
      title: "삼성 청년 SW 아카데미 (SSAFY 9기)",
      content: [
        "- Learn : Computer Science, Java, Algorithm",
        "- Front-end : Vue, HTML, CSS3, JavaScript, BootStrap",
        "- Back-end : Spring Boot, MyBatis, MVC 아키텍처, MySQL",
        "- Project : 관통 프로젝트(최우수상), 공통 프로젝트(최우수상)",
      ],
      img: SSAFY,
    },
    {
      date: "2020-09-15 ~ 2021-06-30",
      title: "Qualcomm Institute 학생 인턴",
      content: [
        "- 미세먼지 데이터 분석 및 시각화 프로젝트 참여",
        "- 소프트웨어 설계(아키텍처 디자인, 프로시저 디자인, 플로우 차트)",
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
        "- Nodejs, React 개발 및 소프트웨어 설계(프로시저 디자인, 플로우 차트)",
        "- TDD(테스트 주도 개발) 방식",
      ],
      img: INTUSEER,
    },
  ];
  return (
    <section
      id="experience"
      className="flex justify-center flex-col w-[1140px] m-auto h-auto pt-[120px]"
    >
      <h2 className="font-bold text-left text-blue-900 text-7xl mb-10">Experience</h2>
      <div className="relative font-Binggrae -z-20">
        {experience.map((item) => (
          <div className="flex flex-col pl-8 my-8 px-8 ml-[10px] relative">
            <div className="flex font-bold text-[22px]">
              <p className="mr-[10px]">{item.title}</p>
              <p>({item.date})</p>
            </div>
            <div className="mt-[12px] pl-0 text-[20px] w-full whitespace-normal">
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
              className="absolute left-[-5px] top-[4px] z-10 w-[18px] h-[18px]"
              src={triangle}
              alt="point"
            />
          </div>
        ))}
        <div className="absolute bg-sky-200 top-[0px] left-[10px] w-[6px] h-[720px]"></div>
      </div>
    </section>
  );
}

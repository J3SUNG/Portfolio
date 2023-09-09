import Image from "next/image";
import triangle from "/public/img/yield.png";

export default function Experience() {
  const experience = [
    {
      date: "2023-01-04 ~ 2023-05-26",
      title: "삼성 청년 SW 아카데미 1학기",
      content: [
        "- Learn : Computer Science, Java, Algorithm",
        "- Front-end : Vue, HTML, CSS3, JavaScript, BootStrap",
        "- Back-end : Spring Boot, MyBatis, MVC 아키텍처, MySQL",
        "- Project : 관통 프로젝트(최우수상), 공통 프로젝트(최우수상)",
      ],
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
    },
    {
      date: "2020-03-26 ~ 2020-08-14",
      title: "인투시어 (경력 개발부)",
      content: [
        "- 회원 가입 및 로그인 솔루션 제작 프로젝트 참여",
        "- Nodejs, React 개발 및 소프트웨어 설계(프로시저 디자인, 플로우 차트)",
        "- TDD(테스트 주도 개발) 방식",
      ],
    },
  ];
  return (
    <section
      id="experience"
      className="flex justify-center flex-col w-[1140px] sm:m-auto h-auto mt-[40px] sm:mt-[112px] sm:pt-[80px] ml-[14px]"
    >
      <h2 className="text-4xl font-bold text-left text-blue-900 sm:text-7xl sm:mb-10">
        Experience
      </h2>
      <div className="relative font-Binggrae -z-20">
        {experience.map((item) => (
          <div className="flex flex-col pl-[20px] sm:pl-8 my-8 sm:px-8 ml-0 sm:ml-[10px] relative">
            <p className="font-bold text-[10px] sm:text-[22px]">
              {item.title} <span>({item.date})</span>
            </p>
            <div className="mt-[12px] pl-[4px] sm:pl-0 text-[10px] sm:text-[20px] w-[84vw] sm:w-full whitespace-normal">
              {item.content.map((content) => (
                <p className="mb-[4px]">{content}</p>
              ))}
            </div>
            <hr className="mt-[24px] w-[84vw] sm:w-full" />
            <Image
              className="absolute left-[-3px] sm:left-[-5px] top-[4px] z-10 w-[9px] sm:w-[18px] h-[9px] sm:h-[18px]"
              src={triangle}
              alt="point"
            />
          </div>
        ))}
        <div className="absolute bg-sky-200 top-[20px] sm:top-[0px] sm:left-[10px] w-[3px] sm:w-[6px] h-[450px] sm:h-[700px]"></div>
      </div>
    </section>
  );
}

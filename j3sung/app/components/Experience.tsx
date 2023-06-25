import Image from "next/image";
import triangle from "/public/img/yield.png";

export default function Experience() {
  const experience = [
    {
      date: "2020-03-26 ~ 2020-08-14",
      title: "인투시어 (경력 개발부)",
      content: `nodejs와 redis를 사용해서 회원 가입 및 로그인 솔루션 제작에 백엔드 개발로 참여`,
      content2: `필요한 기능에 대해 설계를 작성한 후 해당 설계를 바탕으로 기능을 구현하였으며 TDD(테스트 주도 개발) 방식을 사용`,
    },
    {
      date: "2020-09-15 ~ 2021-06-30",
      title: "Qualcomm Institute 학생 인턴",
      content: `소프트웨어 공학(아키텍처 디자인, 프로시저 디자인, 플로우 차트), JavaScript, Python, React, Bokeh, Zeppelin, Tableau 세미나 진행`,
      content2: `웹사이트를 개발하고, 센서 데이터들을 웹사이트에 시각화하는 파트를 맡아 프로젝트를 진행`,
    },
    {
      date: "2023-01-04 ~ 2023-05-26",
      title: "삼성 청년 SW 아카데미 1학기",
      content: `Java, Database, Spring Boot, Vuejs, Algorithm에 대해서 교육을 받음`,
      content2: `공공 데이터를 활용해서 사용자에게 관광지에 대한 유용한 정보를 제공할 수 있는 사이트 개발, '1학기 프로젝트 최우수상'을 수상`,
    },
  ];
  return (
    <section
      id="experience"
      className="flex justify-center flex-col w-[1140px] m-auto mt-[112px] pt-[80px]"
    >
      <h2 className="text-4xl text-blue-900 sm:text-7xl font-bold text-left mb-10">Experience</h2>
      <div className="relative font-Binggrae -z-20">
        {experience.map((item) => (
          <div className="flex flex-col my-8 px-8 ml-[10px] relative">
            <p className="font-bold text-xl">
              {item.title} <span>({item.date})</span>
            </p>
            <div className="mt-[12px]">
              <p className="mb-[4px]">{item.content}</p>
              <p>{item.content2}</p>
            </div>
            <hr className="mt-[24px]" />
            <Image
              className="absolute left-[-5px] top-[4px] z-10 w-[18px] h-[18px]"
              src={triangle}
              alt="point"
            />
          </div>
        ))}
        <div className="absolute bg-sky-200 top-[0px] left-[10px] w-[6px] h-[480px]"></div>
      </div>
    </section>
  );
}

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
      content: "별주부전 컨셉의 마피아 게임 개발",
      description: "WEB RTC를 활용해 실시간 화상채팅이 가능한 마피아게임 개발",
      skill: "React, TypeScript, Tailwind, Spring Boot, Git, Jira",
      url: "https://github.com/J3SUNG/Who-s-The-ZARA",
    },
    {
      name: "나들이",
      img: nadri,
      content: "지역별 관광 데이터를 활용한 여행 정보 사이트 ",
      description: "여행 정보, 여행 계획, 커뮤니티, 회원가입, 통계 등의 기능을 제공",
      skill: "Vue, eamiljs, cheerio, vue-charjs, Spring, MyBatis, MySQL",
      url: "https://github.com/J3SUNG/Nadri",
    },
    {
      name: "Suite Car",
      img: suiteCar,
      content: "차량 운전 도우미",
      description:
        "차량에 센서를 부착해서 해당 데이터를 앱으로 받아 AI를 통해 센서 데이터를 정밀화하고 이를 앱과 웹에서 시각화",
      skill: "JavaScript, PHP, MySQL Slim, BootStrap, Kotlin, C",
      url: "https://github.com/J3SUNG/Suite-Car",
    },
    {
      name: "Zigball",
      img: zigball,
      content: "스마트 스위치 개발",
      description:
        "기기를 전등스위치에 부착하고 어플리케이션을 통해서 위치를 조작해서 스위치를 조작하는 앱과 기기를 개발",
      skill: "Java, C++",
      url: "https://github.com/J3SUNG/Zigball",
    },
    {
      name: "No Piano",
      img: noPiano,
      content: "영상처리를 활용한 피아노 장갑 개발",
      description: "피아노 없이 카메라와 장갑을 이용해서 피아노를 연주",
      skill: "OpenCV, Java, C++",
      url: "https://github.com/J3SUNG/No-Piano",
    },
  ];

  return (
    <>
      <section
        id="project"
        className="flex justify-center flex-col w-[1140px] sm:m-auto h-auto mt-[40px] sm:mt-[112px] sm:pt-[80px] ml-[14px]"
      >
        <h2 className="text-4xl font-bold text-left text-blue-900 sm:text-7xl">Project</h2>
        <div className="sm:mt-10 flex item-center sm:justify-center rounded-lg flex-wrap w-[93vw] sm:w-auto">
          {projects.map((item) => (
            <div className="relative overflow-hidden flex rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-[16px] sm:py-[40px] px-[16px] sm:px-[60px] my-[20px] sm:my-[40px] h-[360px] w-full flex-wrap sm:flex-nowrap">
              <div className="min-w-[85vw] sm:min-w-[420px] sm:w-[420px] sm:mr-[80px] rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-black">
                <Image
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[200px] sm:h-full object-fill rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:pr-0"
                />
                <div className="absolute rounded-3xl bg-sky-900 min-w-[85vw] sm:min-w-[420px] sm:w-[420px] h-[200px] sm:h-[280px] sm:left-[60px] top-[16px] sm:top-[40px] opacity-0 hover:opacity-90 hover:cursor-pointer z-20">
                  <Link
                    href={item.url}
                    target="_blank"
                    className="flex items-center justify-center w-full h-full text-center text-white"
                  >
                    <p className="text-sm text-white sm:text-xl">GitHub 페이지로 바로가기</p>
                  </Link>
                </div>
              </div>
              <div className="py-[20px] font-Binggrae">
                <h2 className="text-[14px] sm:text-4xl font-bold mb-[10px] sm:mb-[20px]">
                  {item.name}
                </h2>
                <p className="text-[12px] sm:text-xl mb-[8px] sm:mb-[20px]">{item.content}</p>
                <p className="text-[10px] sm:text-lg mb-[4px] sm:mb-[20px] w-[74%]">
                  {item.description}
                </p>
                <p className="text-[10px] sm:text-lg w-[440px]">{item.skill}</p>
              </div>
              <div className="absolute rounded-full top-[-570px] sm:top-[-400px] left-[-500px] sm:left-[-500px] -z-10 w-[800px] h-[800px] bg-sky-100 opacity-50"></div>
              <div className="absolute rounded-full top-[200px] right-[-660px] sm:right-[-600px] -z-10 w-[800px] h-[800px] bg-yellow-100"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

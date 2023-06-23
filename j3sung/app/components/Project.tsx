import nadri from "@/public/img/project/nadri.png";
import suiteCar from "@/public/img/project/suiteCar.jpg";
import zigball from "@/public/img/project/zigball.png";
import noPiano from "@/public/img/project/noPiano.png";
import enjoyRiding from "@/public/img/project/enjoyRiding.png";
import shootingGame from "@/public/img/project/shootingGame.jpg";
import Image from "next/image";

export default function Project() {
  let projects = [
    {
      name: "나들이",
      img: nadri,
      content: "지역별 관광 데이터를 활용한 여행 정보 사이트 ",
      description: "여행 정보, 여행 계획, 커뮤니티, 회원가입, 통계 등의 기능을 제공",
      skill: "Vue, eamiljs, cheerio, vue-charjs, Spring Boot, MyBatis, MySQL",
    },
    {
      name: "Suite Car",
      img: suiteCar,
      content: "차량 운전 도우미",
      description:
        "차량에 센서를 부착해서 해당 데이터를 앱으로 받아 AI를 통해 센서 데이터를 정밀화하고 이를 앱과 웹에서 시각화",
      skill: "JavaScript, PHP, MySQL Slim, BootStrap, Kotlin, C",
    },
    {
      name: "Zigball",
      img: zigball,
      content: "스마트 스위치 개발",
      description:
        "기기를 전등스위치에 부착하고 어플리케이션을 통해서 위치를 조작해서 스위치를 조작하는 앱과 기기를 개발",
      skill: "Java, C++",
    },
    {
      name: "No Piano",
      img: noPiano,
      content: "영상처리를 활용한 피아노 장갑 개발",
      description: "피아노 없이 카메라와 장갑을 이용해서 피아노를 연주",
      skill: "OpenCV, Java, C++",
    },
    {
      name: "Enjoy Riding",
      img: enjoyRiding,
      content: "차량 렌트 시스템 개발",
      description:
        "차량 렌트 및 반납, 렌트 관리, 리뷰 작성 및 수정, 유저 관리, 차량 관리, 렌트 기록, 통계",
      skill: "C#, MySQL",
    },
    {
      name: "대학교에서 살아남기",
      img: shootingGame,
      content: "탄막 슈팅 게임",
      description: "대학생이 되어 다가온 유혹들을 이겨내고 대학생활을 무사히 마치는 여정",
      skill: "Java",
    },
  ];

  return (
    <>
      <section className="flex justify-center flex-col w-[1140px] m-auto mt-48">
        <h2 className="text-4xl text-blue-900 sm:text-7xl font-bold text-left">Project</h2>
        <div className="mt-10 flex item-center justify-center rounded-lg flex-wrap -z-10">
          {projects.map((item) => (
            <div className="relative overflow-hidden flex rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-[40px] px-[60px] my-[40px] h-[360px] w-full">
              <Image
                src={item.img}
                alt={item.name}
                className="min-w-[420px] w-[420px] object-fill rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-black mr-[80px]"
              />
              <div className="py-[20px] font-Binggrae">
                <h2 className="text-4xl font-bold mb-[20px]">{item.name}</h2>
                <p className="text-xl mb-[20px]">{item.content}</p>
                <p className="text-lg mb-[20px]">{item.description}</p>
                <p className="text-lg w-[440px]">{item.skill}</p>
              </div>
              <div className="absolute rounded-full top-[-400px] left-[-500px] -z-10 w-[800px] h-[800px] bg-sky-100 opacity-50"></div>
              <div className="absolute rounded-full top-[200px] right-[-600px] -z-10 w-[800px] h-[800px] bg-yellow-100"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

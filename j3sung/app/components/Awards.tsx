import profileImg from "/public/img/profile.jpg";
import Image from "next/image";
import whosTheZARA from "/public/img/awards/whosTheZARA.png";
import nadri from "/public/img/awards/nadri.png";
import suiteCar from "/public/img/awards/suiteCar.jpg";
import media from "/public/img/awards/media.png";
import icpc from "/public/img/awards/icpc.png";
import zigball from "/public/img/awards/zigball.jpg";
import algorithm from "/public/img/awards/algorithm.png";
import hackathon from "/public/img/awards/hackathon.jpg";

export default function Awards() {
  const awards = [
    {
      name: "SSAFY 공통 프로젝트",
      award: "우수상(1등)",
      organize: "삼성전자주식회사",
      date: "2023.07.04 ~ 2023.08.18",
      img: whosTheZARA,
    },
    {
      name: "SSAFY 관통 프로젝트",
      award: "최우수상",
      organize: "삼성전자주식회사",
      date: "2023.05.08 ~ 2023.05.26",
      img: nadri,
    },
    {
      name: "Health-related IoT Tracking Platform",
      award: "Outstanding Achievement Award",
      organize: "Qualcomm Institute",
      date: "2020-01-27 ~ 2020-02-24",
      img: suiteCar,
    },
    {
      name: "SW 해커톤 경진대회",
      award: "우수상",
      organize: "계명대학교",
      date: "2019.12.16",
      img: hackathon,
    },
    {
      name: "학부생 논문 및 캡스톤디자인 경진대회",
      award: "우수상",
      organize: "한국방송 미디어 공학회",
      date: "2019.11.30",
      img: media,
    },
    {
      name: "ACM-ICPC 서울대회",
      award: "Certificate of Achievement",
      organize: "International Collegiate Programming",
      date: "2019.11.09",
      img: icpc,
    },
    {
      name: "디지털로 만드는 스마트 하우스 공모전",
      award: "창의상",
      organize: "대구 메이커 페스타",
      date: "2019.06.02",
      img: zigball,
    },
    {
      name: "대경권 프로그래밍 경진대회",
      award: "장려상",
      organize: "경북, 한동, 안동, 대구가톨릭 대학교",
      date: "2019.05.11",
      img: algorithm,
    },
  ];
  return (
    <section
      id="awards"
      className="flex justify-center flex-col w-[1140px] sm:m-auto h-auto mt-[20px] sm:pt-[120px] ml-[14px]"
    >
      <h2 className="text-4xl font-bold text-left text-blue-900 sm:text-7xl">Awards</h2>
      <div className="flex-wrap sm:flex mt-[40px] justify-center">
        {awards.map((award) => (
          <div className="w-[47%] h-[200px] flex mb-[20px] mx-[10px] rounded-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px]">
            <div className="ml-[20px] flex items-center font-Binggrae">
              <ul className="sm:mt-0 text-[12px] sm:text-[20px] leading-10">
                <li className="relative flex mt-[10px] w-auto">
                  <p className="text-[22px] font-bold">🏆 {award.name}</p>
                </li>
                <li className="flex">
                  <p>수상내역 : {award.award}</p>
                </li>
                <li className="flex">
                  <p>주관 : {award.organize}</p>
                </li>
                <li className="flex">
                  <p>날짜 : {award.date}</p>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

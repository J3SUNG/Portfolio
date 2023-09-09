import profileImg from "/public/img/profile.jpg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="flex justify-center flex-col w-[1140px] sm:m-auto h-auto mt-[20px] sm:mt-[112px] sm:pt-[80px] ml-[14px]"
    >
      <h2 className="text-4xl font-bold text-left text-blue-900 sm:text-7xl">About me</h2>
      <div className="sm:flex">
        <div className="flex items-center">
          <Image src={profileImg} alt="profile image" className="w-[50vw] sm:w-[360px] " />
        </div>
        <div className="absolute left-0 top-[338px] sm:top-[800px] bg-sky-100 -z-10 w-[42vw] sm:w-[34%] h-[300px] sm:h-[550px]"></div>
        <div className="ml-[0px] sm:ml-16 mt-6 font-Binggrae font-bold">
          <ul className="mt-[10px] sm:mt-0 leading-5 sm:leading-8 text-[8px] sm:text-base">
            <li>이름 : 이제성 (만 28세)</li>
            <li>학력 : 계명대학교 컴퓨터공학전공 졸업 (3.94 / 4.5)</li>
            <li>자격증 : SQLD, 전자기기기능사, ICDL Start, ITQ OA Master</li>
            <li>
              수상 : <br />
              - SSAFY 공통 프로젝트 우수상(구미 2반 1등) <br />
              - SSAFY 관통 프로젝트 최우수상(최우수상) <br />
              - Health-related IoT Tracking Platform Challenge(Outstanding Award) <br />
              - 2019년 학부생 논문 및 캡스톤디자인 경진대회(우수상) <br />
              - 2019 ACM-ICPC 서울대회(Certificate of Achievement) <br />
              - 디지털로 만드는 스마트 하우스 공모전(창의상) <br />
              - 2019 대경권 프로그래밍 경진대회(장려상) <br />
            </li>
            <li>교육 : 삼성 청년 SW 아카데미 1학기 (2023.01.04 ~ 2023.05.26 (800시간))</li>
            <li>경험 : Qualcomm Institute 학생 인턴 (2020-09-15 ~ 2021-06-30)</li>
            <li>경력 : 인투시어 개발부 경력직 (2020.03.26 ~ 2020.08.14)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

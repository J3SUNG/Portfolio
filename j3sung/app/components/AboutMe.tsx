import profileImg from "/public/img/profile.jpg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex justify-center flex-col w-[1140px] m-auto mt-48">
      <h2 className="text-4xl text-blue-900 sm:text-7xl font-bold text-left">About me</h2>
      <div className="flex">
        <div className="flex items-center">
          <Image src={profileImg} alt="profile image" className="w-[360px] " />
        </div>
        <div className="absolute left-0 top-[800px] bg-sky-100 -z-10 w-[34%] h-[550px]"></div>
        <div className="ml-16 mt-6 font-Binggrae font-bold">
          <ul className="leading-8">
            <li>이름 : 이제성 (만 28세)</li>
            <li>학력 : 계명대학교 컴퓨터공학전공 졸업 (3.94 / 4.5)</li>
            <li>자격증 : ICDL Start, ITQ OA Master, 전자기기기능사, SQLD</li>
            <li>
              수상 : <br />
              - 2019 대경권 프로그래밍 경진대회(장려상) <br />
              - 디지털로 만드는 스마트 하우스 <br />
              - 공모전(창의상), 2019 ACM-ICPC 서울대회(Certificate of Achievement) <br />
              - 2019년 학부생 논문 및 캡스톤디자인 경진대회(우수상) <br />
              - Health-related IoT Tracking Platform Challenge(Outstanding Achievement Award) <br />
              - 1학기 프로젝트 최우수상(최우수상) <br />
            </li>
            <li>경력 : 인투시어 개발부 경력직 (2020.03.26 ~ 2020.08.14)</li>
            <li>경험 : Qualcomm Institute 학생 인턴 (2020-09-15 ~ 2021-06-30)</li>
            <li>교육 : 삼성 청년 SW 아카데미 1학기 (2023.01.04 ~ 2023.05.26 (800시간))</li>
          </ul>
          {/* <ul>
            <li>
              - 2019 대경권 프로그래밍 경진대회 / 장려상 / 경북, 한동, 안동, 대구가톨릭 대학교 /
              2019.05.11
            </li>
            <li>
              - 디지털로 만드는 스마트 하우스 공모전 / 창의상 / 대구 메이커 페스타 / 2019.06.02
            </li>
            <li>
              - 2019 ACM-ICPC 서울대회 / Certificate of Achievement / International Collegiate
              Programming Contest / 2019.11.09
            </li>
            <li>
              - 2019년 학부생 논문 및 캡스톤디자인 경진대회 / 우수상 / 한국방송 미디어 공학회 /
              2019.11.30
            </li>
            <li>- 2019학년도 SW해커톤 경진대회 / 우수상 / 계명대학교 / 2019.12.16</li>
            <li>
              - Health-related IoT Tracking Platform Challenge / Outstanding Achievement Award /
              Qualcomm Institute / 2020.02.24
            </li>
            <li>
              - 1학기 프로젝트 최우수상 / 최우수상 / 삼성전자주식회사 / 2023.01.04 ~ 2023.05.26
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}

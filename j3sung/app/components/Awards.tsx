export default function Awards() {
  const awards = [
    {
      name: "SSAFY 자율 프로젝트",
      award: "우수상(3등)",
      organize: "삼성전자주식회사",
      date: "2023.10.10 ~ 2023.11.24",
    },
    {
      name: "SSAFY 공통 프로젝트",
      award: "우수상(1등)",
      organize: "삼성전자주식회사",
      date: "2023.07.04 ~ 2023.08.18",
    },
    {
      name: "SSAFY 관통 프로젝트",
      award: "최우수상",
      organize: "삼성전자주식회사",
      date: "2023.05.08 ~ 2023.05.26",
    },
    {
      name: "Health-related IoT Tracking Platform",
      award: "Outstanding Achievement Award",
      organize: "Qualcomm Institute",
      date: "2020-01-27 ~ 2020-02-24",
    },
    {
      name: "학부생 논문 및 캡스톤디자인 경진대회",
      award: "우수상",
      organize: "한국방송 미디어 공학회",
      date: "2019.11.30",
    },
    {
      name: "ACM-ICPC 알고리즘 서울대회",
      award: "Certificate of Achievement",
      organize: "International Collegiate Programming",
      date: "2019.11.09",
    },
    {
      name: "디지털로 만드는 스마트 하우스 공모전",
      award: "창의상",
      organize: "대구 메이커 페스타",
      date: "2019.06.02",
    },
    {
      name: "대경권 프로그래밍 경진대회",
      award: "장려상",
      organize: "경북, 한동, 안동, 대구가톨릭 대학교",
      date: "2019.05.11",
    },
  ];
  return (
    <section id="awards" className="w-[1280px] m-auto pt-[40px]">
      <h2 className="font-bold text-blue-900 text-[72px]">Awards</h2>
      <div className="flex flex-wrap justify-start">
        {awards.map((award) => (
          <div className="w-[560px] h-[190px] flex mb-[20px] mr-[40px] rounded-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pl-[30px]">
            <div className="flex items-center">
              <ul className="leading-8">
                <li className="flex my-[10px]">
                  <p className="text-[24px] font-bold">🏆 {award.name}</p>
                </li>
                <li className="flex text-[22px]">
                  <p>수상내역 : {award.award}</p>
                </li>
                <li className="flex text-[20px]">
                  <p>주관 : {award.organize}</p>
                </li>
                <li className="flex text-[20px]">
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

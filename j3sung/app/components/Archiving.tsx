import Image from "next/image";
import github from "/public/img/archiving/github.png";
import tistory from "/public/img/archiving/tistory.png";
import Link from "next/link";

let items = [
  {
    img: github,
    name: "GITHUB",
    url: "https://github.com/J3SUNG",
    content: "소스 코드 저장소입니다.",
    li1: "과거 프로젝트, 프로그램, 앱의 소스 코드",
    li2: "혼자서 코딩 연습을 위해 작성한 소스 코드",
    li3: "학부 시절 수강한 수업들의 코딩 과제 소스 코드",
  },
  {
    img: tistory,
    name: "TISTORY",
    url: "https://j3sung.tistory.com/",
    content: "공부 및 지식 공유 목적의 블로그입니다.",
    li1: "공부한 것을 나의 것으로 만들기 위한 기록",
    li2: "개발자의 길을 걸으며 공부한 지식 정리",
    li3: "지식 공유를 통한 선한 영향력 행사",
  },
];

export default function Archiving() {
  return (
    <section
      id="archiving"
      className="flex justify-center flex-col w-[1140px] sm:m-auto h-auto mt-[40px] sm:pt-[120px] ml-[14px]"
    >
      <h2 className="text-4xl font-bold text-left text-blue-900 sm:text-7xl">Archiving</h2>
      <div className="flex justify-around mt-[40px] flex-wrap sm:flex-nowrap w-[93vw] sm:w-full">
        {items.map((item) => (
          <div className="relative w-full sm:w-auto sm:min-w-[480px] sm:min-h-[340px] object-fill rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col pb-[30px] sm:pb-[0px] pl-[30px] text-lg hover:animate-wiggle overflow-hidden mb-[20px] sm:mb-[0px]">
            <Link
              href={item.url}
              target="_blank"
              className="absolute left-0 w-full h-full bg-black opacity-0 rounded-3xl"
            >
              {item.url}
            </Link>
            <div className="flex items-center mt-[30px]">
              <Image
                src={item.img}
                alt="github"
                className="w-[32px] sm:w-[50px] h-[32px] sm:h-[50px]"
              />
              <h2 className="text-2xl sm:text-5xl font-bold ml-[8px]">{item.name}</h2>
            </div>
            <p className="text-[12px] sm:text-[18px] text-sky-500 mt-[10px] sm:mt-[20px]">
              {item.url}
            </p>
            <p className="text-[12px] sm:text-[18px] font-bold mt-[6px] sm:mt-[16px]">
              {item.content}
            </p>
            <ul className="text-[10px] sm:text-[18px] mt-[4px] sm:mt-[16px] list-disc pl-[20px] leading-5 sm:leading-10">
              <li>{item.li1}</li>
              <li>{item.li2}</li>
              <li>{item.li3}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

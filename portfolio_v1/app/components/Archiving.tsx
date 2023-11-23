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
      className="flex justify-center flex-col w-[1140px] m-auto h-auto mt-[40px] pt-[120px]"
    >
      <h2 className="font-bold text-left text-blue-900 text-7xl">Archiving</h2>
      <div className="flex justify-around mt-[40px] flex-nowrap w-full">
        {items.map((item) => (
          <div className="relative w-auto min-w-[480px] min-h-[340px] object-fill rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col pl-[30px] text-lg overflow-hidden">
            <Link
              href={item.url}
              target="_blank"
              className="absolute left-0 w-full h-full bg-black opacity-0 rounded-3xl"
            >
              {item.url}
            </Link>
            <div className="flex items-center mt-[30px]">
              <Image src={item.img} alt="github" className="w-[50px] h-[50px]" />
              <h2 className="text-5xl font-bold ml-[8px]">{item.name}</h2>
            </div>
            <p className="text-[18px] text-sky-500 mt-[20px]">{item.url}</p>
            <p className="text-[18px] font-bold mt-[16px]">{item.content}</p>
            <ul className="text-[18px] mt-[16px] pl-[20px] leading-10">
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

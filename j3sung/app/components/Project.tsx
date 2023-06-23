import nadri from "@/public/img/project/nadri.png";
import Image from "next/image";

export default function Project() {
  let projects = [
    {
      name: "Nadri",
      img: nadri,
      description: "지역별 관광 데이터를 활용한 여행 정보 사이트",
      content: "여행 정보, 여행 계획, 커뮤니티, 통계 등의 기능을 제공하는 여행 정보 사이트입니다.",
    },
  ];

  return (
    <>
      <section className="flex justify-center flex-col w-[1140px] m-auto mt-48">
        <h2 className="text-4xl text-blue-900 sm:text-7xl font-bold text-left">Project</h2>
        <div className="mt-10 flex item-center justify-center">
          {projects.map((item) => (
            <div>
              <Image src={item.img} alt={item.name} className="w-[370px] h-[200px]" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

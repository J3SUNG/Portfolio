import html from "/public/img/skill/html.png";
import css from "/public/img/skill/css.png";
import javascript from "/public/img/skill/javascript.png";
import typescript from "/public/img/skill/typescript.png";
import react from "/public/img/skill/react.png";
import vue from "/public/img/skill/vue.png";
import cpp from "/public/img/skill/cpp.png";
import bootstrap from "/public/img/skill/bootstrap.png";
import git from "/public/img/skill/git.png";
import java from "/public/img/skill/java.png";
import mysql from "/public/img/skill/mysql.png";
import nextjs from "/public/img/skill/nextjs.png";
import oracle from "/public/img/skill/oracle.png";
import php from "/public/img/skill/php.png";
import python from "/public/img/skill/python.png";
import scss from "/public/img/skill/scss.png";
import spring from "/public/img/skill/spring.png";
import tailwind from "/public/img/skill/tailwind.png";
import jira from "/public/img/skill/jira.png";
import nodejs from "/public/img/skill/nodejs.png";
import Image, { StaticImageData } from "next/image";
import Chart from "./Chart";

let skillFront: { img: StaticImageData; name: string; ability: number; type: number }[] = [
  { img: react, name: "React", ability: 3, type: 1 },
  { img: javascript, name: "Javascript", ability: 3, type: 2 },
  { img: tailwind, name: "Tailwind", ability: 3, type: 3 },
  { img: html, name: "HTML", ability: 3, type: 2 },
  { img: css, name: "CSS", ability: 3, type: 3 },
  { img: typescript, name: "Typescript", ability: 2, type: 2 },
  { img: vue, name: "Vue", ability: 2, type: 1 },
  { img: nextjs, name: "Nextjs", ability: 1, type: 1 },
];
let skillBack: { img: StaticImageData; name: string; ability: number; type: number }[] = [
  { img: mysql, name: "MySQL", ability: 3, type: 5 },
  { img: spring, name: "Spring", ability: 2, type: 4 },
  { img: nodejs, name: "Nodejs", ability: 1, type: 4 },
  { img: oracle, name: "Oracle", ability: 1, type: 5 },
];
let skillEtc: { img: StaticImageData; name: string; ability: number; type: number }[] = [
  { img: git, name: "Git", ability: 3, type: 7 },
  { img: jira, name: "Jira", ability: 2, type: 7 },
  { img: java, name: "java", ability: 2, type: 6 },
  { img: cpp, name: "C++", ability: 2, type: 6 },
];

export default function Skills() {
  return (
    <>
      <section
        id="skill"
        className="flex justify-center flex-col w-[1140px] sm:m-auto h-auto sm:pt-[120px] ml-[14px]"
      >
        <h2 className="text-4xl font-bold text-left text-blue-900 sm:text-7xl">Skills</h2>
        <div>
          <div className="flex items-end justify-between">
            <h3 className="text-[30px] font-bold mt-[20px] ml-[10px] ">FrontEnd</h3>
            <div className="text-[16px] font-bold mt-[20px] mr-[20px]">
              <div className="flex">
                <p className="text-gray-900">3점: 다수의 프로젝트 경험, </p>
                <p className="text-gray-900">성과 多</p>
              </div>
              <div className="flex">
                <p className="text-gray-700">2점: 한 개 이상의 프로젝트 경험, </p>
                <p className="text-gray-700">성과 有</p>
              </div>
              <div className="flex">
                <p className="text-gray-500">1점: 해당 기술을 사용해 본 경험, </p>
                <p className="text-gray-500">성과 無</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[100vw] sm:w-auto">
            {skillFront.map((item) => (
              <SkillCard item={item} key={item.name} />
            ))}
          </div>
        </div>
        <div className="flex mt-[20px]">
          <div>
            <h3 className="text-[30px] font-bold mt-[20px] ml-[10px] r">BackEnd</h3>
            <div className="flex flex-wrap w-[100vw] sm:w-auto">
              {skillBack.map((item) => (
                <SkillCard item={item} key={item.name} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[30px] font-bold mt-[20px] ml-[10px] ">Language, Tool</h3>
            <div className="flex flex-wrap w-[100vw] sm:w-auto">
              {skillEtc.map((item) => (
                <SkillCard item={item} key={item.name} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface skillProps {
  item: {
    img: StaticImageData;
    name: string;
    ability: number;
    type: number;
  };
}

const SkillCard = (props: skillProps) => {
  let { item } = props;
  return (
    <div className="hover:scale-110 duration-500 hover:z-0 z-0 mb-[16px] sm:mb-0">
      <div className="relative z-20">
        <Image
          src={item.img}
          className="absolute w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] object-fill left-1/2 transform -translate-x-1/2 top-[30px]"
          alt={item.name}
        />
        <div>
          <Chart ability={item.ability} type={item.type} />
          <p className="w-full text-center font-bold text-[10px] sm:text-[16px]">
            {item.name}{" "}
            <span
              className={`text-[10px] sm:text-[18px] ${
                item.ability === 3
                  ? "text-orange-500"
                  : item.ability === 2
                  ? "text-orange-400"
                  : "text-orange-300"
              }`}
            >
              ({item.ability}/3)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

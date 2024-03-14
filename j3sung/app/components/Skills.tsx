import html from "/public/img/skill/html.png";
import css from "/public/img/skill/css.png";
import javascript from "/public/img/skill/javascript.png";
import typescript from "/public/img/skill/typescript.png";
import react from "/public/img/skill/react.png";
import vue from "/public/img/skill/vue.png";
import cpp from "/public/img/skill/cpp.png";
import git from "/public/img/skill/git.png";
import java from "/public/img/skill/java.png";
import mysql from "/public/img/skill/mysql.png";
import next from "/public/img/skill/nextjs.png";
import oracle from "/public/img/skill/oracle.png";
import spring from "/public/img/skill/spring.png";
import tailwind from "/public/img/skill/tailwind.png";
import jira from "/public/img/skill/jira.png";
import nodejs from "/public/img/skill/nodejs.png";
import Image, { StaticImageData } from "next/image";
import Chart from "./Chart";

const skillFront: { img: StaticImageData; name: string; ability: number; type: number }[] = [
  { img: react, name: "React", ability: 3, type: 1 },
  { img: javascript, name: "Javascript", ability: 3, type: 2 },
  { img: html, name: "HTML", ability: 3, type: 2 },
  { img: css, name: "CSS", ability: 3, type: 3 },
  { img: tailwind, name: "Tailwind", ability: 3, type: 3 },
  { img: typescript, name: "Typescript", ability: 2, type: 2 },
  { img: vue, name: "Vue", ability: 1, type: 1 },
  { img: next, name: "Next", ability: 1, type: 1 },
];
const skillBack: { img: StaticImageData; name: string; ability: number; type: number }[] = [
  { img: mysql, name: "MySQL", ability: 3, type: 5 },
  { img: spring, name: "Spring", ability: 2, type: 4 },
  { img: nodejs, name: "Nodejs", ability: 1, type: 4 },
  { img: oracle, name: "Oracle", ability: 1, type: 5 },
];
const skillEtc: { img: StaticImageData; name: string; ability: number; type: number }[] = [
  { img: git, name: "Git", ability: 3, type: 7 },
  { img: jira, name: "Jira", ability: 2, type: 7 },
  { img: java, name: "java", ability: 2, type: 6 },
  { img: cpp, name: "C++", ability: 1, type: 6 },
];

export default function Skills() {
  return (
    <>
      <section id="skill" className="w-[1280px] m-auto pt-[40px]">
        <h2 className="font-bold text-blue-900 text-[72px]">Skills</h2>
        <h3 className="text-[28px] font-bold ml-[10px] ">FrontEnd</h3>
        <div className="flex flex-wrap w-auto">
          {skillFront.map((item) => (
            <SkillCard item={item} key={item.name} />
          ))}
        </div>
        <div className="flex mt-[20px]">
          <div>
            <h3 className="text-[28px] font-bold ml-[10px]">BackEnd</h3>
            <div className="flex flex-wrap w-auto">
              {skillBack.map((item) => (
                <SkillCard item={item} key={item.name} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[28px] font-bold ml-[10px]">Language, Tool</h3>
            <div className="flex flex-wrap w-auto">
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
    <div className="duration-300 hover:scale-110">
      <div className="relative">
        <Image
          src={item.img}
          className="absolute w-[80px] h-[80px] object-fill left-1/2 transform -translate-x-1/2 top-[30px]"
          alt={item.name}
        />
        <div>
          <Chart ability={item.ability} type={item.type} />
          <p className="w-full text-center font-bold text-[20px]">
            {item.name}{" "}
            <span
              className={`text-[18px] ${
                item.ability === 3
                  ? "text-orange-500"
                  : item.ability === 2
                  ? "text-orange-400"
                  : "text-orange-300"
              }`}
            >
              ({item.ability}/5)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

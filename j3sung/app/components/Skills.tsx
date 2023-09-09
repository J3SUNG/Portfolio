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

let skill: { img: StaticImageData; name: string; ability: number; type: number }[] = [
  { img: react, name: "React", ability: 7, type: 1 },
  { img: vue, name: "Vue", ability: 5, type: 1 },
  { img: nextjs, name: "Nextjs", ability: 3, type: 1 },
  { img: javascript, name: "Javascript", ability: 7, type: 2 },
  { img: typescript, name: "Typescript", ability: 5, type: 2 },
  { img: html, name: "HTML", ability: 7, type: 2 },
  { img: tailwind, name: "Tailwind", ability: 7, type: 3 },
  { img: css, name: "CSS", ability: 7, type: 3 },
  { img: scss, name: "SCSS", ability: 4, type: 3 },
  { img: bootstrap, name: "Bootstrap", ability: 3, type: 3 },
  { img: spring, name: "Spring", ability: 4, type: 5 },
  { img: nodejs, name: "Nodejs", ability: 3, type: 5 },
  { img: java, name: "java", ability: 5, type: 4 },
  { img: cpp, name: "C++", ability: 5, type: 4 },
  { img: mysql, name: "MySQL", ability: 6, type: 6 },
  { img: oracle, name: "Oracle", ability: 5, type: 6 },
  { img: git, name: "Git", ability: 6, type: 7 },
  { img: jira, name: "Jira", ability: 4, type: 7 },
];

export default function Skills() {
  return (
    <>
      <section
        id="skill"
        className="flex justify-center flex-col w-[1140px] sm:m-auto h-auto mt-[40px] sm:mt-[112px] sm:pt-[80px] ml-[14px]"
      >
        <h2 className="text-4xl font-bold text-left text-blue-900 sm:text-7xl">Skills</h2>
        <div className="flex flex-wrap w-[100vw] sm:w-auto">
          {skill.map((item) => (
            <SkillCard item={item} key={item.name} />
          ))}
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
      <div className="relative w-auto -z-20">
        <Image
          src={item.img}
          className="absolute w-12 h-12 sm:w-32 sm:h-32 object-fill m-[12px] sm:m-[32px] p-[10px] sm:p-[22px] ml-[11px] sm:ml-[32px] mt-[1px] sm:mt-[10px]"
          alt={item.name}
        />
        <Chart ability={item.ability} type={item.type} />
        <p className="absolute w-full text-center font-bold text-[10px] sm:text-[16px] top-[50px] sm:top-[154px]">
          {item.name}{" "}
          <span className="text-[10px] sm:text-[16px] text-orange-500">({item.ability}/10)</span>
        </p>
      </div>
    </div>
  );
};

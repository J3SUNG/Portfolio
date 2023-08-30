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
import Image, { StaticImageData } from "next/image";
import Chart from "./Chart";

let skill: { img: StaticImageData; name: string; ability: number }[] = [
  { img: html, name: "HTML", ability: 6 },
  { img: css, name: "CSS", ability: 6 },
  { img: javascript, name: "Javascript", ability: 6 },
  { img: react, name: "React", ability: 5 },
  { img: vue, name: "Vue", ability: 4 },
  { img: typescript, name: "Typescript", ability: 3 },
  { img: nextjs, name: "Nextjs", ability: 4 },
  { img: tailwind, name: "Tailwind", ability: 4 },
  { img: scss, name: "SCSS", ability: 3 },
  { img: bootstrap, name: "Bootstrap", ability: 3 },
  { img: java, name: "java", ability: 5 },
  { img: cpp, name: "C++", ability: 5 },
  { img: python, name: "Python", ability: 2 },
  { img: spring, name: "Spring", ability: 3 },
  { img: php, name: "PHP", ability: 2 },
  { img: mysql, name: "MySQL", ability: 6 },
  { img: oracle, name: "Oracle", ability: 5 },
  { img: git, name: "Git", ability: 6 },
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
  };
}

const SkillCard = (props: skillProps) => {
  // let x = [
  //   "w-[0%]",
  //   "w-[10%]",
  //   "w-[20%]",
  //   "w-[30%]",
  //   "w-[40%]",
  //   "w-[50%]",
  //   "w-[60%]",
  //   "w-[70%]",
  //   "w-[80%]",
  //   "w-[90%]",
  // ];
  let { item } = props;
  return (
    <div className="hover:scale-110 duration-500 hover:z-0 z-0 mb-[16px] sm:mb-0">
      <div className="relative w-auto -z-20">
        <Image
          src={item.img}
          className="absolute w-12 h-12 sm:w-32 sm:h-32 object-fill m-[12px] sm:m-[32px] p-[10px] sm:p-[22px] ml-[11px] sm:ml-[32px] mt-[1px] sm:mt-[10px]"
          alt={item.name}
        />
        <Chart ability={item.ability} />
        <p className="absolute w-full text-center font-bold text-[10px] sm:text-xl top-[50px] sm:top-[154px]">
          {item.name}{" "}
          <span className="text-[10px] sm:text-sm text-orange-500">({item.ability}/10)</span>
        </p>
        {/* <div className="flex flex-col content-center justify-center w-40 h-40 mx-4 mb-4">
        <p className="font-bold text-center">{item.name}</p>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-[20px]">
          <div
            className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full ${
              x[item.ability]
            }`}
          >
            {item.ability} / 10
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

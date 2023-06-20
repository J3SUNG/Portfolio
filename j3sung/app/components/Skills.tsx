import html from "@/public/img/skill/html.png";
import css from "@/public/img/skill/css.png";
import javascript from "@/public/img/skill/javascript.png";
import typescript from "@/public/img/skill/typescript.png";
import react from "@/public/img/skill/react.png";
import vue from "@/public/img/skill/vue.png";
import cpp from "@/public/img/skill/cpp.png";
import csharp from "@/public/img/skill/c-sharp.png";
import bootstrap from "@/public/img/skill/bootstrap.png";
import github from "@/public/img/skill/github.png";
import git from "@/public/img/skill/git.png";
import java from "@/public/img/skill/java.png";
import mysql from "@/public/img/skill/mysql.png";
import nextjs from "@/public/img/skill/nextjs.png";
import oracle from "@/public/img/skill/oracle.png";
import php from "@/public/img/skill/php.png";
import python from "@/public/img/skill/python.png";
import scss from "@/public/img/skill/scss.png";
import spring from "@/public/img/skill/spring.png";
import tailwind from "@/public/img/skill/tailwind.png";
import Image, { StaticImageData } from "next/image";

let skill: { img: StaticImageData; name: string; ability: number }[] = [
  { img: html, name: "HTML", ability: 8 },
  { img: css, name: "CSS", ability: 8 },
  { img: javascript, name: "Javascript", ability: 8 },
  { img: react, name: "React", ability: 7 },
  { img: vue, name: "Vue", ability: 6 },
  { img: typescript, name: "Typescript", ability: 5 },
  { img: nextjs, name: "Nextjs", ability: 6 },
  { img: tailwind, name: "Tailwind", ability: 6 },
  { img: scss, name: "SCSS", ability: 5 },
  { img: bootstrap, name: "Bootstrap", ability: 5 },
  { img: java, name: "java", ability: 7 },
  { img: cpp, name: "C++", ability: 7 },
  { img: csharp, name: "C#", ability: 5 },
  { img: python, name: "Python", ability: 3 },
  { img: spring, name: "Spring", ability: 5 },
  { img: php, name: "PHP", ability: 3 },
  { img: mysql, name: "MySQL", ability: 8 },
  { img: oracle, name: "Oracle", ability: 7 },
  { img: git, name: "Git", ability: 8 },
  { img: github, name: "Github", ability: 8 },
];

export default function Skills() {
  return (
    <>
      <section className="flex justify-center flex-col w-[1140px] m-auto mt-48">
        <h2 className="text-4xl text-blue-900 sm:text-7xl font-bold text-left">Skills</h2>
        <div className="flex flex-wrap mt-10">
          {skill.map((item) => (
            <SkillCard item={item} key={item.name} />
          ))}
        </div>
      </section>
    </>
  );
}

type skillProps = {
  img: StaticImageData;
  name: string;
  ability: number;
};

const SkillCard = ({ item }: skillProps) => {
  let x = [
    "w-[0%]",
    "w-[10%]",
    "w-[20%]",
    "w-[30%]",
    "w-[40%]",
    "w-[50%]",
    "w-[60%]",
    "w-[70%]",
    "w-[80%]",
    "w-[90%]",
  ];
  return (
    <div className="">
      <Image src={item.img} className="w-40 h-40 object-fill" alt={item.name} />
      <div className="flex justify-center flex-col content-center w-40 h-40 mx-4 mb-4">
        <p className="text-center font-bold">{item.name}</p>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-[20px]">
          <div
            className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full ${
              x[item.ability]
            }`}
          >
            {item.ability} / 10
          </div>
        </div>
      </div>
    </div>
  );
};

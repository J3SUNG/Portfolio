import profileImg1 from "/public/img/profile1.jpg";
import profileImg2 from "/public/img/profile2.jpg";
import Image from "next/image";

export default function AboutMe() {
  const aboutMeList = [
    {
      content: "- 안녕하세요! 주니어 프론트엔드 개발자 이제성입니다.",
    },
    {
      content: "- '왜'라는 질문을 하고 '어떻게'라는 방법을 찾습니다.",
    },
    {
      content: "- Clean Code와 테스트, 성능 개선에 대한 고민을 생활화 합니다.",
    },
    {
      content: "- 학습하고 고민한 내용들을 Github에 남기고, 기술블로그를 운영합니다.",
    },
    {
      content: "- 새로운 것을 배우고 적용하는 것을 즐깁니다.",
    },
    {
      content: "- 프로젝트를 진행하면 주로 팀장을 맡으며, 책임감을 가지고 임합니다.",
    },
    {
      content: "- 대화하는 것을 좋아하며, 협업에 관심이 많습니다.",
    },
  ];
  return (
    <section
      id="about-me"
      className="flex justify-center flex-col w-[1140px] m-auto h-auto pt-[120px]"
    >
      <h2 className="font-bold text-left text-blue-900 text-7xl">About me</h2>
      <div className="flex">
        <div className="flex">
          <Image src={profileImg2} alt="profile image" className="absolute w-auto h-[480px]" />
          <Image
            src={profileImg1}
            alt="profile image"
            className="absolute w-auto h-[480px] animate-fade-in hover:opacity-0 hover:animate-fade-out"
          />
        </div>
        <div className="absolute left-0 top-[780px] bg-sky-100 -z-10 w-[34%] h-[540px]"></div>
        <div className="ml-[420px] mt-8 font-Binggrae">
          <h3 className="text-[36px] font-bold">고민하는 프론트엔드 개발자, 이제성입니다.</h3>
          <ul className="mt-[20px] leading-[50px] text-[22px]">
            {aboutMeList.map((item) => (
              <li>{item.content}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

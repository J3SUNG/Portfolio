import profileImg from "/public/img/profile.png";
import Image from "next/image";

export default function AboutMe() {
  const aboutMeList = [
    "- '왜'라는 질문을 하고 '어떻게'라는 방법을 찾습니다.",
    "- Clean Code와 성능 개선에 대해서 고민하고 실천하기 위해 노력합니다.",
    "- 학습하고 고민한 내용들을 Github에 남기고, 기술블로그를 통해 공유합니다.",
    "- 새로운 것에 대한 호기심이 많고, 프로젝트에 적용하기 위해 노력합니다.",
    "- 주로 팀장을 맡아 프로젝트를 진행하며, 책임감을 가지고 임합니다.",
    "- 협업에 관심이 많으며, 상대방의 말을 경청하고 의견 내는 것을 좋아합니다.",
  ];
  return (
    <section
      id="about-me"
      className="flex justify-center flex-col w-[1140px] m-auto h-auto pt-[120px]"
    >
      <h2 className="font-bold text-left text-blue-900 text-7xl">About me</h2>
      <div className="flex pt-[20px]">
        <div className="flex w-[320px] h-[400px] overflow-hidden">
          <Image src={profileImg} alt="profile image" className="object-cover w-full h-full" />
        </div>
        <div className="ml-[20px] mt-[20px] font-Binggrae leading-[44px]">
          <h3 className="text-[28px] font-bold">고민하는 프론트엔드 개발자, 이제성입니다.</h3>
          <ul className="mt-[0px] text-[18px]">
            {aboutMeList.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

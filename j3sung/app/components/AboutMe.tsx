import profileImg from "/public/img/profile.jpg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="flex justify-center flex-col w-[1140px] sm:m-auto h-auto mt-[20px] sm:pt-[120px] ml-[14px]"
    >
      <h2 className="text-4xl font-bold text-left text-blue-900 sm:text-7xl">About me</h2>
      <div className="sm:flex">
        <div className="flex">
          <Image src={profileImg} alt="profile image" className="w-[50vw] sm:w-auto h-[480px]" />
        </div>
        <div className="absolute left-0 top-[338px] sm:top-[780px] bg-sky-100 -z-10 w-[42vw] sm:w-[34%] h-[300px] sm:h-[540px]"></div>
        <div className="ml-[0px] sm:ml-10 mt-8 font-Binggrae">
          <h2 className="text-[36px] font-bold">고민하는 프론트엔드 개발자, 이제성입니다.</h2>
          <ul className="mt-[10px] sm:mt-[20px] leading-5 sm:leading-[50px] text-[8px] sm:text-[22px]">
            <li>- 안녕하세요! 주니어 프론트엔드 개발자 이제성입니다.</li>
            <li>- "왜"라는 질문을 하고 "어떻게" 라는 방법을 찾습니다.</li>
            <li>- Clean Code와 테스트, 성능 개선에 대한 고민을 생활화 합니다.</li>
            <li>- 학습하고 고민한 내용들을 Github에 남기고, 기술블로그를 운영합니다. </li>
            <li>- 새로운 것을 배우고 적용하는 것을 즐깁니다.</li>
            <li>- 프로젝트를 진행하면 주로 팀장을 맡으며, 책임감을 가지고 임합니다.</li>
            <li>- 대화하는 것을 좋아하며, 협업에 관심이 많습니다.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

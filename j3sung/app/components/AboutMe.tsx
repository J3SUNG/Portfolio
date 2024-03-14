import profileImg from "/public/img/profile.png";
import github from "/public/img/logo/github.png";
import tistory from "/public/img/logo/tistoryColor.png";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about-me" className="w-[1280px] m-auto pt-[40px]">
      <h2 className="font-bold text-left text-blue-900 text-[72px]">About me</h2>
      <div className="flex">
        <div className="w-[320px] h-[400px] overflow-hidden">
          <Image src={profileImg} alt="profile image" className="object-cover w-full h-full" />
        </div>
        <div className="ml-[40px] mt-[10px] leading-[44px]">
          <h3 className="text-[36px] font-bold">고민하는 프론트엔드 개발자, 이제성입니다.</h3>
          <ul className="ml-[10px] mt-[12px] text-[22px]">
            <li>
              <p>
                • <b>'왜'</b>라는 질문을 하고 <b>'어떻게'</b>라는 방법을 찾습니다.
              </p>
            </li>
            <li>
              <p>
                • <b>Clean Code와 성능 개선</b>에 대해서 고민하고 실천하기 위해 노력합니다.
              </p>
            </li>
            <li>
              <p>
                • 학습하고 고민한 내용들을 Github에 <b>기록</b>하고, 기술블로그를 통해 <b>공유</b>
                합니다.
              </p>
            </li>
            <li>
              <p>
                • <b>피드백</b>에 대해서 긍정적이며, 적극적으로 <b>개선</b>하려고 노력합니다.
              </p>
            </li>
            <li>
              <p>
                • 주로 팀장을 맡아 프로젝트를 진행하며, <b>책임감</b>을 가지고 임합니다.
              </p>
            </li>
            <li>
              <p>
                <Image
                  alt="tistory logo"
                  src={tistory}
                  className="w-[32px] h-[32px] inline-block ml-[-6px] mr-[-4px] mt-[-2px]"
                />{" "}
                <b>blog</b> :{" "}
                <a target="_blank" href="https://j3sung.tistory.com/">
                  https://j3sung.tistory.com/
                </a>
              </p>
            </li>
            <li>
              <p>
                <Image alt="github logo" src={github} className="w-[22px] h-[22px] inline-block" />{" "}
                <b>github</b> :{" "}
                <a target="_blank" href="https://github.com/J3SUNG">
                  https://github.com/J3SUNG
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

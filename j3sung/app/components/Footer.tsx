import Image from "next/image";
import githubImg from "@/public/img/logo/github.png";
import tistoryImg from "@/public/img/logo/tistory.png";
import kakaoImg from "@/public/img/logo/kakao.png";

export default function Footer() {
  return (
    <div className="absolute bootom-0 w-full bg-zinc-800 h-44 mt-20 pt-10">
      <div className="flex justify-center my-2">
        <a href="https://github.com/J3SUNG" target="_blank">
          <Image
            src={githubImg}
            alt="github image"
            width={48}
            height={48}
            className="border-2 border-white rounded-full mx-4 bg-white"
          />
        </a>
        <a href="https://j3sung.tistory.com/" target="_blank">
          <Image
            src={tistoryImg}
            alt="tistory image"
            width={48}
            height={48}
            className="border-2 border-white rounded-full mx-4 bg-black"
          />
        </a>
        <a href="https://open.kakao.com/o/sRr7WMqf" target="_blank">
          <Image
            src={kakaoImg}
            alt="tistory image"
            width={48}
            height={48}
            className="border-2 border-white rounded-full mx-4 bg-white"
          />
        </a>
      </div>
      <p className="text-center text-md text-white pt-2">
        © 2023. JeSeong Lee. All rights reserved.
      </p>
    </div>
  );
}

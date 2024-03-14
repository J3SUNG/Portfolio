import Image from "next/image";
import githubImg from "/public/img/logo/github.png";
import tistoryImg from "/public/img/logo/tistory.png";
import kakaoImg from "/public/img/logo/kakao.png";
import email from "/public/img/logo/email.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="absolute w-full pt-10 mt-10 bg-zinc-800 h-44">
      <div className="flex justify-center my-2">
        <Link href="https://github.com/J3SUNG" target="_blank">
          <Image
            src={githubImg}
            alt="github image"
            width={48}
            height={48}
            className="mx-2 bg-white border-2 border-white rounded-full"
          />
        </Link>
        <Link href="https://j3sung.tistory.com/" target="_blank">
          <Image
            src={tistoryImg}
            alt="tistory image"
            width={48}
            height={48}
            className="mx-2 bg-white border-2 border-white rounded-full"
          />
        </Link>
        <Link href="https://open.kakao.com/o/sRr7WMqf" target="_blank">
          <Image
            src={kakaoImg}
            alt="tistory image"
            width={48}
            height={48}
            className="mx-2 bg-white border-2 border-white rounded-full"
          />
        </Link>
        <Link href="mailto:wptjd6141@naver.com" target="_blank">
          <Image
            src={email}
            alt="tistory image"
            width={48}
            height={48}
            className="mx-2 bg-white border-2 border-white rounded-full"
          />
        </Link>
      </div>
      <p className="pt-2 text-center text-white text-md">
        © 2023. JeSeong Lee. All rights reserved.
      </p>
    </div>
  );
}

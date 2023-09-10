import headerImg from "/public/img/sky.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 h-[300px] sm:h-[620px] w-full z-40">
      <Image
        src={headerImg}
        alt="header img"
        className="absolute top-0 z-20 object-cover object-right w-full h-full"
        width={500}
        height={500}
      />
      <div className="flex justify-center px-8">
        <h2 className="absolute top-[100px] sm:top-[240px] font-bold tracking-tight text-white z-30 text-4xl sm:text-8xl">
          WEB
          <br />
          DEVELOPER
          <p className="z-30 inline ml-4 text-white animate-blink">_</p>
        </h2>
        <p className="absolute top-[26px] sm:top-[180px] ml-[60px] sm:ml-[160px] mt-20 text-2xl sm:text-6xl italic font-DancingScript text-yellow-300 z-30">
          Jeseong Lee
        </p>
      </div>
    </div>
  );
}

import headerImg from "/public/img/sky.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative overflow-hidden h-[520px] w-full">
      <Image
        src={headerImg}
        alt="header background image"
        className="absolute top-0 z-20 object-cover object-right w-full h-full"
        width={500}
        height={500}
      />
      <div className="flex justify-center px-8">
        <h2 className="absolute top-[140px] font-bold text-white z-30 text-8xl">
          WEB
          <br />
          DEVELOPER
          <p className="z-30 inline ml-4 text-white animate-blink">_</p>
        </h2>
        <p className="absolute top-[80px] ml-[160px] mt-20 text-6xl italic font-DancingScript text-yellow-300 z-30">
          Jeseong Lee
        </p>
      </div>
    </div>
  );
}

import headerImg from "/public/img/sky.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 h-[576px] sm:py-48">
      <Image
        src={headerImg}
        alt=""
        className="absolute inset-0 h-full z-80 w-full object-cover object-right md:object-center"
      />
      <div className="lg:px-8 flex justify-center">
        <h2 className="absolute top-[190px] text-4xl font-bold tracking-tight text-white sm:text-8xl">
          WEB
          <br />
          DEVELOPER
          <p className="animate-blink inline ml-4">_</p>
        </h2>
        <p className="absolute top-[130px] mt-20 ml-[160px] text-6xl italic font-DancingScript text-yellow-300">
          Jeseong Lee
        </p>
      </div>
    </div>
  );
}

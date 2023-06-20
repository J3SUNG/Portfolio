import headerImg from "/public/img/sky.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-48">
      <Image
        src={headerImg}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center">
        <div className="mx-auto max-w-2xl ">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-8xl">
            WEB
            <br />
            DEVELOPER
            <p className="animate-blink inline ml-4">_</p>
          </h2>
          <p className="absolute top-[130px] mt-20 ml-64 text-6xl italic font-DancingScript text-yellow-300">
            Jeseong Lee
          </p>
        </div>
      </div>
    </div>
  );
}

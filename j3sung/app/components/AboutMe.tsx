import profileImg from "/public/img/profile.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="py-48 sm:py-96">
      <h2 className="mr-28 text-4xl font-bold tracking-tight text-white sm:text-8xl bg-black w-full">
        About me
      </h2>
      <Image
        src={profileImg}
        alt=""
        className="inset-0 -z-10 h-80 w-auto object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center">
        <div className="mx-auto max-w-2xl">
          <p className="absolute top-[130px] mt-20 ml-64 text-6xl italic font-DancingScript text-yellow-300">
            Jeseong Lee
          </p>
        </div>
      </div>
    </div>
  );
}

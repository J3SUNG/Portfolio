import profileImg from "/public/img/profile.jpg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex justify-center flex-col w-[1440px] m-auto mt-48">
      <h2 className="text-4xl text-blue-900 sm:text-7xl font-bold text-left">About me</h2>
      <div className="flex items-center">
        <Image src={profileImg} alt="profile image" className="w-96" />
      </div>
    </section>
  );
}

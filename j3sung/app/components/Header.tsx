import headerImg from "/public/img/wideProfile.jpg";
import Image from "next/image";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src={headerImg}
        alt="header background Image"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        width={1440}
        height={810}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
            WEB DEVELOPER
          </h2>
          <p className="text-yellow-400 font-bold mt-4 mr-20 text-lg leading-8 text-white text-right sm:text-4xl">
            Jeseong Lee
          </p>
        </div>
      </div>
    </div>
  );
}

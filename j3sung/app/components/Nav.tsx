"use client";
const navigation = [
  { name: "Home", href: "#" },
  { name: "About me", href: "#about-me" },
  { name: "Archiving", href: "#archiving" },
  { name: "Skills", href: "#skill" },
  { name: "Awards", href: "#awards" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#project" },
];

export default function Nav() {
  return (
    <nav className="fixed z-50 w-full bg-white shadow-xl">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex h-[76px] items-center justify-between">
          <div className="flex items-center w-full">
            <div className="w-full block">
              <div className="flex items-center justify-center w-full space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      "text-blue-900 hover:bg-blue-400 hover:text-white rounded-md px-3 py-2 text-xl font-bold"
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

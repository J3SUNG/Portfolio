"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About me", href: "#about-me" },
  { name: "Skills", href: "#skill" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#project" },
  { name: "Archiving", href: "#archiving" },
];

export default function Nav() {
  return (
    <>
      <div className="fixed z-50 w-full">
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-[76px] items-center justify-between">
                  <div className="flex items-center w-full">
                    <div className="hidden sm:block w-full">
                      <div className="flex items-center justify-center space-x-8 w-full">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={
                              "text-white hover:bg-blue-400 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                            }
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 opacity-80">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="xl:hidden flex justify-end">
                <div className="space-y-1 px-2 pb-3 pt-2 xl:px-3 flex flex-wrap w-[40vw]">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={
                        "w-[200px] text-yellow-400 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium text-right"
                      }
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

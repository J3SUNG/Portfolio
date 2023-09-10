"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About me", href: "#about-me" },
  { name: "Skills", href: "#skill" },
  { name: "Awards", href: "#awards" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#project" },
  { name: "Archiving", href: "#archiving" },
];

export default function Nav() {
  return (
    <>
      <div className="fixed z-50 w-full sm:bg-white sm:shadow-xl">
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="px-4 mx-auto max-w-7xl">
                <div className="flex h-[76px] items-center justify-between">
                  <div className="flex items-center w-full">
                    <div className="hidden w-full sm:block">
                      <div className="flex items-center justify-center w-full space-x-8">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={
                              "sm:text-blue-900 text-white hover:bg-blue-400 hover:text-white rounded-md px-3 py-2 text-xl font-bold"
                            }
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex -mr-2 sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 opacity-80">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="flex justify-end xl:hidden">
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

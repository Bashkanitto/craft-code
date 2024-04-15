import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="pb-20 mb-20">
      <nav className="fixed z-20 w-full bg-black/80 backdrop-blur-sm">
        <div className="px-6 m-auto max-w-6xl 2xl:px-0">
          <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
            <div className="w-full items-center flex justify-between lg:w-auto">
              <a href="#" aria-label="tailus logo">
                <Image
                  width={30}
                  height={30}
                  src="/images/logo-circular.png"
                  alt="craftcode logo"
                />
              </a>
            </div>
            <div className="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
              <div className="mt-6 text-gray-600 md:-ml-4 lg:pr-4 lg:mt-0">
                <ul className="flex text-white lg:text-sm lg:flex lg:space-y-0">
                  <li>
                    <a
                      href="#about"
                      className="md:px-4 duration-75 hover:border-b"
                    >
                      О Нас
                    </a>
                  </li>
                  <li>
                    <a href="#stack" className=" md:px-4 hover:border-b">
                      Направления
                    </a>
                  </li>
                  <li>
                    <a href="#comunity" className="md:px-4 hover:border-b">
                      Команда
                    </a>
                  </li>
                  <li>
                    <a href="#courses" className="md:px-4 hover:border-b">
                      Курсы
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="md:px-4 hover:border-b">
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 ">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">
              <Image
                src="/images/brand/logo-cpfl-energia.png"
                alt="CPFL"
                width={99}
                height={61}
              />
            </div>

            <div className="flex md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>

          <div
            className={
              "flex-col pl-2 md:items-center -mx-4 md:flex md:flex-row" +
              (isOpen ? " flex" : " hidden")
            }
          >
            <Link href="/">
              <a className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">
                CPFL
              </a>
            </Link>
            <Link href="/">
              <a className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">
                Serviços Essenciais
              </a>
            </Link>
            <Link href="/">
              <a className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">
                Atendimento
              </a>
            </Link>
            <Link href="/">
              <a className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">
                Sua Casa
              </a>
            </Link>
            <Link href="/">
              <a className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">
                Seu Negócio
              </a>
            </Link>
            <Link href="/cliente/login">
              <button class=" text-white bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

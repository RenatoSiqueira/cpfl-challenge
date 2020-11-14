import React from "react";
import Link from "next/link";
import Image from "next/image";

const CTA = () => (
  <div className="flex items-center justify-center p-5 bg-gray-100 min-w-screen">
    <div className="relative flex flex-col items-center w-full max-w-6xl px-4 py-8 mx-auto text-center rounded-lg shadow-2xl lg:text-left lg:block bg-gradient-to-br from-blue-600 via-indigo-500 to-teal-400 sm:px-6 md:pb-0 md:pt-12 lg:px-12 lg:py-12">
      <h2 className="my-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:my-0 xl:text-4xl sm:leading-tight">
        Vamos juntos{" "}
        <span className="block text-indigo-200 xl:inline">Evitar o corte</span>
      </h2>
      <p className="mt-1 mb-10 text-sm font-medium text-indigo-200 uppercase xl:text-base xl:tracking-wider lg:mb-0">
        Veja como realizar o pagamento de suas contas online.
      </p>
      <div className="flex mb-8 lg:mt-6 lg:mb-0">
        <div className="inline-flex">
          <Link href="/">
            <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300">
              Simples e Fácil. Conheça agora
            </a>
          </Link>
        </div>
      </div>
      <div className="bottom-0 right-0 mb-0 mr-3 lg:absolute lg:-mb-12">
        {/* <Image 
                src='/images/cta.png'
                alt='Notícia'
                // width={348}
                // height={236}
                className="max-w-xs mb-4 opacity-75 md:max-w-2xl lg:max-w-lg xl:mb-0 xl:max-w-md"
            /> */}
      </div>
    </div>
  </div>
);

export default CTA;

import React from 'react'
import Image from 'next/image'

const Navbar = () => (
    <nav className="w-full z-30 bg-white shadow-lg space-x-4 border-b border-blue-600">
        <div className="container mx-auto px-6 py-3 ">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-semibold text-gray-700">
                        <Image
                            src="/images/brand/logo-cpfl-energia.png"
                            alt="CPFL logo"
                            width={99}
                            height={61}
                        />
                    </div>

                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="hidden mx-4 md:flex md:items-center">
                    <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">CPFL</a>
                    <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Serviços Essenciais</a>
                    <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Atendimento</a>
                    <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Sua Casa</a>
                    <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Seu Negócio</a>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar

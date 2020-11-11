import React from 'react'

const Hero = () => (
    <header>
        <div className="h-128 w-full bg-cover bg-center" style={{backgroundImage: 'url(/images/energy.jpg)'}}>
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Solicite sua</h1>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Segunda Via</button>
                </div>
            </div>
        </div>
    </header>
)

export default Hero

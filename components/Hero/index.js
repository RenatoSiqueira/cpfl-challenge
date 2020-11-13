import React from "react";
import Image from "next/image";

const Hero = () => (
  <section className="bg-blue-100 bg-opacity-25 grid grid-cols-1 md:grid-cols-2 gap-0">
    <div className="py-24 px-4 lg:px-20 flex flex-col justify-center items-start">
      <h1 className="text-4xl md:text-4xl lg:text-5xl text-blue-900 leading-tight font-bold mb-6">
        Great customer relationships start here.
      </h1>
      <p className="text-blue-800 text-sm mb-4 pr-0 lg:pr-16">
        Get the #1 Business Messenger and start delivering personalized
        experiences at every stage of the customer journey.
      </p>
    </div>
    <div>
      <Image
        src="/images/hero.jpg"
        className="w-full object-cover h-64 md:h-full bg-gray-100"
        loading="lazy"
        width={967}
        height={700}
        alt="CPFL"
      />
    </div>
  </section>
);

export default Hero;

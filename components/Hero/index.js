import React from 'react'

const Hero = () => (
<section class="bg-blue-100 bg-opacity-25 grid grid-cols-1 md:grid-cols-2 gap-0">
  <div class="py-24 px-4 lg:px-20 flex flex-col justify-center items-start">
    <span class="badge text-white bg-blue-900 mb-3">Pre Beta</span>
    <h1 class="text-4xl md:text-4xl lg:text-5xl text-blue-900 leading-tight font-bold mb-6">Great customer relationships start here.</h1>
    <form class="w-full mb-6">
      <label class="sr-only">Your Email</label>
      <div class="block lg:hidden">
        <input class="form-input form-input-lg text-blue-900" type="email" placeholder="Enter your email..." required="true" />
        <button class="btn btn-secondary btn-lg w-full mt-2" type="submit">Get Started</button>
      </div>
      <div class="form-append w-full hidden lg:flex">
        <input class="form-input form-input-lg text-blue-900" type="email" placeholder="Enter your email..." required="true" />
        <button class="btn btn-secondary btn-lg" type="submit">Get Started</button>
      </div>
    </form>
    <p class="text-blue-800 text-sm mb-4 pr-0 lg:pr-16">Get the #1 Business Messenger and start delivering personalized experiences at every stage of the customer journey.</p>
  </div>
  <div>
    <img src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="3 women looking at a laptop" class="w-full object-cover h-64 md:h-full bg-gray-100" loading="lazy" />
  </div>
</section>
)

export default Hero

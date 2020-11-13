import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import QuickAccess from '../components/QuickAccess'
import AnotherServices from '../components/AnotherServices'
import CTA from '../components/CTA'
import AnotherPartners from '../components/AnotherPartners'
import Footer from '../components/Footer'

import Chatbot from '../components/Chatbot'

const Index = () => (
    <>
        <Navbar/>
        <Chatbot/>
        <Hero />
        <QuickAccess/>
        <AnotherServices/>
        <CTA/>
        <div className='flex flex-row mt-10 mb-10'>
        <AnotherPartners/>
        <AnotherPartners/>
        <AnotherPartners/>
        </div>
        <Footer/>
    </>
)

export default Index

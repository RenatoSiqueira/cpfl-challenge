import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import QuickAccess from '../components/QuickAccess'
import MoreCPFL from '../components/MoreCPFL'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

import Chatbot from '../components/Chatbot'

const Index = () => (
    <>
        <Navbar/>
        <Chatbot/>
        <Hero />
        <QuickAccess/>
        <CTA/>
        <MoreCPFL/>
        <Footer/>
    </>
)

export default Index

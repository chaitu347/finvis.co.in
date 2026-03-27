import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import AboutUs from './components/AboutUS'
import WhyChooseUs from './components/WhyChooseUss'
import HowItWorks from './components/HowItsWork'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'
import Header from './components/Header'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import LawyerServicesWebsite from './components/LawyerServicesWebsite.jsx'
import ScrollToTop from './components/Scrolltotop.jsx';

function App() {

  return (
    
  <BrowserRouter>
  <ScrollToTop />
     
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/services" element={<LawyerServicesWebsite />} />
    </Routes>
        
     <Footer/>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUS'
import WhyChooseUs from './components/WhyChooseUss'
import HowItWorks from './components/HowItsWork'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'
import Header from './components/Header'
import ContactUs from './components/ContactUs/ContactUs.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <AboutUs/>
      <WhyChooseUs/>
      <HowItWorks/>
      <SocialMedia/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App

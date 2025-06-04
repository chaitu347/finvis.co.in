import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUS'
import WhyChooseUs from './components/WhyChooseUss'
import HowItWorks from './components/HowItsWork'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <AboutUs/>
      <WhyChooseUs/>
      <HowItWorks/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUS'
import WhyChooseUs from './components/whyChooseUs'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <AboutUs/>
      <WhyChooseUs/>
    </>
  )
}

export default App

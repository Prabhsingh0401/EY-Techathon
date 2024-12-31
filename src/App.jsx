import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { HeroSection } from './components/HeroSection/HeroSection'
import { Features } from './components/Features/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <Features></Features>
    <Footer></Footer>
    </>
  )
}

export default App

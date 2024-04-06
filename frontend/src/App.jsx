import Header from "./components/Header"
import Navbar from "./components/Navbar"
import NavbarLine from "./components/NavbarLine"
import Duration from "./components/Duration"
import SpeedTestContainer from "./components/SpeedTestContainer"
import Words from "./components/Words"
import Clock from "./components/Clock"
import { useState, useEffect } from "react"

function App() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [keyPressed, setKeyPressed] = useState(false)
  
  useEffect(() => {
    const handlePress = () => setKeyPressed(true)

    window.addEventListener('keydown', handlePress)
    return () => window.removeEventListener('keydown', handlePress)
  }, [])
  
  return (
    <div className="main">
      <Header />
      <NavbarLine />
      <Navbar />
      <NavbarLine />
      <Duration activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <SpeedTestContainer>
        {keyPressed && <Clock minutes={activeIndex}/>}
        <Words />
      </SpeedTestContainer>
    </div>
  )
}

export default App

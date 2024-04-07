import Header from "./components/Header"
import Navbar from "./components/Navbar"
import NavbarLine from "./components/NavbarLine"
import Duration from "./components/Duration"
import SpeedTestContainer from "./components/SpeedTestContainer"
import Words from "./components/Words"
import Clock from "./components/Clock"
import TestInfo from "./components/TestInfo"
import Input from "./components/Input"
import { useState, useEffect } from "react"

function App() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [keyPressed, setKeyPressed] = useState(false)
  
  useEffect(() => {
    const handlePress = (e) => {
      if (e.key === ' ') setKeyPressed(true)
    }
    window.addEventListener('keydown', handlePress)
    return () => window.removeEventListener('keydown', handlePress)
  }, [])
  
  return (
    <>
      <Header />
      <NavbarLine />
      <Navbar />
      <NavbarLine />
      <Duration activeIndex={activeIndex} setActiveIndex={setActiveIndex} keyPressed={keyPressed} />
      <SpeedTestContainer>
        <div className="test-stats">
          {!keyPressed && <TestInfo/>}
          {keyPressed && <Clock minutes={activeIndex}/>}
          {keyPressed && <Input />}
        </div>
        <Words />
      </SpeedTestContainer>
    </>
  )
}

export default App

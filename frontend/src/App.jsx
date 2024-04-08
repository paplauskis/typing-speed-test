import Header from "./components/Header"
import Navbar from "./components/Navbar"
import NavbarLine from "./components/NavbarLine"
import Duration from "./components/Duration"
import SpeedTestContainer from "./components/SpeedTestContainer"
import Words from "./components/Words"
import Clock from "./components/Clock"
import TestInfo from "./components/TestInfo"
import Input from "./components/Input"
import WPM from "./components/WPM"
import CPM from "./components/CPM"
import Accuracy from "./components/Accuracy"
import checkPressed from "./utils/test"
import calculateWPM from "./utils/calculateWPM"
import { useState, useEffect } from "react"

function App() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [keyPressed, setKeyPressed] = useState(false)
  const [accuracy, setAccuracy] = useState('0%')
  const [wordsPerMinute, setWordsPerMinute] = useState(0)

  useEffect(() => {
    const handlePress = (e) => {
      if (e.key === ' ') setKeyPressed(true)
      if (setKeyPressed) {
        setAccuracy(checkPressed(e))
        setWordsPerMinute(calculateWPM())
      }
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
          {keyPressed && <WPM wordsPerMinute={wordsPerMinute}/>}
          {keyPressed && <CPM />}
          {keyPressed && <Accuracy accuracy={accuracy}/>}
          {keyPressed && <Input />}
        </div>
        <Words />
      </SpeedTestContainer>
    </>
  )
}

export default App

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
import calculateCPM from "./utils/calculateCPM"
import { useState, useEffect } from "react"

function App() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [gameStarted, setGameStarted] = useState(false)
  const [accuracy, setAccuracy] = useState('0%')
  const [wordsPerMinute, setWordsPerMinute] = useState(0)
  const [charsPerMinute, setCharsPerMinute] = useState(0)

  useEffect(() => {
    const handlePress = (e) => {
      if (e.key === ' ') setGameStarted(true)
      if (setGameStarted) {
        setAccuracy(checkPressed(e))
        setWordsPerMinute(calculateWPM())
        setCharsPerMinute(calculateCPM())
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
      <Duration activeIndex={activeIndex} setActiveIndex={setActiveIndex} keyPressed={gameStarted} />
      <SpeedTestContainer>
        <div className="test-stats">
          {!gameStarted && <TestInfo/>}
          {gameStarted && <Clock minutes={activeIndex}/>}
          {gameStarted && <WPM wordsPerMinute={wordsPerMinute}/>}
          {gameStarted && <CPM charsPerMinute={charsPerMinute}/>}
          {gameStarted && <Accuracy accuracy={accuracy}/>}
          {gameStarted && <Input />}
        </div>
        <Words />
      </SpeedTestContainer>
    </>
  )
}

export default App

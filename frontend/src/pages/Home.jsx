import Duration from '../components/Duration'
import SpeedTestContainer from '../components/SpeedTestContainer'
import Words from '../components/Words'
import Clock from '../components/Clock'
import TestInfo from '../components/TestInfo'
import Input from '../components/Input'
import WPM from '../components/WPM'
import CPM from '../components/CPM'
import Accuracy from '../components/Accuracy'
import TestStats from '../components/TestStats'
import checkPressed from '../utils/test'
import calculateWPM from '../utils/calculateWPM'
import calculateCPM from '../utils/calculateCPM'
import calculateChars from '../utils/calculateChars'
import calculateWords from '../utils/calculateWords'
import scrollWords from '../utils/scrollWords'
import { useState, useEffect } from 'react'

function Home() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [testStarted, setGameStarted] = useState(false)
  const [charsTyped, setCharsTyped] = useState(0)
  const [accuracy, setAccuracy] = useState('0%')
  const [wordsPerMinute, setWordsPerMinute] = useState(0)
  const [charsPerMinute, setCharsPerMinute] = useState(0)
  const [testStopped, setTestStopped] = useState(false)
  const [correctChars, setCorrectChars] = useState(0)
  const [correctWords, setCorrectWords] = useState(0)
  const [wrongChars, setWrongChars] = useState(0)
  const [wrongWords, setWrongWords] = useState(0)

  const stopTest = () => {
    setCorrectChars(calculateChars().correctChars)
    setCorrectWords(calculateWords().correctWords)
    setWrongChars(calculateChars().wrongChars)
    setWrongWords(calculateWords().wrongWords)
    setTestStopped(true)
    setGameStarted(false)
  }

  useEffect(() => {
    const handlePress = (e) => {
      setGameStarted(true)
      if (e.key === 'Backspace') {
        setCharsTyped((prevCharsTyped) => prevCharsTyped - 1)
      } else {
        setCharsTyped((prevCharsTyped) => prevCharsTyped + 1)
      }
      if (setGameStarted) {
        setAccuracy(checkPressed(e, charsTyped))
        setWordsPerMinute(calculateWPM())
        setCharsPerMinute(calculateCPM())
        scrollWords()
      }
    }

    if (!testStopped) {
      window.addEventListener('keydown', handlePress)
    }
    return () => window.removeEventListener('keydown', handlePress)
  }, [testStopped, charsTyped])
  return (
    <>
      {!testStopped && (
        <>
          <Duration
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            keyPressed={testStarted}
          />
          <SpeedTestContainer>
            <div className="test-stats">
              {!testStarted && <TestInfo />}
              {testStarted && (
                <Clock minutes={activeIndex} stopTest={stopTest} />
              )}
              {testStarted && <WPM wordsPerMinute={wordsPerMinute} />}
              {testStarted && <CPM charsPerMinute={charsPerMinute} />}
              {testStarted && <Accuracy accuracy={accuracy} />}
              {testStarted && <Input />}
            </div>
            <Words />
          </SpeedTestContainer>
        </>
      )}
      {testStopped && (
        <TestStats
          accuracy={accuracy}
          wpm={correctWords + wrongWords}
          cpm={correctChars + wrongChars}
          correctChars={correctChars}
          wrongChars={wrongChars}
          correctWords={correctWords}
          wrongWords={wrongWords}
          minutes={activeIndex}
        />
      )}
    </>
  )
}

export default Home
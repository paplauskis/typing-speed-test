import { getTimeLeft, getTotalTime } from './getTime'

function calculateWPM() {
  const wordCount = getWordCount()
  const timeLeft = getTimeLeft()
  let totalTime = null
  if (totalTime === null) totalTime = getTotalTime()
  const timeElapsed = totalTime - timeLeft
  const wpm = Math.floor((wordCount / timeElapsed) * 60)
  return wpm
}

function getWordCount() {
  const tl = document.querySelectorAll('.typed')
  const typedLetters = [...tl]
  let count = 0
  typedLetters.forEach((letter) => {
    if (letter.textContent === ' ') count++
  })
  return count
}

export default calculateWPM
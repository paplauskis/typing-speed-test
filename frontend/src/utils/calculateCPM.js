import { getTimeLeft, getTotalTime } from './getTime'

function calculateCPM() {
  const tl = document.querySelectorAll('.typed')
  const typedLetters = [...tl]
  const totalTypedLetters = typedLetters.length
  const timeLeft = getTimeLeft()
  let totalTime = null
  if (totalTime === null) totalTime = getTotalTime()
  const timeElapsed = totalTime - timeLeft
  const cpm = Math.floor((totalTypedLetters / timeElapsed) * 60)
  return cpm
}

export default calculateCPM

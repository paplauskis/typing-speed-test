function calculateWPM() {
  const wordCount = getWordCount()
  const timeLeft = getTimeLeft()
  let totalTime = null
  if (totalTime === null) totalTime = getTotalTime()
  const timeElapsed = totalTime - timeLeft
  const wpm = Math.floor(wordCount / timeElapsed * 60)
  return wpm
}

function getWordCount() {
  const tl = document.querySelectorAll('.typed')
  const typedLetters = [...tl]
  let count = 0
  typedLetters.forEach(letter => {
    if (letter.textContent === ' ')
      count++
  })
  return count
}

function getTimeLeft() {
  const timeLeft = document.querySelector('.time').textContent
  return timeLeft
}

function getTotalTime() {
  const durationsBtns = document.getElementsByClassName('duration-button')
  const durationsBtnsArray = [...durationsBtns]
  let totalTime = ''
  durationsBtnsArray.forEach(btn => {
    if (btn.classList[1]) {
      totalTime = (btn.textContent * 60).toString()
    }
  })
  return totalTime
}

export default calculateWPM
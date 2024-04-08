let gameStarted = false
let charsTyped = 0

export function checkPressed(e) {
  if (e.key === 'Backspace' && gameStarted) {
    charsTyped--
    const letter = document.getElementById(`${charsTyped}`)
    letter.classList.remove('typed')
    letter.classList.remove('wrong')
    letter.classList.remove('correct')
    letter.textContent === '_' ? (letter.textContent = ' ') : letter.textContent
    return calculateAccuracy()
  } else {
    if (gameStarted) {
      const letter = document.getElementById(`${charsTyped}`)
      if (letter.textContent === e.key) {
        letter.className = 'correct'
      } else {
        letter.className = 'wrong'
        letter.textContent === ' '
          ? (letter.textContent = '_')
          : letter.textContent
      }
      letter.classList.add('typed')
      charsTyped++
      return calculateAccuracy()
    }
  }
  if (!gameStarted && !charsTyped && e.key === ' ') {
    gameStarted = true
    return '0%'
  }
}

export function calculateAccuracy() {
  const tl = document.querySelectorAll('.typed')
  const typedLetters = [...tl]
  let correctTypes = 0
  let wrongTypes = 0
  typedLetters.forEach(letter => {
    letter.classList[0] === 'correct' ? correctTypes++ : wrongTypes++
  })
  const number = Math.floor(correctTypes / typedLetters.length * 100)
  return number + '%'
}

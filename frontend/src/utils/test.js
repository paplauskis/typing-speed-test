let gameStarted = false
let charsTyped = 0

export function checkPressed(e) {
  if (e.key === 'Backspace' && gameStarted) {
    charsTyped--
    const letter = document.getElementById(`${charsTyped}`)
    letter.classList.remove('current')
    letter.classList.remove('wrong')
    letter.classList.remove('correct')
  } else {
    if (gameStarted) {
      const letter = document.getElementById(`${charsTyped}`)
      if (letter.textContent === e.key) {
        letter.className = 'correct'
      } else {
        letter.className = 'wrong'
      }
      letter.classList.add('current')
      charsTyped++
    }
  }
  if (!gameStarted && !charsTyped && e.key === ' ') {
    gameStarted = true
  } 
}

window.addEventListener('keydown', checkPressed)
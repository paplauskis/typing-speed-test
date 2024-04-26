import calculateAccuracy from './calculateAccuracy'

function checkPressed(e, charsTyped) {
  if (e.key === 'Backspace') {
    const letter = document.getElementById(`${charsTyped - 1}`)
    letter.classList.remove('typed')
    letter.classList.remove('wrong')
    letter.classList.remove('correct')
    letter.textContent === '_' ? (letter.textContent = ' ') : letter.textContent
    return calculateAccuracy()
  } else {
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
    return calculateAccuracy()
  }
}

export default checkPressed
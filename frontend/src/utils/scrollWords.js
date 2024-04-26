function scrollWords(e) {
  const wordsDiv = document.querySelector('.words')
  const allChars = getAllChars()
  if (allChars % 175 === 0 && e.key !== 'Backspace') {
    wordsDiv.scrollBy({
      top: 80,
      behavior: 'smooth',
    })
  } else if (allChars % 175 === 0 && e.key === 'Backspace') {
    wordsDiv.scrollBy({
      top: -80,
      behavior: 'smooth',
    })
  }
}

function getAllChars() {
  const tl = document.querySelectorAll('.typed')
  const typedLetters = [...tl]
  const totalTypedLetters = typedLetters.length
  return totalTypedLetters
}

export default scrollWords

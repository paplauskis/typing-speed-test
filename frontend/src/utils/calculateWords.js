function calculateWords() {
  const count = getWordCount()
  return {correctWords, wrongWords}
}

function getWordCount() {
  const tw = document.querySelectorAll('.typed')
  const typedLetters = [...tw]
  let count = 0
  typedLetters.forEach(letter => {
    if (letter.textContent === ' ')
      count++
  })
  return count
}

export default calculateWords
function calculateWords() {
  const count = getWordCount()
  const correctWords = getCorrectWords()
  const wrongWords = count - correctWords
  return { correctWords, wrongWords }
}

function getWordCount() {
  const tw = document.querySelectorAll('.typed')
  const typedLetters = [...tw]
  let count = 0
  typedLetters.forEach((letter) => {
    if (letter.textContent === ' ') count++
  })
  return count
}

function getCorrectWords() {
  const tw = document.querySelectorAll('.typed')
  const typedLetters = [...tw]
  let correctWordCount = 0
  let wrong = false
  typedLetters.forEach((letter) => {
    if (letter.classList[0] === 'wrong') {
      wrong = true
    }
    if (letter.textContent === ' ' && wrong === false) {
      correctWordCount++
    } else if (letter.textContent === ' ' && wrong === true) {
      wrong = false
    }
  })
  return correctWordCount
}

export default calculateWords
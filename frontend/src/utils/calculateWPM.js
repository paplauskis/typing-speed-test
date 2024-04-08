function calculateWPM() {
  const wordCount = getWordCount()
  
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

export default calculateWPM
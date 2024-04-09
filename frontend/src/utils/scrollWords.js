function scrollWords() {
  const wordsDiv = document.querySelector('.words')
  const allChars = getAllChars()
  if(allChars % 160 === 0) {
    wordsDiv.scrollBy({
      top: 80,
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

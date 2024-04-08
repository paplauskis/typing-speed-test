function calculateAccuracy() {
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

export default calculateAccuracy
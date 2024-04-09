function calculateChars() {
  const correctChars = getCorrectChars()
  const wrongChars = getWrongChars()
  return { correctChars, wrongChars }
}

function getCorrectChars() {
  const cl = document.querySelectorAll('.correct')
  const cletters = [...cl]
  const correctLetters = cletters.length
  return correctLetters
}

function getWrongChars() {
  const wl = document.querySelectorAll('.wrong')
  const wletters = [...wl]
  const wrongLetters = wletters.length
  return wrongLetters
}

export default calculateChars

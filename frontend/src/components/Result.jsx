function Result({
  username = 'Username',
  score = 'Score',
  correctChars = 'Correct chars',
  wrongChars = 'Wrong chars',
  correctWords = 'Correct words',
  wrongWords = 'Wrong words',
  cpm = 'Chars/min',
  wpm = 'Words/min',
  accuracy = 'Accuracy, %',
}) {
  return (
    <>
      <div className="username stat">{username}</div>
      <div className="score stat">{score}</div>
      <div className="correct-chars stat">{correctChars}</div>
      <div className="wrong-chars stat">{wrongChars}</div>
      <div className="correct-words stat">{correctWords}</div>
      <div className="wrong-words stat">{wrongWords}</div>
      <div className="chars-per-min stat">{cpm}</div>
      <div className="words-per-min stat">{wpm}</div>
      <div className="accuracy stat">{accuracy}</div>
    </>
  )
}

export default Result

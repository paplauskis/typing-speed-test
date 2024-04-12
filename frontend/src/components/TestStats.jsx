import SubmitResult from './SubmitResult'

function TestStats({
  accuracy,
  wpm,
  cpm,
  correctChars,
  wrongChars,
  correctWords,
  wrongWords,
  minutes
}) {
  return (
    <div id="test-stats">
      <h1>Result</h1>
      <h3>{minutes} Minute Test</h3>
      <div className="section-one">
        <div className="correct-wrong subsection-one">
          <span></span>
          <span className="correct">Correct</span>
          <span className="wrong">Wrong</span>
        </div>
        <hr />
        <div className="chars-typed subsection-one">
          <span>Characters</span>
          <span className="correct">{correctChars}</span>
          <span className="wrong">{wrongChars}</span>
        </div>
        <hr />
        <div className="words-typed subsection-one">
          <span>Words</span>
          <span className="correct">{correctWords}</span>
          <span className="wrong">{wrongWords}</span>
        </div>
      </div>
      <div className="section-two">
        <div className="chars-min subsection-two">
          <span>Score</span>
          <span>{correctChars - wrongChars}</span>
        </div>
        <hr />
        <div className="chars-min subsection-two">
          <span>Characters/min</span>
          <span>{Math.floor(cpm / minutes)}</span>
        </div>
        <hr />
        <div className="words-min subsection-two">
          <span>Words/min</span>
          <span>{Math.floor(wpm / minutes)}</span>
        </div>
        <hr />
        <div className="chars-sec subsection-two">
          <span>Characters/sec</span>
          <span>{(cpm / minutes / 60).toString().slice(0, 3)}</span>
        </div>
        <hr />
        <div className="words-sec subsection-two">
          <span>Words/sec</span>
          <span>{(wpm / minutes / 60).toString().slice(0, 3)}</span>
        </div>
        <hr />
        <div className="accuracy-percent subsection-two">
          <span>Accuracy</span>
          <span>{accuracy}%</span>
        </div>
      </div>
      <SubmitResult 
      accuracy={accuracy}
      wpm={Math.floor(wpm / minutes)}
      cpm={Math.floor(cpm / minutes)}
      correctChars={correctChars}
      wrongChars={wrongChars}
      correctWords={correctWords}
      wrongWords={wrongWords}
      minutes={minutes}
      />
    </div>
  )
}

export default TestStats

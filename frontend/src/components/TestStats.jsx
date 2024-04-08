function TestStats({ accuracy, wpm, cpm }) {
  return (
    <div id="test-stats">
      <div className="section-one">
        <div className="correct-wrong subsection-one">
          <span></span>
          <span className="correct">Correct</span>
          <span className="wrong">Wrong</span>
        </div>
        <hr />
        <div className="chars-typed subsection-one">
          <span>Characters</span>
          <span className="correct">-----</span>
          <span className="wrong">-----</span>
        </div>
        <hr />
        <div className="words-typed subsection-one">
          <span>Words</span>
          <span className="correct">-----</span>
          <span className="wrong">-----</span>
        </div>
      </div>
      <div className="section-two">
        <div className="chars-min">
          <span>Characters/min</span>
          <span>{cpm}</span>
        </div>
        <div className="words-min">
          <span>Words/min</span>
          <span>{wpm}</span>
        </div>
        <div className="chars-sec">
          <span>Characters/sec</span>
          <span>{(cpm / 60).toString().slice(0, 3)}</span>
        </div>
        <div className="words-sec">
          <span>Words/sec</span>
          <span>{(wpm / 60).toString().slice(0, 3)}</span>
        </div>
        <div className="accuracy-percent">
          <span>Accuracy</span>
          <span>{accuracy}%</span>
        </div>
      </div>
    </div>
  )
}

export default TestStats

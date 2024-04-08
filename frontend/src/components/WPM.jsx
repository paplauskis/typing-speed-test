function WPM({ wordsPerMinute }) {
  return (
    <div className="wpm stats-div">
      <span className="num">{wordsPerMinute}</span>
      <span>words/min</span>
    </div>
  )
}

export default WPM
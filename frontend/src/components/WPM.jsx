function WPM({ wordsPerMinute }) {
  return (
    <div className="wpm stats-div">
      <span className="num">
        {!wordsPerMinute || wordsPerMinute === Infinity ? '-' : wordsPerMinute}
      </span>
      <span>words/min</span>
    </div>
  )
}

export default WPM

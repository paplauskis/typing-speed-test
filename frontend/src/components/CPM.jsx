function CPM({ charsPerMinute }) {
  return (
    <div className="cpm stats-div">
      <span className="num">{charsPerMinute}</span>
      <span>chars/min</span>
    </div>
  )
}

export default CPM
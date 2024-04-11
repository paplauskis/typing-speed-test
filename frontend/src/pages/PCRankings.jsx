import { useState, useEffect } from 'react'
import Result from '../components/Result'

function PCRankings() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true)
      const response = await fetch('http://localhost:4000/api/pc-rankings')
      const json = await response.json()
      if (response.ok) {
        setResults(json)
        setLoading(false)
      } else {
        console.log('error')
      }
    }
    fetchResults()
  }, [])
  if (loading) {
    return <h1>Loading...</h1>
  } else if (!results) {
    return <h1>An error has occured while loading leaderboard</h1>
  } else {
    return (
      <div className="results">
        <div className="result results-header">
          <Result />
        </div>
        {results.map((result, index) => (
          <div key={index} className="result">
            <Result
              index={index}
              username={result.username}
              score={result.score}
              correctChars={result.correctChars}
              wrongChars={result.wrongChars}
              correctWords={result.correctWords}
              wrongWords={result.wrongWords}
              cpm={result.cpm}
              wpm={result.wpm}
              accuracy={result.accuracy}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default PCRankings

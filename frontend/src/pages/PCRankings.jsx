import { useState, useEffect } from 'react'
import Result from '../components/Result'

function PCRankings() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true)
      const response = await fetch('http://localhost:4000/api/pc-rankings')
      const json = await response.json()
      if (response.ok) {
        setResults(json)
        setLoading(false)
      } else {
        setError(json.error)
        setLoading(false)
      }
    }
    fetchResults()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  } else if (!results) {
    return <h2 className="error">{error}</h2>
  } else {
    return (
      <div className="leaderboards">
        <div className="leaderboard one-minute-leaderboard">
          <h2>Standard keyboard rankings (1 minute)</h2>
          <div className="results">
            <div className="result results-header">
              <Result />
            </div>
            {results
              .filter((result) => result.minutes === 1)
              .map((result, index) => (
                <div key={index} className="result">
                  <Result
                    position={++index}
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
        </div>
        <div className="leaderboard">
          <h2>Standard keyboard rankings (2 minutes)</h2>
          <div className="results">
            <div className="result results-header">
              <Result />
            </div>
            {results
              .filter((result) => result.minutes === 2)
              .map((result, index) => (
                <div key={index} className="result">
                  <Result
                    position={++index}
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
        </div>
        <div className="leaderboard">
          <h2>Standard keyboard rankings (3 minutes)</h2>
          <div className="results">
            <div className="result results-header">
              <Result />
            </div>
            {results
              .filter((result) => result.minutes === 3)
              .map((result, index) => (
                <div key={index} className="result">
                  <Result
                    position={++index}
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
        </div>
      </div>
    )
  }
}

export default PCRankings

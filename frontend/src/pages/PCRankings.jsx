import { useState, useEffect } from 'react'

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
    <h1>An error has occured while loading leaderboard</h1>
  } else {
    return (
      <div>
        {results.map((result, index) => (
          <div key={index} className="result">
            <span>{result.username}</span>
            <span>{result.score}</span>
            <span>{result.correctChars}</span>
            <span>{result.correctWords}</span>
            <span>{result.cpm}</span>
            <span>{result.wpm}</span>
            <span>{result.accuracy}%</span>
          </div>
        ))}
      </div>
    )
  }
}

export default PCRankings

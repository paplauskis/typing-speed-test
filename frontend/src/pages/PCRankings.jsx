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
  
}

export default PCRankings

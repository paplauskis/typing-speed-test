import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SubmitResult({
  accuracy,
  wpm,
  cpm,
  correctChars,
  wrongChars,
  correctWords,
  wrongWords,
  minutes,
}) {
  const [username, setUsername] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = {
      username,
      score: correctChars - wrongChars,
      accuracy,
      wpm,
      cpm,
      correctChars,
      wrongChars,
      correctWords,
      wrongWords,
      minutes,
      device: 'pc',
    }

    const response = await fetch('http://localhost:4000/api', {
      method: 'POST',
      body: JSON.stringify(result),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()

    if (!response.ok) {
      console.log(json.error)
    }

    if (response.ok) {
      setSubmitted(true)
      navigate('/pc-rankings')
    }
  }
  if (!submitted) {
    return (
      <div className="submit-result">
        <span className="submit-text">
          Submit your result to compare yourself to other users
        </span>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="your username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Submit Result</button>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div className="submit-result">
        <span className="submit-text">Your result has been submitted!</span>
      </div>
    )
  }
}

export default SubmitResult

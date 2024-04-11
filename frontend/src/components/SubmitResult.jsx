import { useState } from 'react'

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
    }
  }

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
}

export default SubmitResult

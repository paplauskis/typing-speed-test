import { useState } from "react"

function SubmitResult() {
  const [username, setUsername] = useState('')
  return (
    <div className="submit-result">
      <span className="submit-text">
        Submit your result to compare yourself to other users
      </span>
      <form action="/pc-ranking" method="POST">
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

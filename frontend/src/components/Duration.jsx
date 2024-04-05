import { useState } from "react"
function Duration () {
  return (
    <div className="duration">
      <p>Choose the duration of the test</p>
      <div className="duration-buttons">
        <button className="duration-button">1</button>
        <button className="duration-button">2</button>
        <button className="duration-button">3</button>
        <p>minute(s)</p>
      </div>
    </div>
  )
}

export default Duration
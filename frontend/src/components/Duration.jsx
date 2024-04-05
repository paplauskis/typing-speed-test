import { useState } from "react"
function Duration () {
  const [activeIndex, setActiveIndex] = useState(1)
  console.log(activeIndex)
  return (
    <div className="duration">
      <p>Choose the duration of the test</p>
      <div className="duration-buttons">
        <button className={`duration-button ${activeIndex === 1 ? 'active' : ''}`} onClick={() => setActiveIndex(1)}>1</button>
        <button className={`duration-button ${activeIndex === 2 ? 'active' : ''}`} onClick={() => setActiveIndex(2)}>2</button>
        <button className={`duration-button ${activeIndex === 3 ? 'active' : ''}`} onClick={() => setActiveIndex(3)}>3</button>
        <p>{activeIndex === 1 ? 'minute' : 'minutes'}</p>
      </div>
    </div>
  )
}

export default Duration
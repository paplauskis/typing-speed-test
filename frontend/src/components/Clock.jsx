import { useState, useEffect } from 'react'

function Clock({ minutes, keyPressed }) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60)
  
  if (keyPressed) {
    useEffect(() => {
      if (!timeLeft) return
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearInterval(timer)
    }, [timeLeft])
  }

  useEffect(() => {
    setTimeLeft(minutes * 60)
  }, [minutes])

  return (
    <div className="clock">
      <span className="time">{timeLeft ? timeLeft : 0}</span>
      <span className="seconds">Seconds</span>
    </div>
  )
}

export default Clock

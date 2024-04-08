import { useState, useEffect } from 'react'

function Clock({ minutes, stopTest }) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60)

  useEffect(() => {
    if (!timeLeft) {
      stopTest()
      return
    }
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  useEffect(() => {
    setTimeLeft(minutes * 60)
  }, [minutes])

  return (
    <div className="clock stats-div">
      <span className="time">{timeLeft}</span>
      <span className="seconds">Seconds</span>
    </div>
  )
}

export default Clock

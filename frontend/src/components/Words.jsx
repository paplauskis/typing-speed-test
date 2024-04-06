import { useState, useEffect } from 'react'

function Words({ minutes }) {
  const [text, setText] = useState([])
  
  useEffect(() => {
    fetch('../../words.txt')
      .then((res) => res.text())
      .then((t) => {
        setText(t.split('\n'))
      })
      .catch(error => {
        console.log(`error fetching words: ${error}`)
      })
  }, [])

  return <div className="words"></div>
}

export default Words

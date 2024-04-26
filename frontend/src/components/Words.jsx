import { useEffect, useState } from 'react'
import { loadRandomWords } from '../utils/textFileUtils'

function Words() {
  const [letters, setLetters] = useState([])

  useEffect(() => {
    async function getData() {
      const arr = await loadRandomWords()
      setLetters(arr)
    }
    getData()
  }, [])

  if (letters === null) {
    return <span className="error-text">ERROR: failed to generate text</span>
  } else {
    return (
      <div className="words">
        {letters.map((letter, index) => {
          return (
            <span id={index} key={index}>
              {letter}
            </span>
          )
        })}
      </div>
    )
  }
}

export default Words

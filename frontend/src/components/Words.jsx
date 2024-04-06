import { loadRandomWords } from '../utils/textFileUtils'

const letters = await loadRandomWords()

function Words() {
  if (letters === null) {
    return (
      <span className="error-text">ERROR: failed to generate text</span>
    )   
  } else {
    return (
      <div className="words">
        {letters.map((letter, index) => {
          return <span id={index} key={index}>{letter}</span>
        })}
      </div>
    )
  }
}

export default Words

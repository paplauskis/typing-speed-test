import { loadRandomWords } from '../utils/textFileUtils'

const letters = await loadRandomWords()

function Words() {
  return (
    <div className="words">
      {letters.map((letter, index) => {
        return <span key={index}>{letter}</span>
      })}
    </div>
  )
}

export default Words

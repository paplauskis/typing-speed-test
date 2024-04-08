export async function loadRandomWords() {
  const newArr = []
  try {
    const res = await fetch('../../words.txt')
    const t = await res.text()
    const arr = t.split('\n')
    for (let i = 0; i < 500; i++) {
      const randomWord = arr[Math.floor(Math.random() * 1000)]
      newArr.push(randomWord.toLowerCase())
    }
    return newArr.join(' ').split('')
  } catch (error) {
    console.error(`error fetching words: ${error}`)
    return null
  }
}

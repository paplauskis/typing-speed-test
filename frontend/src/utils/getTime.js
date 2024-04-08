export function getTimeLeft() {
  const timeLeft = document.querySelector('.time').textContent
  return timeLeft
}

export function getTotalTime() {
  const durationsBtns = document.getElementsByClassName('duration-button')
  const durationsBtnsArray = [...durationsBtns]
  let totalTime = ''
  durationsBtnsArray.forEach(btn => {
    if (btn.classList[1]) {
      totalTime = (btn.textContent * 60).toString()
    }
  })
  return totalTime
}
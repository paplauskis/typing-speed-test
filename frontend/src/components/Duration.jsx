function Duration({ activeIndex, setActiveIndex, keyPressed }) {
  return (
    <div className="duration">
      <p>Choose the duration of the test</p>
      <div className="duration-buttons">
        <button
          className={`duration-button ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => !keyPressed && setActiveIndex(1)}
        >
          1
        </button>
        <button
          className={`duration-button ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => !keyPressed && setActiveIndex(2)}
        >
          2
        </button>
        <button
          className={`duration-button ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => !keyPressed && setActiveIndex(3)}
        >
          3
        </button>
        <p>{activeIndex === 1 ? 'minute' : 'minutes'}</p>
      </div>
    </div>
  )
}

export default Duration

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import NavbarLine from "./components/NavbarLine"
import Duration from "./components/Duration"
import { useState } from "react"

function App() {
  const [activeIndex, setActiveIndex] = useState(1)
  return (
    <div className="main">
      <Header />
      <NavbarLine />
      <Navbar />
      <NavbarLine />
      <Duration activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
    </div>
  )
}

export default App

import Header from './Header'
import NavbarLine from './NavbarLine'

function Navbar() {
  return (
    <>
      <Header />
      <NavbarLine />
      <div className="navbar">
        <button className="nav-option">Typing Test</button>
        <button className="nav-option">Standard Keyboard Rankings</button>
        <button className="nav-option">Virtual Keyboard Rankings</button>
      </div>
      <NavbarLine />
    </>
  )
}

export default Navbar

import { Link } from 'react-router-dom'
import Header from './Header'
import NavbarLine from './NavbarLine'

function Navbar() {
  return (
    <>
      <Header />
      <NavbarLine />
      <div className="navbar">
        <Link to="/">
          <button className="nav-option">Typing Test</button>
        </Link>
        <Link to="/pc-rankings">
          <button className="nav-option">Standard Keyboard Rankings</button>
        </Link>
        <Link to="mobile-rankings">
          <button className="nav-option">Virtual Keyboard Rankings</button>
        </Link>
      </div>
      <NavbarLine />
    </>
  )
}

export default Navbar

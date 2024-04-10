import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PCRankings from './pages/PCRankings'
import MobileRankings from './pages/MobileRankings'
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pc-rankings" element={<PCRankings />} />
            <Route path="/mobile-rankings" element={<MobileRankings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

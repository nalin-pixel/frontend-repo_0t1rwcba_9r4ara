import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Solutions from './pages/Solutions'
import Regions from './pages/Regions'
import Technology from './pages/Technology'
import Impact from './pages/Impact'
import Partners from './pages/Partners'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

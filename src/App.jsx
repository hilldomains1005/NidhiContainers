import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <div className="navbar__logo">
            <span className="logo-icon">&#9671;</span>
          </div>
          <div className="navbar__brand-text">
            <span className="brand-name">Nidhi Containers</span>
            <span className="brand-tagline">Pvt Ltd</span>
          </div>
        </Link>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'} onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'} onClick={closeMenu}>Our Products</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'} onClick={closeMenu}>Contact Us</NavLink>
        </nav>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

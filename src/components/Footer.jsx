import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="logo-icon">&#9671;</span>
          </div>
          <div>
            <div className="footer__brand-name">Nidhi Containers Pvt Ltd</div>
            <p className="footer__desc">
              Leading manufacturer of high-quality industrial and commercial containers,
              serving industries across India.
            </p>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Products</h4>
          <ul>
            <li><Link to="/products">Storage Containers</Link></li>
            <li><Link to="/products">Shipping Containers</Link></li>
            <li><Link to="/products">Industrial Bins</Link></li>
            <li><Link to="/products">Custom Solutions</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact-list">
            <li>
              <span className="footer__icon">&#128205;</span>
              BEHIND INGERSOL RAND, C-1/5, PLOT NO. 19, PHASE1, GIDC NARODA, Ahmedabad, Gujarat, 382330.
            </li>
            <li>
              <span className="footer__icon">&#128222;</span>
              +91 9824090503 / +91 7573012501
            </li>
            <li>
              <span className="footer__icon">&#9993;</span>
              ncpl2004@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {new Date().getFullYear()} Nidhi Containers Pvt Ltd. All rights reserved.</p>
        <p>Made with care in India</p>
      </div>
    </footer>
  )
}

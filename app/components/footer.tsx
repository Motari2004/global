import Link from "next/link"
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About EcoHope</h3>
            <p>
              EcoHope is dedicated to protecting wildlife and preserving natural ecosystems across Africa through
              conservation efforts, education, and community engagement.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/wildlife">Wildlife</Link>
              </li>
              <li>
                <Link href="/conservation">Conservation</Link>
              </li>
              <li>
                <Link href="/donate">Donate</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> 123 Conservation Way, Nairobi, Kenya
            </p>
            <p>
              <i className="fas fa-phone"></i> +254 123 456 789
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@ecohope.org
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EcoHope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

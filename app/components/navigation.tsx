"use client"
import { useState } from "react"
import Link from "next/link"
import "./navigation.css"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link href="/">
              <span className="logo-text">
                Eco<span className="highlight">Hope</span>
              </span>
            </Link>
          </div>

          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Menu</span>
            <span className="hamburger"></span>
          </button>

          <nav className={`primary-navigation ${isOpen ? "active" : ""}`} id="primary-navigation">
            <ul className="nav-list">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/wildlife" onClick={() => setIsOpen(false)}>
                  Wildlife
                </Link>
              </li>
              <li>
                <Link href="/conservation" onClick={() => setIsOpen(false)}>
                  Conservation
                </Link>
              </li>
              <li>
                <Link href="/donate" onClick={() => setIsOpen(false)}>
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

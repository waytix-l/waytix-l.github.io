'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">Lucas Savy</Link>
        </div>
        
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          <Link href="/#projects" className="nav-link" onClick={() => setIsOpen(false)}>
            Projets
          </Link>
          <Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            À propos
        </Link>
        </nav>

        <button 
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
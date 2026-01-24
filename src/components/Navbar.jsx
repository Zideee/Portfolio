import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>
                    <span className="gradient-text">Johann</span>
                </a>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <li><a onClick={() => scrollToSection('about')}>À propos</a></li>
                    <li><a onClick={() => scrollToSection('skills')}>Compétences</a></li>
                    <li><a onClick={() => scrollToSection('projects')}>Projets</a></li>
                    <li><a onClick={() => scrollToSection('contact')} className="btn btn-outline">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
    const [text, setText] = useState('')
    const fullText = 'Développeur Web Full Stack'

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(timer)
            }
        }, 100)

        return () => clearInterval(timer)
    }, [])

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" className="hero section">
            <div className="hero-background">
                <div className="hero-pattern"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content animate-fade-in-up">
                    <p className="hero-greeting">Bonjour, je suis</p>
                    <h1 className="hero-title">
                        Johann Zidee<span className="text-gold">.</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        <span className="typing-text">{text}</span>
                        <span className="cursor">|</span>
                    </h2>

                    <div className="hero-cta">
                        <button onClick={scrollToProjects} className="btn btn-primary">
                            Voir mes projets
                        </button>
                    </div>
                </div>

                <div className="hero-decoration">
                    <div className="decoration-circle circle-1"></div>
                    <div className="decoration-circle circle-2"></div>
                    <div className="decoration-circle circle-3"></div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll</p>
            </div>
        </section>
    )
}

export default Hero

import React from 'react'
import './About.css'

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        À Propos <span className="text-gold">de moi</span>
                    </h2>
                    <p className="section-subtitle">Découvrez mon parcours et ma passion</p>
                </div>

                <div className="about-content">
                    <div className="about-image animate-slide-in-left">
                        <div className="image-wrapper">
                            <div className="image-decoration"></div>
                            <div className="profile-placeholder">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="100" cy="75" r="40" fill="var(--color-secondary)" opacity="0.2" />
                                    <circle cx="100" cy="75" r="35" fill="var(--color-beige-dark)" />
                                    <path d="M 60 150 Q 100 120 140 150 L 140 200 L 60 200 Z" fill="var(--color-beige-dark)" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="about-text animate-slide-in-right">
                        <h3 className="about-greeting">Bonjour ! Je suis Johann</h3>
                        <p className="about-description">
                            Développeur web passionné, je combine créativité et expertise technique
                            pour créer des expériences digitales exceptionnelles. Mon approche allie
                            design élégant et code performant.
                        </p>
                        <p className="about-description">
                            Avec une solide expérience en développement full stack, je maîtrise
                            l'ensemble du processus de création, de la conception à la mise en production.
                            J'aime relever des défis et transformer des idées complexes en solutions
                            simples et intuitives.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item card">
                                <div className="highlight-icon">🎯</div>
                                <div className="highlight-content">
                                    <h4>Mission</h4>
                                    <p>Créer des expériences web qui marquent les esprits</p>
                                </div>
                            </div>

                            <div className="highlight-item card">
                                <div className="highlight-icon">💡</div>
                                <div className="highlight-content">
                                    <h4>Approche</h4>
                                    <p>Allier esthétique moderne et performance optimale</p>
                                </div>
                            </div>

                            <div className="highlight-item card">
                                <div className="highlight-icon">🚀</div>
                                <div className="highlight-content">
                                    <h4>Objectif</h4>
                                    <p>Dépasser les attentes à chaque projet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

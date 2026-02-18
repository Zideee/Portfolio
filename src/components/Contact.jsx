import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Pour le moment, just log - l'utilisateur peut ajouter vraie fonctionnalité plus tard
        console.log('Form submitted:', formData)
        alert('Message envoyé ! (Fonctionnalité à implémenter)')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Restons en <span className="text-gold">Contact</span>
                    </h2>
                    <p className="section-subtitle">Un Stage ? Une Alternance ? Discutons-en !</p>
                </div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info animate-slide-in-left">


                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon">📧</div>
                                <div className="method-content">
                                    <h4>Email</h4>
                                    <a href="mailto:johannzidee2004@gmail.com">johannzidee2004@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">📱</div>
                                <div className="method-content">
                                    <h4>Téléphone</h4>
                                    <a href="tel:+33769751669">+33 7 69 75 16 69</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">📍</div>
                                <div className="method-content">
                                    <h4>Localisation</h4>
                                    <p>Paris, France</p>
                                </div>
                            </div>
                        </div>

                        {/* CV Download */}
                        <div className="cv-download">
                            <a href="/cv-johann-zidee.pdf" download className="btn btn-primary cv-btn">
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Télécharger mon CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="contact-social">
                            <a href="https://github.com/Zideee" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/johannzidee" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        className="contact-form card animate-slide-in-right"
                        action="mailto:johannzidee2004@gmail.com"
                        method="POST"
                        enctype="text/plain"
                    >
                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Votre nom"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="votre@email.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Votre message..."
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-submit">
                            Envoyer le message
                        </button>
                        <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                            Ce formulaire ouvrira votre logiciel de messagerie par défaut.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact

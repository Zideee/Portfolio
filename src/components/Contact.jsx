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

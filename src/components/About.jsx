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
                                <img src="assets/me.jpg" alt="Profile" />
                            </div>
                        </div>
                    </div>

                    <div className="about-text animate-slide-in-right">
                        <p className="about-description">
                            Étudiant en dernière année de BUT Informatique , je ne me contente pas de compiler du code,
                            je fédère les équipes autour de projets back-end performants.
                            De la gestion d'une billetterie pour les JO 2024 à la création d'applis mobiles comme OtakuGo ,
                            j'allie rigueur technique et esprit d'initiative.



                        </p>
                        <p className="about-description">
                            Passionné de basket et de réalisation de films ,
                            j'apporte un sens du collectif "All-Star" et une touche créative à chaque défi.
                            Mon objectif : transformer des besoins complexes en expériences fluides, tout en gardant un calme (et un humour) olympique.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

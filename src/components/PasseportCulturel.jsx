import React from 'react'
import './PasseportCulturel.css'

const PasseportCulturel = () => {
    return (
        <section id="passeport-culturel" className="passeport-culturel section">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Passeport <span className="text-gold">Culturel</span>
                    </h2>
                    <p className="section-subtitle">Ouverture d'esprit, veille technologique et centres d'intérêt</p>
                </div>

                <div className="passeport-grid">
                    {/* Veille technologique */}
                    <div className="passeport-card card animate-fade-in-up">
                        <div className="passeport-card-icon">🔍</div>
                        <h3>Veille technologique</h3>
                        <p>
                            Je maintiens une veille active sur les nouvelles sorties technologiques
                            et la progression des différents modèles d'IA. C'est un domaine qui évolue
                            très vite et que je suis de près, en lien avec mon orientation vers la data et l'IA.
                        </p>
                        <div className="veille-sources">
                            <h4>Sources principales</h4>
                            <ul>
                                <li>YouTube (Melvynx) — actualité IA, modèles et nouveaux outils</li>
                                <li>GitHub Trending — découverte de projets open source</li>
                                <li>Dev.to & Medium — articles techniques et retours d'expérience</li>
                                <li>Reddit (r/MachineLearning, r/webdev) — communautés de développeurs</li>
                                <li>Documentation officielle — Flutter, React, Python</li>
                            </ul>
                        </div>
                    </div>

                    {/* Ouverture internationale */}
                    <div className="passeport-card card animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                        <div className="passeport-card-icon">🌍</div>
                        <h3>Ouverture internationale</h3>
                        <p>
                            Mon niveau d'anglais professionnel (B2) me permet de lire la documentation
                            technique en anglais, de suivre des conférences internationales et de
                            contribuer à des projets open source.
                        </p>
                        <div className="langue-badge">
                            <span className="langue-flag">🇬🇧</span>
                            <div>
                                <strong>Anglais professionnel</strong>
                                <span className="langue-level">Niveau B2</span>
                            </div>
                        </div>
                        <p>
                            Ma passion pour la culture japonaise (mangas, animes) m'a aussi ouvert
                            à une autre culture et perspective, ce qui se reflète dans mon projet OtakuGo.
                        </p>
                    </div>

                    {/* Centres d'intérêt */}
                    <div className="passeport-card card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="passeport-card-icon">⭐</div>
                        <h3>Centres d'intérêt</h3>

                        <div className="interests-list">
                            <div className="interest-item">
                                <span className="interest-emoji">🏀</span>
                                <div>
                                    <strong>Basketball</strong>
                                    <p>Pratique régulière en amateur. Esprit d'équipe, fair-play et persévérance.</p>
                                </div>
                            </div>

                            <div className="interest-item">
                                <span className="interest-emoji">🎬</span>
                                <div>
                                    <strong>Cinéma & Courts-métrages</strong>
                                    <p>Réalisation de plusieurs courts-métrages (scénarisation, tournage, montage).</p>
                                </div>
                            </div>

                            <div className="interest-item">
                                <span className="interest-emoji">🎮</span>
                                <div>
                                    <strong>Jeux vidéo</strong>
                                    <p>FPS, jeux de stratégie — développe la réflexion tactique et la prise de décision rapide.</p>
                                </div>
                            </div>

                            <div className="interest-item">
                                <span className="interest-emoji">🇯🇵</span>
                                <div>
                                    <strong>Culture japonaise</strong>
                                    <p>Passionné de mangas (Seinen/Shonen) et d'animes, ce qui a inspiré le projet OtakuGo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PasseportCulturel

import React from 'react'
import './Objectifs.css'

const Objectifs = () => {
    return (
        <section id="objectifs" className="objectifs section">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Objectifs & <span className="text-gold">Avenir</span>
                    </h2>
                    <p className="section-subtitle">Ma vision pour la suite de mon parcours</p>
                </div>

                {/* Ce dont je suis le plus fier */}
                <div className="pride-section card animate-fade-in-up">
                    <div className="pride-header">
                        <span className="pride-icon">🏆</span>
                        <h3>Ce dont je suis le plus fier</h3>
                    </div>
                    <div className="pride-content">
                        <p>
                            Côté projet, ma plus grande fierté est sans hésiter OtakuGo, réalisé avec mes camarades.
                            C'est un thème qui me tient à cœur, dans lequel nous avons investi beaucoup de temps,
                            et voir le résultat tourner sur son téléphone procure une vraie forme d'accomplissement —
                            un projet concret que je peux montrer à mon entourage, le fruit de nos efforts.
                        </p>
                        <p>
                            Côté expérience, je suis fier d'avoir trouvé dans le domaine de la banque ce qui me plaît vraiment.
                            Je voulais me spécialiser dans ce secteur pour l'avenir, et faire mes preuves au sein de BDF Gestion
                            confirme que je suis sur la bonne voie.
                        </p>
                        <p>
                            Au-delà du technique, c'est la confiance qu'on m'accorde qui me rend fier.
                            Prouver qu'un étudiant peut livrer un travail de qualité professionnelle,
                            c'est la meilleure validation de mon parcours en BUT Informatique.
                        </p>
                    </div>
                </div>

                {/* Poursuite d'études */}
                <div className="studies-section animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                    <div className="studies-card card">
                        <div className="studies-icon">🎓</div>
                        <h3>Poursuite d'études</h3>
                        <p>
                            Après l'obtention de mon BUT Informatique, j'ai été admis à <strong>aivancity</strong>,
                            école classée 1ʳᵉ en intelligence artificielle, en <strong>M1 MSc Data Engineering &amp; Cloud Computing</strong>
                            en alternance. J'y développerai des compétences en ingénierie de la donnée, cloud computing,
                            big data et déploiement de pipelines de machine learning à l'échelle — tout en combinant
                            approfondissement théorique et expérience professionnelle concrète.
                        </p>
                    </div>
                </div>

                {/* Objectifs timeline */}
                <div className="goals-timeline animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="goal-item">
                        <div className="goal-marker">
                            <span className="goal-dot"></span>
                            <span className="goal-line"></span>
                        </div>
                        <div className="goal-content card">
                            <span className="goal-timeframe">Court terme — 2026</span>
                            <h4>Valider mon BUT Informatique</h4>
                            <p>
                                Obtenir mon diplôme et réussir ma soutenance de stage pour valider mon année.
                                Continuer à développer mes projets personnels (OtakuGo, SimulatorNotes)
                                pour gagner encore plus d'expérience.
                            </p>
                        </div>
                    </div>

                    <div className="goal-item">
                        <div className="goal-marker">
                            <span className="goal-dot"></span>
                            <span className="goal-line"></span>
                        </div>
                        <div className="goal-content card">
                            <span className="goal-timeframe">Moyen terme — 2026-2028</span>
                            <h4>M1 Data Engineering &amp; Cloud à aivancity</h4>
                            <p>
                                Intégrer aivancity (1ʳᵉ école d'IA) en M1 MSc Data Engineering &amp; Cloud Computing
                                en alternance, pour approfondir l'ingénierie de la donnée, le cloud, le big data
                                et le déploiement de pipelines de machine learning. Gagner en expérience et en autonomie.
                            </p>
                        </div>
                    </div>

                    <div className="goal-item">
                        <div className="goal-marker">
                            <span className="goal-dot"></span>
                        </div>
                        <div className="goal-content card">
                            <span className="goal-timeframe">Long terme — 2029+</span>
                            <h4>Développeur Data &amp; IA ou DevOps en banque</h4>
                            <p>
                                Devenir développeur Data &amp; IA ou DevOps — un métier lié à l'informatique
                                dans le domaine de la banque, le secteur dans lequel je souhaite me spécialiser
                                et conjuguer expertise technique et impact concret.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Objectifs

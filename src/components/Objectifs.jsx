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
                            Ce dont je suis le plus fier, c'est d'avoir réussi à mettre en place la billetterie informatisée
                            pour les Jeux Olympiques 2024 à la Mairie de L'Île-Saint-Denis. En tant que stagiaire,
                            j'ai eu la responsabilité d'un système utilisé par plus de 100 personnes lors d'un événement mondial.
                        </p>
                        <p>
                            La pression était immense — aucun droit à l'erreur le jour J. Mais c'est exactement ce type de défi
                            qui me motive. Voir le système fonctionner parfaitement, les utilisateurs satisfaits,
                            et savoir que j'ai contribué à un événement historique : c'est une fierté indescriptible.
                        </p>
                        <p>
                            Au-delà du technique, c'est la confiance qu'on m'a accordée qui me rend fier.
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
                            Après l'obtention de mon BUT Informatique, je souhaite poursuivre en alternance
                            dans un Master ou une école d'ingénieur spécialisée en développement logiciel
                            ou en ingénierie informatique. L'alternance me permettra de combiner
                            approfondissement théorique et expérience professionnelle concrète.
                        </p>
                        {/* PLACEHOLDER : Johann, personnalise cette section avec tes vrais choix d'études */}
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
                            <h4>Obtenir mon BUT Informatique</h4>
                            <p>
                                Valider mon diplôme avec mention et décrocher un stage/alternance
                                pour le Master. Continuer à développer mes projets personnels
                                (OtakuGo, SimulatorNotes) pour enrichir mon portfolio.
                            </p>
                        </div>
                    </div>

                    <div className="goal-item">
                        <div className="goal-marker">
                            <span className="goal-dot"></span>
                            <span className="goal-line"></span>
                        </div>
                        <div className="goal-content card">
                            <span className="goal-timeframe">Moyen terme — 2027-2028</span>
                            <h4>Master en alternance</h4>
                            <p>
                                Intégrer un Master en informatique en alternance pour approfondir
                                mes compétences en architecture logicielle, DevOps et gestion d'équipes techniques.
                                Gagner en expérience professionnelle et en autonomie.
                            </p>
                        </div>
                    </div>

                    <div className="goal-item">
                        <div className="goal-marker">
                            <span className="goal-dot"></span>
                        </div>
                        <div className="goal-content card">
                            <span className="goal-timeframe">Long terme — 2029+</span>
                            <h4>Développeur senior / Lead technique</h4>
                            <p>
                                Évoluer vers un rôle de lead technique ou de développeur senior,
                                en combinant expertise technique et management d'équipe.
                                Contribuer à des projets à impact, potentiellement dans le domaine
                                du sport ou du divertissement — deux passions que j'aimerais retrouver
                                dans ma carrière.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Objectifs

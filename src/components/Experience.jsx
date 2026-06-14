import React from 'react'
import './Experience.css'

const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Parcours <span className="text-gold">Professionnel</span>
                    </h2>
                    <p className="section-subtitle">Mon expérience en entreprise et ce que j'en ai appris</p>
                </div>

                {/* Stage BDF Gestion */}
                <div className="experience-stage card animate-fade-in-up">
                    <div className="stage-header">
                        <div className="stage-icon">🏦</div>
                        <div className="stage-info">
                            <h3>Stage — Développeur</h3>
                            <p className="stage-company">BDF Gestion — Paris</p>
                            <span className="stage-date">2026 — En cours</span>
                        </div>
                    </div>

                    <div className="stage-missions">
                        <h4>Missions réalisées</h4>
                        <div className="missions-grid">
                            <div className="mission-item">
                                <span className="mission-icon">🔧</span>
                                <div>
                                    <h5>Maintenance applicative</h5>
                                    <p>Me mettre à niveau sur les développements existants (Python, C#, Nuxt) afin de pouvoir intervenir sur n'importe quel programme en cas de modification.</p>
                                </div>
                            </div>
                            <div className="mission-item">
                                <span className="mission-icon">🐍</span>
                                <div>
                                    <h5>Développements Python</h5>
                                    <p>Réaliser de nouveaux développements en Python pour les collaborateurs de BDF Gestion, en réponse à leurs besoins métier.</p>
                                </div>
                            </div>
                            <div className="mission-item">
                                <span className="mission-icon">📊</span>
                                <div>
                                    <h5>Pôle infogérance</h5>
                                    <p>Gestion du parc de progiciels marchés (Bloomberg, Reuters, Factset, Barra, Bondvision, Tradeweb, ITG), de l'infrastructure virtualisée et du parc utilisateurs, du réseau, développement d'outils d'aide à la décision (VBA, Python) pour le front et le middle office, et support technique à tous les collaborateurs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stage Mairie */}
                <div className="experience-stage card animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                    <div className="stage-header">
                        <div className="stage-icon">🏢</div>
                        <div className="stage-info">
                            <h3>Stage — Assistant Coordinateur en Systèmes Informatiques</h3>
                            <p className="stage-company">Mairie de L'Île-Saint-Denis (93450)</p>
                            <span className="stage-date">2024</span>
                        </div>
                    </div>

                    <div className="stage-missions">
                        <h4>Missions réalisées</h4>
                        <div className="missions-grid">
                            <div className="mission-item">
                                <span className="mission-icon">🎫</span>
                                <div>
                                    <h5>Billetterie JO 2024</h5>
                                    <p>Mise en place d'une billetterie informatisée pour les Jeux Olympiques 2024, utilisée par plus de 100 utilisateurs. Gestion du déploiement, des tests et du support utilisateur en conditions réelles.</p>
                                </div>
                            </div>
                            <div className="mission-item">
                                <span className="mission-icon">🖥️</span>
                                <div>
                                    <h5>Maintenance informatique</h5>
                                    <p>Réparation et remise en service de postes informatiques. Diagnostic de pannes matérielles et logicielles, réinstallation de systèmes et configuration réseau.</p>
                                </div>
                            </div>
                            <div className="mission-item">
                                <span className="mission-icon">🌐</span>
                                <div>
                                    <h5>Développement Web</h5>
                                    <p>Développement IT d'un site web via WordPress pour les services de la mairie. Personnalisation du thème, gestion du contenu et mise en ligne.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Découverte du monde pro */}
                <div className="experience-discovery animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="discovery-grid">
                        <div className="discovery-card card">
                            <div className="discovery-icon">🤝</div>
                            <h4>Culture d'entreprise</h4>
                            <p>
                                Travailler dans une collectivité territoriale m'a appris le fonctionnement des institutions publiques.
                                J'ai découvert l'importance de la communication inter-services, les processus de validation
                                et la rigueur nécessaire dans un environnement où les décisions impactent les citoyens.
                            </p>
                        </div>

                        <div className="discovery-card card">
                            <div className="discovery-icon">👥</div>
                            <h4>Travail en équipe & Réunions</h4>
                            <p>
                                J'ai participé à des réunions de coordination avec les équipes techniques et les élus.
                                J'ai appris à présenter des solutions techniques à un public non-technique,
                                à écouter les besoins des utilisateurs et à adapter mes propositions en conséquence.
                            </p>
                        </div>

                        <div className="discovery-card card">
                            <div className="discovery-icon">🔧</div>
                            <h4>Blocages techniques & Outils</h4>
                            <p>
                                Face à des défis comme la mise en place de la billetterie sous contrainte de temps (événement JO),
                                j'ai appris à prioriser, à chercher des solutions de contournement et à travailler sous pression.
                                Outils utilisés : WordPress, outils de diagnostic réseau, gestion de parc informatique.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Découverte de soi */}
                <div className="self-discovery card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="self-discovery-header">
                        <span className="self-icon">🪞</span>
                        <h3>Ce que j'ai découvert de moi-même</h3>
                    </div>
                    <div className="self-discovery-content">
                        <blockquote>
                            <p>
                                Mon stage chez BDF Gestion m'a révélé à quel point j'aime aider les autres.
                                Je n'hésite jamais à aller vers mes collègues pour récupérer les informations
                                dont j'ai besoin afin de mener une mission à bien ou de corriger un problème :
                                cet altruisme est devenu un vrai moteur dans mon travail.
                            </p>
                            <p>
                                J'ai aussi découvert mon sang-froid. Lorsque plusieurs demandes arrivent en même temps,
                                que les personnes sont pressées et que la pression monte, je sais garder mon calme
                                pour traiter chaque sujet avec lucidité plutôt que dans la précipitation.
                            </p>
                            <p>
                                Enfin, j'ai confirmé ma ténacité : face à un problème, je veux le résoudre le plus vite
                                possible et je reste dessus jusqu'à ce qu'il soit complètement réglé — comme sur un terrain
                                de basket, je ne lâche jamais.
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience

import React from 'react'
import './Experience.css'

const Experience = () => {
    const missions = [
        'Me mettre à niveau sur les développements existants (Python, C#, Nuxt) et pouvoir intervenir sur n\'importe quel programme en cas de modification.',
        'Effectuer de nouveaux développements (en Python) pour les collaborateurs de BDF Gestion.',
    ]

    const infogerance = [
        'Gestion du parc des progiciels orientés marchés (Bloomberg, Reuters, Factset, Barra, plateformes d\'exécution : Bondvision, Tradeweb, ITG…).',
        'Monitoring de l\'infrastructure infogérée et gestion de l\'environnement de travail virtualisé (masters déployés : création, suivi).',
        'Gestion du parc informatique utilisateurs (clients légers, PC portables, tablettes, téléphones…).',
        'Gestion du réseau.',
        'Développement d\'outils d\'aide à la décision sous MS Office (VBA, Python) pour le front et le middle office ainsi que les départements de contrôle.',
        'Aide technique à tous les collaborateurs.',
    ]

    const discoveries = [
        {
            icon: '🤝',
            title: 'Altruisme',
            text: 'J\'aime profondément aider les autres. Je n\'hésite pas à aller vers les gens pour récupérer les informations nécessaires à une mission ou corriger un problème.',
        },
        {
            icon: '🧘',
            title: 'Sang-froid',
            text: 'Quand les demandes affluent et que la pression monte, je sais garder mon calme pour traiter chaque sujet avec lucidité.',
        },
        {
            icon: '🎯',
            title: 'Ténacité',
            text: 'Face à un problème, je veux le résoudre le plus vite possible et je reste dessus jusqu\'à ce qu\'il soit complètement réglé.',
        },
    ]

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Mon <span className="text-gold">Expérience</span>
                    </h2>
                    <p className="section-subtitle">Mon immersion dans le monde de la banque</p>
                </div>

                <div className="experience-card card animate-fade-in-up">
                    <div className="experience-head">
                        <div className="experience-role">
                            <h3 className="experience-title">Développeur — Stagiaire</h3>
                            <span className="experience-company">BDF Gestion</span>
                        </div>
                        <div className="experience-meta">
                            <span className="experience-badge">📍 Paris</span>
                            <span className="experience-badge experience-badge-current">En cours</span>
                        </div>
                    </div>

                    <div className="experience-block">
                        <h4 className="experience-block-title">Mes missions</h4>
                        <ul className="experience-list">
                            {missions.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="experience-block">
                        <h4 className="experience-block-title">Pôle infogérance</h4>
                        <ul className="experience-list">
                            {infogerance.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="discoveries">
                    <h3 className="discoveries-title">Ce que cette expérience m'a appris sur moi</h3>
                    <div className="discoveries-grid">
                        {discoveries.map((item, index) => (
                            <div
                                key={index}
                                className="discovery-card card animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="discovery-icon">{item.icon}</span>
                                <h4 className="discovery-name">{item.title}</h4>
                                <p className="discovery-text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience

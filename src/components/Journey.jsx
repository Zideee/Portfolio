import React from 'react'
import './Journey.css'

const Journey = () => {
    const saes = [
        {
            tag: 'SAE 5',
            title: 'OtakuGo — Application mobile 100% locale',
            text: 'Proposer une application mobile indépendante (no backend) capable de recommander dynamiquement des animes selon les préférences de l\'utilisateur, sans connexion internet. Un fonctionnement mobile-first entièrement local : souveraineté des données, usage hors-ligne après le chargement initial, et recommandations basées sur les choix successifs de l\'utilisateur.',
            note: 'Ma première application avec autant d\'éléments, sur un thème qui me passionne. La contrainte forte — une app entièrement locale sans connexion — a rendu le défi d\'autant plus formateur.',
        },
        {
            tag: 'SAE 6',
            title: 'Diagramme de Voronoï — avec & sans IA',
            text: 'Générer un diagramme de Voronoï d\'abord sans IA, puis en m\'appuyant sur plusieurs IA (Gemini). Une application web (HTML/CSS/JS) qui importe un fichier de coordonnées, génère le diagramme, l\'exporte en SVG/PNG HD, et intègre des tests unitaires (Vitest) et de bout en bout (Playwright).',
            note: 'Ce que j\'en retiens : il faut formuler des demandes précises à l\'IA pour qu\'elle reste sur les rails — bien la guider évite qu\'elle se perde.',
        },
    ]

    const goals = [
        {
            horizon: 'Court terme',
            text: 'Obtenir mon diplôme de BUT Informatique, réussir ma soutenance de stage pour valider mon année, et continuer à développer mes projets personnels pour gagner encore plus d\'expérience.',
        },
        {
            horizon: 'Moyen terme',
            text: 'J\'ai été admis à aivancity — école d\'IA classée 1ʳᵉ — en M1 MSc Data Engineering & Cloud Computing en alternance. J\'y développerai des compétences en ingénierie de la donnée, cloud computing, big data et déploiement de pipelines de machine learning à l\'échelle.',
        },
        {
            horizon: 'Long terme',
            text: 'Devenir développeur Data & IA ou DevOps — un métier lié à l\'informatique dans le domaine de la banque, le secteur dans lequel je souhaite me spécialiser.',
        },
    ]

    return (
        <section id="journey" className="journey section">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Mon <span className="text-gold">Parcours</span>
                    </h2>
                    <p className="section-subtitle">Mes réalisations académiques et mes objectifs</p>
                </div>

                {/* Bilans SAE */}
                <div className="journey-block">
                    <h3 className="journey-block-title">Mes bilans SAE</h3>
                    <div className="sae-grid">
                        {saes.map((sae, index) => (
                            <div
                                key={index}
                                className="sae-card card animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="sae-tag">{sae.tag}</span>
                                <h4 className="sae-title">{sae.title}</h4>
                                <p className="sae-text">{sae.text}</p>
                                <p className="sae-note">{sae.note}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ce dont je suis fier */}
                <div className="journey-block">
                    <h3 className="journey-block-title">Ce dont je suis le plus fier</h3>
                    <div className="pride-grid">
                        <div className="pride-card card">
                            <span className="pride-icon">🏆</span>
                            <h4 className="pride-name">Côté projet — OtakuGo</h4>
                            <p className="pride-text">
                                Sans hésiter, mon projet OtakuGo réalisé avec mes camarades : un thème qui me tient à cœur,
                                beaucoup de temps investi, et la fierté de voir le résultat tourner sur son téléphone — un projet
                                concret que je peux montrer à mon entourage, le fruit de nos efforts.
                            </p>
                        </div>
                        <div className="pride-card card">
                            <span className="pride-icon">🏦</span>
                            <h4 className="pride-name">Côté expérience — la banque</h4>
                            <p className="pride-text">
                                Avoir trouvé dans le domaine de la banque ce qui me plaît vraiment. Je voulais me spécialiser
                                dans ce secteur pour l'avenir, et je suis fier de faire mes preuves au sein de cette entreprise.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Objectifs */}
                <div className="journey-block">
                    <h3 className="journey-block-title">Mes objectifs</h3>
                    <div className="goals-timeline">
                        {goals.map((goal, index) => (
                            <div key={index} className="goal-item">
                                <span className="goal-horizon">{goal.horizon}</span>
                                <p className="goal-text">{goal.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Veille techno */}
                <div className="journey-block">
                    <div className="watch-card card">
                        <span className="watch-icon">📡</span>
                        <div className="watch-content">
                            <h4 className="watch-title">Veille technologique</h4>
                            <p className="watch-text">
                                Je maintiens une veille active sur les nouvelles sorties technologiques et la progression
                                des différents modèles d'IA, notamment grâce à des chaînes YouTube comme Melvynx.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey

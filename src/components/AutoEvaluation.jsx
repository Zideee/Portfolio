import React from 'react'
import './AutoEvaluation.css'

const AutoEvaluation = () => {
    const competences = [
        {
            name: 'Réaliser',
            fullName: 'Réaliser un développement d\'application',
            level: 85,
            levelLabel: 'Avancé',
            description: 'Concevoir, coder, tester et intégrer une solution informatique pour un client.',
            justification: 'À travers OtakuGo (Flutter), Outil de Pilotage (PHP) et la billetterie JO (WordPress), j\'ai démontré ma capacité à mener un développement de bout en bout, du cahier des charges au déploiement. Je maîtrise plusieurs langages et frameworks, et je sais adapter mes choix techniques aux besoins du projet.',
            projects: ['OtakuGo', 'Outil de Pilotage', 'SAS Perform Vision', 'Billetterie JO'],
            skills: ['Développement full-stack', 'Tests unitaires', 'Intégration continue', 'Architecture logicielle'],
        },
        {
            name: 'Conduire',
            fullName: 'Conduire un projet',
            level: 80,
            levelLabel: 'Avancé',
            description: 'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, en planifiant et coordonnant les activités.',
            justification: 'En tant que coordinateur sur plusieurs projets d\'équipe (équipes de 5 personnes), j\'ai appris à planifier, répartir les tâches, animer des réunions et respecter les délais. Mon stage m\'a confronté à la gestion de projet en conditions réelles, notamment avec la pression des JO 2024.',
            projects: ['Outil de Pilotage', 'Stage Mairie', 'App Web HKMT'],
            skills: ['Planification', 'Coordination d\'équipe', 'Suivi de projet', 'Gestion des risques'],
        },
        {
            name: 'Collaborer',
            fullName: 'Collaborer au sein d\'une équipe informatique',
            level: 90,
            levelLabel: 'Expert',
            description: 'Inscrire son action au sein d\'une équipe informatique, en communiquant efficacement et en contribuant à la cohésion.',
            justification: 'Ma passion pour le basket m\'a forgé un esprit d\'équipe solide que je transpose dans mes projets. Sur chaque projet en équipe de 5, j\'ai naturellement pris un rôle fédérateur : résolution de conflits, communication inter-membres, pair programming. Au stage, j\'ai collaboré avec des équipes non-techniques, développant mes compétences interpersonnelles.',
            projects: ['Tous les projets en équipe', 'Stage Mairie', 'OtakuGo'],
            skills: ['Communication', 'Esprit d\'équipe', 'Résolution de conflits', 'Pair programming'],
        },
    ]

    return (
        <section id="auto-evaluation" className="auto-evaluation section">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Auto-<span className="text-gold">évaluation</span>
                    </h2>
                    <p className="section-subtitle">Synthèse de 3 compétences du BUT Informatique</p>
                </div>

                {/* Tableau récapitulatif */}
                <div className="eval-table-wrapper animate-fade-in-up">
                    <table className="eval-table">
                        <thead>
                            <tr>
                                <th>Compétence</th>
                                <th>Niveau</th>
                                <th>Projets associés</th>
                                <th>Savoir-faire clés</th>
                            </tr>
                        </thead>
                        <tbody>
                            {competences.map((comp, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <span className="comp-name">{comp.name}</span>
                                    </td>
                                    <td>
                                        <div className="comp-level">
                                            <div className="level-bar">
                                                <div className="level-fill" style={{ width: `${comp.level}%` }}></div>
                                            </div>
                                            <span className="level-label">{comp.levelLabel}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="comp-projects">
                                            {comp.projects.map((p, i) => (
                                                <span key={i} className="comp-project-tag">{p}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="comp-skills-list">
                                            {comp.skills.map((s, i) => (
                                                <span key={i}>{s}</span>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Détails par compétence */}
                <div className="eval-details">
                    {competences.map((comp, idx) => (
                        <div key={idx} className="eval-detail-card card animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                            <div className="eval-detail-header">
                                <div className="eval-badge">{comp.name}</div>
                                <h3>{comp.fullName}</h3>
                            </div>
                            <p className="eval-definition">{comp.description}</p>
                            <div className="eval-justification">
                                <h4>Mon analyse</h4>
                                <p>{comp.justification}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AutoEvaluation

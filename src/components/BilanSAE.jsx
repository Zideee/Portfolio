import React from 'react'
import './BilanSAE.css'

const BilanSAE = () => {
    const saes = [
        {
            semestre: 'S5',
            items: [
                {
                    title: 'Outil de Pilotage',
                    duration: '4 mois — Équipe de 5',
                    description: 'Gestion de projet IT complète : analyse des besoins utilisateurs, modélisation UML, programmation en PHP, tests fonctionnels et intégration. Maîtrise des bases de données.',
                    difficulties: 'La coordination en équipe de 5 était un vrai défi. Il a fallu mettre en place une organisation rigoureuse (répartition des tâches, Git, réunions hebdomadaires) pour avancer efficacement.',
                    skills: ['PHP', 'UML', 'Gestion de projet', 'Tests', 'SQL'],
                    competences: ['Réaliser', 'Conduire', 'Collaborer'],
                },
                {
                    title: 'OtakuGo — Application Mobile',
                    duration: '4 mois — Équipe de 5',
                    description: 'Développement d\'une application mobile Flutter en mode "offline-first" avec un moteur de recommandation adaptatif pour les animes. Système de swipe, tier list, mode tournoi et dashboard statistiques.',
                    difficulties: 'L\'architecture offline-first avec synchronisation des données était complexe. J\'ai dû apprendre Flutter/Dart en autodidacte tout en respectant les délais du projet.',
                    skills: ['Flutter', 'Dart', 'Algorithmique', 'Mobile', 'API'],
                    competences: ['Réaliser', 'Optimiser', 'Collaborer'],
                },
            ]
        },
        {
            semestre: 'S6',
            items: [
                {
                    title: 'Doctor Who — Jeu Interactif',
                    duration: 'Projet en équipe',
                    description: 'Jeu mobile interactif basé sur l\'univers Doctor Who avec choix narratifs, voyages temporels et mini-jeu Breakout intégré. Scénarisation complète et développement de l\'interface.',
                    difficulties: 'Intégrer un mini-jeu Breakout dans le flux narratif a demandé une architecture flexible. Gérer les multiples embranchements scénaristiques était aussi un défi de conception.',
                    skills: ['Python', 'Game Design', 'Scénarisation', 'UI/UX'],
                    competences: ['Réaliser', 'Conduire'],
                },
                {
                    title: 'SAS Perform Vision — Extranet',
                    duration: 'Projet en équipe',
                    description: 'Extranet d\'entreprise sécurisé facilitant la collaboration interne, la gestion de fichiers et la diffusion d\'actualités. Authentification, gestion des rôles et interface d\'administration.',
                    difficulties: 'La sécurisation de l\'extranet (authentification, permissions par rôle) et la gestion de fichiers volumineux ont été les principaux challenges techniques.',
                    skills: ['PHP', 'Web', 'Sécurité', 'SQL', 'Extranet'],
                    competences: ['Réaliser', 'Administrer', 'Collaborer'],
                },
                {
                    title: 'App Web HKMT',
                    duration: 'Projet en équipe',
                    description: 'Application web d\'administration et de gestion professionnelle développée avec une architecture PHP robuste. Interface d\'administration complète avec tableaux de bord.',
                    difficulties: 'La complexité des règles métier et la gestion des droits d\'accès multi-niveaux ont nécessité une modélisation approfondie avant le développement.',
                    skills: ['PHP', 'JavaScript', 'Architecture', 'SQL'],
                    competences: ['Réaliser', 'Gérer', 'Conduire'],
                },
            ]
        },
    ]

    return (
        <section id="bilan-sae" className="bilan-sae section">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Bilan des <span className="text-gold">SAE</span>
                    </h2>
                    <p className="section-subtitle">Situations d'Apprentissage et d'Évaluation — S5 & S6</p>
                </div>

                {saes.map((semester, sIdx) => (
                    <div key={sIdx} className="semester-block animate-fade-in-up" style={{ animationDelay: `${sIdx * 0.2}s` }}>
                        <div className="semester-label">
                            <span>{semester.semestre}</span>
                        </div>

                        <div className="sae-timeline">
                            {semester.items.map((sae, idx) => (
                                <div key={idx} className="sae-card card">
                                    <div className="sae-card-header">
                                        <h3>{sae.title}</h3>
                                        <span className="sae-duration">{sae.duration}</span>
                                    </div>

                                    <p className="sae-description">{sae.description}</p>

                                    <div className="sae-difficulty">
                                        <h4>⚡ Difficultés & Solutions</h4>
                                        <p>{sae.difficulties}</p>
                                    </div>

                                    <div className="sae-footer">
                                        <div className="sae-skills">
                                            {sae.skills.map((skill, i) => (
                                                <span key={i} className="sae-skill-tag">{skill}</span>
                                            ))}
                                        </div>
                                        <div className="sae-competences">
                                            {sae.competences.map((comp, i) => (
                                                <span key={i} className="sae-comp-tag">{comp}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BilanSAE

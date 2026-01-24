import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
    const [filter, setFilter] = useState('all')

    // Placeholder projects - l'utilisateur ajoutera ses vrais projets
    const projects = [
        {
            id: 1,
            title: 'Projet E-commerce',
            description: 'Plateforme e-commerce moderne avec panier d\'achats, paiement sécurisé et gestion de commandes.',
            image: null, // Placeholder - will use gradient
            tags: ['React', 'Node.js', 'MongoDB'],
            category: 'web',
            githubLink: '#',
            liveLink: '#',
        },
        {
            id: 2,
            title: 'Application Mobile',
            description: 'Application de gestion de tâches avec synchronisation cloud et notifications en temps réel.',
            image: null,
            tags: ['React Native', 'Firebase', 'Redux'],
            category: 'mobile',
            githubLink: '#',
            liveLink: '#',
        },
        {
            id: 3,
            title: 'Dashboard Analytics',
            description: 'Interface d\'analyse de données avec graphiques interactifs et rapports personnalisables.',
            image: null,
            tags: ['Vue.js', 'Python', 'PostgreSQL'],
            category: 'web',
            githubLink: '#',
            liveLink: '#',
        },
    ]

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter)

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Mes <span className="text-gold">Projets</span>
                    </h2>
                    <p className="section-subtitle">Découvrez quelques réalisations dont je suis fier</p>
                </div>

                {/* Filters */}
                <div className="projects-filters">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        Tous
                    </button>
                    <button
                        className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
                        onClick={() => setFilter('web')}
                    >
                        Web
                    </button>
                    <button
                        className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
                        onClick={() => setFilter('mobile')}
                    >
                        Mobile
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card card animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="project-placeholder">
                                        <span className="project-placeholder-icon">🚀</span>
                                    </div>
                                )}
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.githubLink} className="project-link" aria-label="View on GitHub">
                                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                        <a href={project.liveLink} className="project-link" aria-label="View live demo">
                                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-note">
                    <p>🚧 Plus de projets à venir bientôt !</p>
                </div>
            </div>
        </section>
    )
}

export default Projects

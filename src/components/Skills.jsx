import React from 'react'
import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Langages',
            icon: '💻',
            skills: [
                { name: 'JavaScript', level: 80 },
                { name: 'Java', level: 85 },
                { name: 'Python', level: 85 },
                { name: 'PHP', level: 90 },
                { name: 'Dart', level: 85 },
                { name: 'HTML/CSS', level: 90 },
                { name: 'SQL', level: 85 },
            ]
        },
        {
            title: 'Frameworks & Outils',
            icon: '🛠️',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'Flutter', level: 80 },
                { name: 'Android (Java)', level: 85 },
                { name: 'WordPress', level: 80 },
                { name: 'Docker', level: 75 },
                { name: 'Jenkins', level: 70 },
                { name: 'JUnit', level: 80 },
                { name: 'Linux', level: 85 },
            ]
        },
        {
            title: 'Bases de données',
            icon: '🗄️',
            skills: [
                { name: 'MySQL', level: 85 },
                { name: 'PostgreSQL', level: 90 },
                { name: 'MongoDB', level: 80 },
                { name: 'Redis', level: 75 },
                { name: 'CockroachDB', level: 70 },
            ]
        },
        {
            title: 'Méthodes',
            icon: '📋',
            skills: [
                { name: 'Analyse des besoins', level: 85 },
                { name: 'Modélisation', level: 80 },
                { name: 'Gestion de projet', level: 80 },
                { name: 'Tests & Intégration', level: 85 },
            ]
        },
    ]

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <h2 className="section-title">
                        Mes <span className="text-gold">Compétences</span>
                    </h2>
                    <p className="section-subtitle">Technologies et outils que je maîtrise</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="technologies-showcase">
                    <h3 className="showcase-title">Technologies favorites</h3>
                    <div className="tech-icons">
                        {['Java', 'PHP', 'Android', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git'].map((tech, index) => (
                            <div key={index} className="tech-badge" style={{ animationDelay: `${index * 0.1}s` }}>
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills

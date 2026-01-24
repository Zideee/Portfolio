import React from 'react'
import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: '🎨',
            skills: [
                { name: 'React', level: 90 },
                { name: 'JavaScript', level: 95 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'TypeScript', level: 85 },
                { name: 'Vue.js', level: 80 },
            ]
        },
        {
            title: 'Backend',
            icon: '⚙️',
            skills: [
                { name: 'Node.js', level: 88 },
                { name: 'Python', level: 85 },
                { name: 'Express', level: 90 },
                { name: 'Flask', level: 82 },
                { name: 'API REST', level: 92 },
            ]
        },
        {
            title: 'Database & Tools',
            icon: '🛠️',
            skills: [
                { name: 'MongoDB', level: 85 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'Git', level: 90 },
                { name: 'Docker', level: 75 },
                { name: 'Firebase', level: 85 },
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
                        {['React', 'Node.js', 'JavaScript', 'Python', 'MongoDB', 'Git', 'Docker', 'Vue.js'].map((tech, index) => (
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

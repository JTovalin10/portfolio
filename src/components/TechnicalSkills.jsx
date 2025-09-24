const TechnicalSkills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", logo: "☕", level: "Advanced" },
                { name: "JavaScript", logo: "🟨", level: "Advanced" },
                { name: "TypeScript", logo: "🔷", level: "Intermediate" },
                { name: "Python", logo: "🐍", level: "Intermediate" },
                { name: "C", logo: "⚙️", level: "Intermediate" },
                { name: "SQL", logo: "🗄️", level: "Advanced" }
            ]
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "React", logo: "⚛️", level: "Advanced" },
                { name: "Node.js", logo: "🟢", level: "Intermediate" },
                { name: "Flask", logo: "🌶️", level: "Intermediate" },
                { name: "HTML/CSS", logo: "🎨", level: "Advanced" },
                { name: "Tailwind CSS", logo: "💨", level: "Intermediate" },
                { name: "Socket.io", logo: "🔌", level: "Beginner" }
            ]
        },
        {
            title: "Databases & Tools",
            skills: [
                { name: "MySQL", logo: "🐬", level: "Advanced" },
                { name: "MongoDB", logo: "🍃", level: "Intermediate" },
                { name: "Microsoft Azure", logo: "☁️", level: "Intermediate" },
                { name: "Git", logo: "📚", level: "Advanced" },
                { name: "Visual Studio Code", logo: "💻", level: "Advanced" },
                { name: "PostgreSQL", logo: "🐘", level: "Intermediate" }
            ]
        },
        {
            title: "Development Practices",
            skills: [
                { name: "REST APIs", logo: "🌐", level: "Advanced" },
                { name: "Database Design", logo: "🏗️", level: "Advanced" },
                { name: "Problem Solving", logo: "🧩", level: "Advanced" },
                { name: "Team Collaboration", logo: "👥", level: "Advanced" },
                { name: "Debugging", logo: "🔍", level: "Advanced" },
                { name: "Version Control", logo: "📝", level: "Advanced" }
            ]
        }
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case 'Advanced': return '#28ca42';
            case 'Intermediate': return '#FFD54F';
            case 'Beginner': return '#ff6b6b';
            default: return '#E1BEE7';
        }
    };

    return (
        <div style={{ padding: '20px', lineHeight: '1.6' }}>
            <div style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
                ⚙️ Technical Skills
            </div>
            
            <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px', marginBottom: '20px' }}>
                    A comprehensive overview of my technical expertise and development tools
                </p>
            </div>

            <div style={{ display: 'grid', gap: '25px' }}>
                {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '16px',
                        padding: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h3 style={{ 
                            margin: '0 0 20px 0', 
                            color: 'rgba(255, 255, 255, 0.95)', 
                            fontSize: '18px',
                            fontWeight: '600',
                            textAlign: 'center'
                        }}>
                            {category.title}
                        </h3>
                        
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                            gap: '15px' 
                        }}>
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} style={{
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '12px',
                                    padding: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <div style={{ fontSize: '24px' }}>{skill.logo}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ 
                                            fontWeight: '500', 
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            marginBottom: '4px'
                                        }}>
                                            {skill.name}
                                        </div>
                                        <div style={{
                                            fontSize: '12px',
                                            color: getLevelColor(skill.level),
                                            fontWeight: '500',
                                            background: `${getLevelColor(skill.level)}20`,
                                            padding: '2px 8px',
                                            borderRadius: '10px',
                                            display: 'inline-block'
                                        }}>
                                            {skill.level}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ 
                marginTop: '30px',
                background: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
                padding: '20px',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center',
                boxShadow: '0 8px 25px rgba(0, 122, 204, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
                <h3 style={{ margin: '0 0 10px 0' }}>💻 Development Environment</h3>
                <p style={{ margin: '0 0 15px 0', opacity: 0.9 }}>
                    Primary development setup and preferred tools
                </p>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '20px',
                    flexWrap: 'wrap'
                }}>
                    <span style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500'
                    }}>
                        Visual Studio Code
                    </span>
                    <span style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500'
                    }}>
                        macOS Development
                    </span>
                    <span style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500'
                    }}>
                        Git Workflow
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TechnicalSkills;

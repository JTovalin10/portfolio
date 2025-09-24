import React from 'react'

const TechnicalSkills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", logo: "☕" },
                { name: "JavaScript", logo: "🟨" },
                { name: "TypeScript", logo: "🔷" },
                { name: "Python", logo: "🐍" },
                { name: "C", logo: "⚙️" },
                { name: "C++", logo: "⚙️" },
                { name: "SQL", logo: "🗄️" }
            ]
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "React", logo: "⚛️" },
                { name: "Node.js", logo: "🟢" },
                { name: "Flask", logo: "🌶️" },
                { name: "REST APIs", logo: "🌐" },
                { name: "API Design", logo: "🔗" }
            ]
        },
        {
            title: "Databases & Cloud",
            skills: [
                { name: "MySQL", logo: "🐬" },
                { name: "Database Programming", logo: "🗄️" },
                { name: "Microsoft Azure", logo: "☁️" },
                { name: "Back-end Development", logo: "⚡" }
            ]
        },
        {
            title: "Development Tools",
            skills: [
                { name: "Git", logo: "📚" },
                { name: "Version Control", logo: "📝" },
                { name: "Visual Studio Code", logo: "💻" },
                { name: "Terminal", logo: "💻" },
                { name: "Linux/Windows Environment", logo: "🖥️" }
            ]
        },
        {
            title: "Development Practices",
            skills: [
                { name: "Object-Oriented Programming (OOP)", logo: "🏗️" },
                { name: "Problem-Solving Skills", logo: "🧩" },
                { name: "Debugging", logo: "🔍" },
                { name: "Troubleshooting", logo: "🔧" },
                { name: "Team Collaboration", logo: "👥" },
                { name: "Communication", logo: "💬" },
                { name: "Teamwork & Leadership", logo: "👑" },
                { name: "Interpersonal Skills", logo: "🤝" },
                { name: "Verbal Communication", logo: "🗣️" },
                { name: "Compliance", logo: "📋" }
            ]
        }
    ];

    return (
        <div className="h-full overflow-y-auto bg-white">
            <div className="p-6">
                {/* Header Section */}
                <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="text-3xl">⚙️</div>
                        <h1 className="text-2xl font-bold text-gray-900">Technical Skills</h1>
                    </div>
                    <p className="text-base text-gray-600">
                        A comprehensive overview of my technical expertise
                    </p>
                </div>

                {/* Development Environment Section */}
                <div style={{
                    background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
                    borderRadius: '8px',
                    padding: '16px',
                    color: 'white',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    marginBottom: '24px'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', marginBottom: '8px' }}>💻</div>
                        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>Development Environment</h3>
                        <p style={{ color: '#dbeafe', fontSize: '14px', marginBottom: '16px' }}>
                            My primary development setup and workflow
                        </p>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
                            <span style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600',
                                border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}>
                                macOS Development
                            </span>
                            <span style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600',
                                border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}>
                                VS Code + Extensions
                            </span>
                            <span style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600',
                                border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}>
                                Terminal Workflow
                            </span>
                            <span style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600',
                                border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}>
                                Git Workflow
                            </span>
                        </div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="space-y-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center border-b border-gray-300 pb-2">
                                {category.title}
                            </h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="bg-white rounded-md p-3 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3">
                                            <div className="text-xl w-8 h-8 flex items-center justify-center">
                                                {skill.logo}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-gray-900 text-sm">
                                                    {skill.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom padding to ensure content is fully visible */}
                <div className="h-8"></div>
            </div>
        </div>
    );
};

export default TechnicalSkills;
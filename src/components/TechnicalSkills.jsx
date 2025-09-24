import React from 'react'

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

    const getProficiencyBadge = (level) => {
        const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
        
        switch (level) {
            case 'Advanced':
                return `${baseClasses} bg-emerald-500 text-white`
            case 'Intermediate':
                return `${baseClasses} bg-amber-500 text-gray-900`
            case 'Beginner':
                return `${baseClasses} bg-blue-500 text-white`
            default:
                return `${baseClasses} bg-gray-500 text-white`
        }
    };

    return (
        <div className="p-8 bg-white min-h-full">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="text-4xl">⚙️</div>
                    <h1 className="text-3xl font-bold text-gray-900">Technical Skills</h1>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    A comprehensive overview of my technical expertise and development tools
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center border-b border-gray-300 pb-3">
                            {category.title}
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                                    <div className="flex items-center gap-3">
                                        <div className="text-2xl w-8 h-8 flex items-center justify-center">
                                            {skill.logo}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-gray-900 text-sm mb-2 truncate">
                                                {skill.name}
                                            </h3>
                                            <span className={getProficiencyBadge(skill.level)}>
                                                {skill.level}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Development Environment Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white shadow-lg">
                <div className="text-center mb-6">
                    <div className="text-3xl mb-3">💻</div>
                    <h3 className="text-2xl font-bold mb-2">Development Environment</h3>
                    <p className="text-blue-100 text-lg">
                        Primary development setup and preferred tools
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-white border-opacity-30">
                        Visual Studio Code
                    </span>
                    <span className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-white border-opacity-30">
                        macOS Development
                    </span>
                    <span className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-white border-opacity-30">
                        Git Workflow
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TechnicalSkills;

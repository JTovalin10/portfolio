import React from 'react'

const Interests = () => {
    const interests = [
        {
            id: 'technology',
            title: 'Technology & Innovation',
            icon: '💻',
            description: 'Staying up-to-date with the latest tech trends and emerging technologies',
            details: [
                'AI and Machine Learning developments',
                'New hardware and how technology is improving',
                'Staying on top of new products',
                'Cybersecurity and privacy',
                'Open source software'
            ]
        },
        {
            id: 'math',
            title: 'Mathematics',
            icon: '📐',
            description: 'Exploring how math pushes limits and its applications to computer science',
            details: [
                'Statistics and probability applications to CS',
                'The overlap of math and CS that drew me to programming',
                'Learning how math pushes limits',
                'Mathematical foundations of algorithms'
            ]
        },
        {
            id: 'learning',
            title: 'Continuous Learning',
            icon: '📚',
            description: 'Always expanding my knowledge and skills in various domains',
            details: [
                'Online courses',
                'Technical documentation and tutorials',
                'Learning new algorithms and deepening my understanding of algorithmic concepts',
                'Personal projects and experimentation'
            ]
        },
        {
            id: 'community',
            title: 'Community & Networking',
            icon: '🤝',
            description: 'Building connections and contributing to the developer community',
            details: [
                'Going to hackathons',
                'Working with others and helping others grow',
                'Knowledge sharing',
                'Professional networking'
            ]
        }
    ]

    return (
        <div className="interests-container">
            <div className="interests-header">
                <h1 className="interests-title">Interests & Passions</h1>
                <p className="interests-subtitle">Beyond coding, these are the areas that drive my curiosity and growth</p>
            </div>

            <div className="interests-grid">
                {interests.map((interest) => (
                    <div key={interest.id} className="interest-card">
                        <div className="interest-card-header">
                            <div className="interest-icon">{interest.icon}</div>
                            <h3 className="interest-title">{interest.title}</h3>
                        </div>
                        <p className="interest-description">{interest.description}</p>
                        <ul className="interest-details">
                            {interest.details.map((detail, index) => (
                                <li key={index} className="interest-detail">{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="interests-footer">
                <div className="footer-icon">🌟</div>
                <h3 className="footer-title">Always Learning</h3>
                <p className="footer-description">
                    These interests fuel my passion for technology and drive me to continuously improve and innovate.
                </p>
            </div>
        </div>
    )
}

export default Interests

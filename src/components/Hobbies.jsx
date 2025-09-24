import { useState } from 'react'

const Hobbies = () => {
    const [activeTab, setActiveTab] = useState('hiking')

    const hobbies = [
        {
            id: 'hiking',
            title: 'Hiking',
            icon: '🥾',
            description: 'Exploring trails and connecting with nature in the Pacific Northwest',
            photos: [
                {
                    id: 1,
                    caption: 'Forest Trails',
                    description: 'Peaceful walks through old-growth forests and moss-covered paths',
                    placeholder: '🌲'
                },
                {
                    id: 2,
                    caption: 'Lake Hikes',
                    description: 'I like hikes with water (favorite being Crater Lake)',
                    placeholder: '🏞️'
                }
            ]
        },
        {
            id: 'fitness',
            title: 'Fitness',
            icon: '💪',
            description: 'Maintaining physical health through various forms of exercise and training',
            photos: [
                {
                    id: 1,
                    caption: 'Strength Training',
                    description: 'Regular weightlifting and resistance training sessions',
                    placeholder: '🏋️'
                },
                {
                    id: 2,
                    caption: 'Cardio Workouts',
                    description: 'Running, cycling, and high-intensity interval training',
                    placeholder: '🏃'
                },
                {
                    id: 3,
                    caption: 'Swimming',
                    description: 'Ex-competitive swimmer but still swimming to get a good workout',
                    placeholder: '🏊'
                },
                {
                    id: 4,
                    caption: 'Supplements & Nutrition',
                    description: 'I like to learn about supplements and optimal dosages',
                    placeholder: '💊'
                }
            ]
        },
        {
            id: 'gaming',
            title: 'Gaming',
            icon: '🎮',
            description: 'Exploring immersive worlds across RPGs, horror, and multiplayer games on PS5 and PC',
            photos: [
                {
                    id: 1,
                    caption: 'RPG Adventures',
                    description: 'My favorite games are: Nier Automata, Persona (3-5)',
                    placeholder: '⚔️'
                },
                {
                    id: 2,
                    caption: 'Horror Games',
                    description: 'My favorite are: Amnesia, Silent Hill 2, and want to play Alien Isolation',
                    placeholder: '👻'
                },
                {
                    id: 3,
                    caption: 'Multiplayer Games',
                    description: 'Marvel Rivals, Monster Hunter Wilds, No Man\'s Sky - competitive and cooperative gaming',
                    placeholder: '🌌'
                },
                {
                    id: 4,
                    caption: 'PC Gaming Setup',
                    description: 'AMD Ryzen 5 5600X, RX 7700 XT, 32GB RAM with Acer 1440p IPS monitor',
                    placeholder: '💻'
                },
                {
                    id: 5,
                    caption: 'PS5 Console',
                    description: 'My couch console - perfect for relaxing gaming sessions',
                    placeholder: '🎯'
                }
            ]
        }
    ];

    const activeHobby = hobbies.find(hobby => hobby.id === activeTab);

    console.log('Current active tab:', activeTab);

    return (
        <div className="hobbies-container">
            {/* macOS-style Tab Navigation */}
            <div className="hobbies-tab-bar">
                {hobbies.map((hobby, index) => (
                    <button
                        key={hobby.id}
                        onClick={() => setActiveTab(hobby.id)}
                        className={`hobby-tab ${activeTab === hobby.id ? 'active' : ''}`}
                        style={{
                            '--tab-index': index
                        }}
                    >
                        <div className="tab-icon">{hobby.icon}</div>
                        <div className="tab-label">{hobby.title}</div>
                        {activeTab === hobby.id && (
                            <div className="tab-indicator"></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="hobbies-content">
                {/* Active Tab Header */}
                <div className="hobby-header">
                    <div className="hobby-title">
                        <span className="hobby-title-icon">{activeHobby.icon}</span>
                        <span className="hobby-title-text">{activeHobby.title}</span>
                    </div>
                    <p className="hobby-description">{activeHobby.description}</p>
                </div>

                {/* Photo Gallery */}
                <div className="hobby-gallery">
                    {activeHobby.photos.map((photo) => (
                        <div key={photo.id} className="hobby-card">
                            <div className="hobby-card-image">
                                {photo.placeholder}
                            </div>
                            <div className="hobby-card-content">
                                <h4 className="hobby-card-title">{photo.caption}</h4>
                                <p className="hobby-card-description">{photo.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Personal Note */}
                <div className="hobby-footer">
                    <div className="footer-icon">🌟</div>
                    <h3 className="footer-title">Life Beyond Code</h3>
                    <p className="footer-description">
                        These hobbies help me maintain a healthy work-life balance and bring fresh perspectives to my development work.
                    </p>
                    <div className="footer-quote">
                        "The best developers are those who understand that great code comes from a well-rounded life."
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;

import React from 'react';

const DesktopIcons = ({ onOpenWindow }) => {
    const icons = [
        {
            id: 'hiking',
            name: 'Hiking',
            icon: '🏔️',
            type: 'hobbies',
            title: 'Hobbies & Interests',
            color: 'linear-gradient(135deg, #28ca42 0%, #2ecc71 100%)',
            position: { top: '10%', left: '5%' }
        },
        {
            id: 'photography',
            name: 'Photography',
            icon: '📸',
            type: 'hobbies',
            title: 'Hobbies & Interests',
            color: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
            position: { top: '25%', left: '8%' }
        },
        {
            id: 'gaming',
            name: 'Gaming',
            icon: '🎮',
            type: 'hobbies',
            title: 'Hobbies & Interests',
            color: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
            position: { top: '15%', right: '10%' }
        },
        {
            id: 'fitness',
            name: 'Fitness',
            icon: '💪',
            type: 'hobbies',
            title: 'Hobbies & Interests',
            color: 'linear-gradient(135deg, #FFD54F 0%, #FFC107 100%)',
            position: { top: '30%', right: '7%' }
        }
    ];

    const handleIconClick = (item) => {
        onOpenWindow(item.type, item.title, null);
    };

    return (
        <div className="desktop-icons-container">
            {icons.map((item) => (
                <div
                    key={item.id}
                    className="desktop-icon"
                    onClick={() => handleIconClick(item)}
                    title={item.name}
                    style={{
                        position: 'absolute',
                        top: item.position.top,
                        left: item.position.left,
                        right: item.position.right,
                        width: '80px',
                        height: '80px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        color: 'white',
                        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                        zIndex: 10
                    }}
                >
                    <div
                        style={{
                            width: '60px',
                            height: '60px',
                            background: item.color,
                            borderRadius: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            marginBottom: '5px'
                        }}
                    >
                        {item.icon}
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default DesktopIcons;

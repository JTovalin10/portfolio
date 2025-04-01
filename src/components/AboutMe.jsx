import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import CommandInput from './CommandInput';

const AboutMe = ({ onCommand }) => {
    const [animationComplete, setAnimationComplete] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [showInput, setShowInput] = useState(false);
    
    const happyShiba = `   /\\___/\\
  (  ^ᴥ^  )
  \\  ---  /
   \\_____/`;
    
    const introduction = happyShiba + "\n\nMy name is Justin Hernandez-Tovalin and I am a Computer Science student at the University of Washington - Seattle. " +
                        "I am skilled with ";
    
    // Set showInput to true after animation completes
    useEffect(() => {
        if (animationComplete) {
            setShowInput(true);
        }
    }, [animationComplete]);
    
    // Handle user commands
    const handleCommand = (command) => {
        const cmd = command.trim().toLowerCase();
        
        if (cmd === 'menu' || cmd === 'back' || cmd === 'home') {
            // Call the parent's onCommand function to navigate back
            onCommand(cmd);
        }
    };
    
    return (
        <>
            <TypeAnimation
                sequence={[
                    introduction,
                    () => setAnimationComplete(true)
                ]}
                wrapper="span"
                speed={80}
                style={{ 
                    fontSize: '1em', 
                    fontFamily: 'monospace',
                    whiteSpace: 'pre-wrap'
                }}
                cursor={false}
            />
            
            {animationComplete && (
                <>
                    <TypeAnimation
                        sequence={[
                            "HTML/CSS", 1000,
                            "JavaScript", 1000,
                            "TypeScript", 1000,
                            "React", 1000,
                            "Node.js", 1000,
                            "Java", 1000,
                            "Python", 1000,
                            "SQL", 1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                            fontSize: '1em', 
                            fontFamily: 'monospace',
                            whiteSpace: 'pre-wrap'
                        }}
                        repeat={Infinity}
                    />
                    
                    <div style={{ marginTop: '20px' }}>
                        <TypeAnimation
                            sequence={[
                                "\n\nType 'menu' to go back to main menu.\n$ "
                            ]}
                            wrapper="span"
                            speed={80}
                            style={{ 
                                fontSize: '1em', 
                                fontFamily: 'monospace',
                                whiteSpace: 'pre-wrap'
                            }}
                            cursor={false}
                        />
                        
                        {showInput && (
                            <CommandInput
                                userInput={userInput}
                                setUserInput={setUserInput}
                                onEnterPress={handleCommand}
                                animationComplete={true}
                            />
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default AboutMe;
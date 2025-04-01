import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import CommandInput from './CommandInput';

const Menu = ({ onCommand, secrets = 0 }) => {
    const [animationComplete, setAnimationComplete] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [showInput, setShowInput] = useState(false);
    
    // Set showInput to true after animation completes
    useEffect(() => {
        if (animationComplete) {
            setShowInput(true);
        }
    }, [animationComplete]);
    
    // Handle user commands
    const handleCommand = (command) => {
        // Pass the command up to the parent component
        onCommand(command);
    };
    
    return (
        <>
            <TypeAnimation
                sequence={[
                    "Welcome to Justin Hernandez-Tovalin Portfolio! \n" +
                    "Options \n" +
                    "1. About Me \n" +
                    "2. Résumé \n" +
                    "3. Past Projects \n" + 
                    "4. Contact Me \n" +
                    secrets + "/5 found \n$ ",
                    () => setAnimationComplete(true)
                ]}
                wrapper="span"
                speed={90}
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
        </>
    );
};

export default Menu;
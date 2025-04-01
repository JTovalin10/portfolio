import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import CommandInput from './CommandInput';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Menu from './Menu'

const MainMenu = () => {
    const [secrets, setSecrets] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [animationComplete, setAnimationComplete] = useState(false);
    const [currentView, setCurrentView] = useState('menu');
    const [isClearing, setIsClearing] = useState(false);

    // Handle animation completion
    useEffect(() => {
        if (isClearing) {
            // After clearing is complete, reset for the next animation
            setIsClearing(false);
            setAnimationComplete(false);
        }
    }, [isClearing]);

    // Process user commands
    const processCommand = (command) => {
        const cmd = command.trim().toLowerCase();
        let validCommand = true;
        let newView = '';
        
        switch(cmd) {
            case '1':
            case 'about':
            case 'about me':
                newView = 'about';
                break;
            case '2':
            case 'resume':
            case 'résumé':
                newView = 'resume';
                break;
            case '3':
            case 'projects':
            case 'past projects':
                newView = 'projects';
                break;
            case '4':
            case 'contact':
            case 'contact me':
                newView = 'contact';
                break;
            case 'menu':
            case 'home':
            case 'back':
                newView = 'menu';
                break;
            case 'secret':
                // Found a secret!
                if (secrets < 5) {
                    setSecrets(prev => prev + 1);
                }
                newView = 'secret';
                break;
            default:
                validCommand = false;
        }

        // If valid command, change view after clearing the screen
        if (validCommand && newView !== currentView) {
            setAnimationComplete(false); // Hide input during transition
            
            // Start clearing animation
            setIsClearing(true);
            
            // After a short delay, change the view
            setTimeout(() => {
                setCurrentView(newView);
            }, 100);
        }
    };

    // Get content for clearing animation
    const getClearingContent = () => {
        return "\n\n\n\n\n\n\n\n\n\n";  // Multiple line breaks to clear the screen
    };

    // Render the correct component based on currentView
    const renderCurrentView = () => {
        switch(currentView) {
            case 'menu':
                return <Menu onCommand={processCommand}/>;
            case 'about':
                return <AboutMe onCommand={processCommand}/>;
            case 'resume':
                return (
                    <Resume 
                      onCommand={processCommand} 
                      setAnimationComplete={setAnimationComplete} 
                    />
                  );
            case 'projects':
                // Placeholder until you create the Projects component
                return (
                    <TypeAnimation
                        sequence={[
                            "Past Projects \n" +
                            "============= \n\n" +
                            "• Project 1 - Description\n" +
                            "• Project 2 - Description\n" +
                            "• Project 3 - Description\n\n" +
                            "Type 'menu' to return to main menu \n$ ",
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
                );
            case 'contact':
                // Placeholder until you create the Contact component
                return (
                    <TypeAnimation
                        sequence={[
                            "Contact Me \n" +
                            "========== \n\n" +
                            "Email: email@example.com\n" +
                            "LinkedIn: linkedin.com/in/yourprofile\n" +
                            "GitHub: github.com/yourusername\n\n" +
                            "Type 'menu' to return to main menu \n$ ",
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
                );
            case 'secret':
                // Placeholder until you create the Secret component
                return (
                    <TypeAnimation
                        sequence={[
                            "SECRET FOUND! \n" +
                            "============= \n\n" +
                            "You've discovered secret " + secrets + " of 5!\n\n" +
                            "Type 'menu' to return to main menu \n$ ",
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
                );
            default:
                return (
                    <TypeAnimation
                        sequence={[
                            "Command not recognized. \n" +
                            "Type 'menu' to see available options \n$ ",
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
                );
        }
    };

    return (
        <div className="terminal-container">
            <div className="terminal-content">
                {isClearing ? (
                    // Clearing animation
                    <TypeAnimation
                        sequence={[
                            getClearingContent(),
                            () => setIsClearing(false) // Mark clearing as complete
                        ]}
                        wrapper="span"
                        speed={1}  // Fast clearing
                        style={{ 
                            fontSize: '1em', 
                            fontFamily: 'monospace',
                            whiteSpace: 'pre-wrap'
                        }}
                        cursor={false}
                    />
                ) : (
                    // Content for current view
                    <div key={currentView}>
                        {renderCurrentView()}
                    </div>
                )}
                
                <CommandInput 
                    userInput={userInput}
                    setUserInput={setUserInput}
                    onEnterPress={processCommand}
                    animationComplete={animationComplete && !isClearing}
                />
            </div>
        </div>
    );
};

export default MainMenu;
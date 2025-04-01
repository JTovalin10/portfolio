import { useRef, useEffect } from 'react';

const CommandInput = ({ userInput, setUserInput, onEnterPress, animationComplete }) => {
  const inputRef = useRef(null);

  // Focus the input when animation completes
  useEffect(() => {
    if (animationComplete && inputRef.current) {
      inputRef.current.focus();
    }
  }, [animationComplete]);

  // Handle input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle key press - check for Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Prevent the default form submission behavior
      e.preventDefault();
      
      // Call the passed in function to process the command
      onEnterPress(userInput);
      
      // Clear the input
      setUserInput('');
    }
  };

  return animationComplete ? (
    <input 
      name="userInput" 
      ref={inputRef} 
      value={userInput}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      autoFocus
      style={{
        background: 'transparent',
        border: 'none',
        outline: 'none',
        fontSize: '1em',
        fontFamily: 'monospace',
        width: 'calc(100% - 20px)',
        padding: 0
      }}
    />
  ) : null;
};

export default CommandInput;
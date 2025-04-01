import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import CommandInput from './CommandInput';

const Resume = ({ setAnimationComplete, onCommand }) => {
    const [userInput, setUserInput] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [animationComplete, setLocalAnimationComplete] = useState(false);

    useEffect(() => {
        if (animationComplete) {
            setShowInput(true);
            // Also notify parent component that animation is complete
            setAnimationComplete(true);
        }
    }, [animationComplete, setAnimationComplete]);
    
    // Handle user commands
    const handleCommand = (command) => {
        const cmd = command.trim().toLowerCase();
        
        if (cmd === 'menu' || cmd === 'back' || cmd === 'home') {
            // Call the parent's onCommand function to navigate back
            onCommand(cmd);
        } else if (cmd === 'download' || cmd === 'resume' || cmd === '1') {
            // Open resume PDF in a new tab
            window.open('https://drive.google.com/file/d/1T218CP7fhTvMNWqAwZCJt90XKguSz417/view?usp=sharing', '_blank');
        }
    };

    return (
        <>
            <TypeAnimation
                sequence={[
                    "JUSTIN HERNANDEZ-TOVALIN\n" +
                    "Jherna3@uw.edu | (253) 205-7966 | https://www.linkedin.com/in/justin-hernandez-tovalin-uw2026 | Seattle, WA\n" +
                    "------------------------------------------------------------\n" +
                    "\n" +
                    "EDUCATION\n" +
                    "------------------------------------------------------------\n" +
                    "University of Washington, Seattle, WA| Computer Science June 2026\n" +
                    "- Relevant Coursework: Computer Programming (Java), Introduction to Databases Systems (SQL, Relational\n" +
                    "  Databases), Systems Programming (C), Web Development (HTML, CSS, JavaScript, SQL, Node.Js)\n" +
                    "\n" +
                    "WORK EXPERIENCE\n" +
                    "------------------------------------------------------------\n" +
                    "Planet Fitness, Milton, WA |Crew Member March 2022 - September 2024\n" +
                    "- Trained 5+ new employees to use DataTrak efficiently, increasing operational efficiency by 25% through system\n" +
                    "  shortcuts.\n" +
                    "- Used problem-solving skills to reduce manual check-in time by 50% with barcode updates, improving member\n" +
                    "  flow during peak hours.\n" +
                    "- Promoted a positive team environment through effective communication.\n" +
                    "\n" +
                    "Personal Projects\n" +
                    "------------------------------------------------------------\n" +
                    "E-Learning Portal, Seattle, WA |HTML/CSS, TypeScript, SQL, Flask January 2025 - Present\n" + 
                    "- Designed and implemented role-based permissions to differentiate access for admins, instructors, and students.\n" +
                    "- Created RESTful APIs in Flask to enable seamless interaction between the frontend and backend for managing\n" +
                    "  courses, user data, and enrollment.\n" +
                    "- Developed interactive forms and client-side validation using TypeScript to ensure smooth and error-free user input.\n" +
                    "- Designed and normalized a relational database schema to manage user accounts, course details, and enrollment\n" +
                    "  data.\n" +
                    "\n" +
                    "E-Commerce Store, Seattle, WA | HTML/CSS, JavaScript, SQL, Node.js December 2024 - December 2024\n" + 
                    "- Designed and developed a fully functional e-commerce website using Node.js, JavaScript, CSS, and HTML.\n" +
                    "- Built a robust backend architecture to handle product listings, user accounts, and secure transaction processes.\n" +
                    "- Implemented dynamic frontend features using JavaScript, enhancing user experience with responsive design and\n" +
                    "  interactivity.\n" +
                    "- Applied principles of full-stack development to integrate server-side logic with client-side functionality.\n" +
                    "\n" +
                    "Appointment Reservation System, Seattle, WA | Java, SQL, Azure November 2024 - November 2024\n" + 
                    "- Designed and implemented a command-line vaccine scheduling application using Java and SQL, hosted on\n" +
                    "  Microsoft Azure.\n" +
                    "- Designed and implemented a relational database schema on Microsoft Azure to manage patient, caregiver, vaccine,\n" +
                    "  and reservation data for a vaccine scheduling application.\n" +
                    "- Built core functionalities including user authentication, appointment scheduling, and inventory management.\n" +
                    "\n" +
                    "AWARDS & SCHOLARSHIPS\n" +
                    "------------------------------------------------------------\n" +
                    "Washington State Opportunity Scholarship, Seattle, WA | WSOS Scholar September 2022 - Present\n" +
                    "- Demonstrated commitment to academic excellence and a career in STEM-related fields.\n" +
                    "- Selected for prestigious public-private partnership scholarship supporting students in STEM and health care fields.\n" +
                    "\n" +
                    "Hispanic Scholarship Fund, Seattle, WA | Hispanic Scholarship Fund Scholar September 2022 - Present\n" +
                    "- Demonstrated commitment to education and community involvement through leadership and academic\n" +
                    "  achievements.\n" +
                    "- Earned competitive financial support, selected from a national pool of high-performing Hispanic students.\n" +
                    "\n" +
                    "SKILLS AND INTERESTS\n" +
                    "------------------------------------------------------------\n" +
                    "Technical skills: Programming (Java, HTML/CSS, JavaScript, TypeScript, Node.js, Python, Flask, and MySQL), Microsoft\n" +
                    "Azure, Database Programming, Visual Studio Code, Terminal, Problem-Solving Skills, Communication, Teamwork & Leadership,\n" +
                    "Collaboration, Debugging, API Design, REST APIs\n" +
                    "\n" +
                    "Languages: English (Native), Spanish (Fluent)\n" +
                    "\n" +
                    "Interests: Math, weightlifting, video games, programming, algorithms, swimming, PC hardware, personal finance, credit,\n" +
                    "investing, web development, learning emerging technologies, user interfaces\n"
                    ,
                    () => setLocalAnimationComplete(true)
                ]}
                wrapper="span"
                speed={99}
                style={{ 
                    fontSize: '1em', 
                    fontFamily: 'monospace',
                    whiteSpace: 'pre-wrap'
                }}
                cursor={false}
            />
            
            {animationComplete && (
                <div style={{ marginTop: '20px' }}>
                    <TypeAnimation
                        sequence={[
                            "\n\nType 'menu' to go back to main menu.\nType 'download', 'resume', or '1' to download my resume as PDF.\n$ "
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
            )}
        </>
    );
};

export default Resume;
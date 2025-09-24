import React from 'react'
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

// Reusable Resume Section Component
const ResumeSection = ({ title, children, className = "" }) => (
  <div className={`mt-10 ${className}`}>
    <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
      {title}
    </h2>
    {children}
  </div>
)

// Contact Info Component
const ContactInfo = ({ contact }) => (
  <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-900 text-base mb-8">
    <div className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-gray-900" />
      <span>{contact.location}</span>
    </div>
    <div className="flex items-center gap-2">
      <FaLinkedin className="text-gray-900" />
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 transition-colors">
        LinkedIn
      </a>
    </div>
    <div className="flex items-center gap-2">
      <FaGithub className="text-gray-900" />
      <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 transition-colors">
        GitHub
      </a>
    </div>
  </div>
)

// Experience Item Component
const ExperienceItem = ({ experience }) => (
  <div className="mb-6">
    <div className="flex justify-between items-baseline">
      <h3 className="text-lg font-semibold text-gray-900">{experience.title}</h3>
      <span className="text-sm text-gray-500">{experience.dates}</span>
    </div>
    <p className="text-base text-gray-700 mb-2">{experience.company}</p>
    
    {/* Inline styles to guarantee bullet points render correctly */}
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      {experience.description.map((point, index) => (
        <li 
          key={index}
          className="mb-1 text-gray-900"
          dangerouslySetInnerHTML={{ __html: point }}
        />
      ))}
    </ul>
  </div>
)

// Education Item Component
const EducationItem = ({ education }) => (
  <div className="mb-6">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{education.degree}</h3>
        <p className="text-base text-gray-700 mb-1">{education.university}</p>
        <p className="text-sm text-gray-600">{education.location}</p>
      </div>
      <span className="text-sm text-gray-600 font-medium">{education.graduationDate}</span>
    </div>
    {education.coursework && (
      <div className="mt-2">
        <p className="text-base text-gray-900 font-semibold mb-1">Relevant Coursework:</p>
        <ul className="ml-6 space-y-1">
          {education.coursework.split(', ').map((course, index) => (
            <li key={index} className="text-base text-gray-900 leading-relaxed list-disc">
              {course.trim()}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)

// Project Item Component
const ProjectItem = ({ project }) => (
  <div className="mb-6">
    <div className="flex justify-between items-baseline">
      <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
      <span className="text-sm text-gray-500">{project.dates}</span>
    </div>
    <p className="text-base text-gray-700 mb-1">{project.technologies}</p>
    
    {/* Inline styles to guarantee bullet points render correctly */}
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      {project.description.map((point, index) => (
        <li 
          key={index}
          className="mb-1 text-gray-900"
          dangerouslySetInnerHTML={{ __html: point }}
        />
      ))}
    </ul>
  </div>
)

// Skills Component
const SkillsSection = ({ skills }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {Object.entries(skills).map(([category, skillList]) => (
      <div key={category} className="bg-white p-4 border border-gray-200 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{category}</h4>
        <ul className="ml-6 space-y-1">
          {skillList.split(', ').map((skill, index) => (
            <li key={index} className="text-base text-gray-900 leading-relaxed list-disc">
              {skill.trim()}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

// Main Resume Component
const Resume = ({ resumeData: propResumeData }) => {
  const resumeData = propResumeData || defaultResumeData

    return (
    <div className="bg-white px-10 py-8 max-w-4xl mx-auto font-['SF_Pro_Text','Inter',sans-serif] text-gray-900 overflow-y-auto h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{resumeData.name}</h1>
        <p className="text-xl text-gray-700 mb-6">{resumeData.title}</p>
        <ContactInfo contact={resumeData.contact} />
      </div>

      {/* Professional Summary */}
      {resumeData.summary && (
        <ResumeSection title="Professional Summary">
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {resumeData.summary.map((point, index) => (
              <li 
                key={index}
                className="mb-1 text-gray-900"
                dangerouslySetInnerHTML={{ __html: point }}
              />
            ))}
          </ul>
        </ResumeSection>
      )}

      {/* Education */}
      <ResumeSection title="Education">
        {resumeData.education.map((edu, index) => (
          <EducationItem key={index} education={edu} />
        ))}
      </ResumeSection>

      {/* Work Experience */}
      <ResumeSection title="Work Experience">
        {resumeData.experience.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </ResumeSection>

      {/* Personal Projects */}
      <ResumeSection title="Personal Projects">
        {resumeData.projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </ResumeSection>

      {/* Clubs */}
      <ResumeSection title="Clubs">
        {resumeData.clubs.map((club, index) => (
          <ExperienceItem key={index} experience={club} />
        ))}
      </ResumeSection>

      {/* Skills and Interests */}
      <ResumeSection title="Skills and Interests">
        <SkillsSection skills={resumeData.skills} />
      </ResumeSection>
                </div>
  )
}

// Default resume data based on your provided information
const defaultResumeData = {
  name: "Justin Hernandez-Tovalin",
  title: "Software Engineer",
  summary: [
    '<strong>Full-stack developer</strong> with expertise in React, Next.js, and database optimization, delivering scalable solutions for collaborative team environments.',
    'Proven track record of <strong>increasing operational efficiency by 25%</strong> and <strong>reducing manual processes by 50%</strong> through innovative problem-solving and technical implementation.'
  ],
  contact: {
    location: "Seattle, WA",
    linkedin: "https://www.linkedin.com/in/justin-hernandez-tovalin-uw2026",
    github: "https://github.com/JTovalin10"
  },
  education: [
    {
      degree: "Computer Science",
      university: "University of Washington",
      location: "Seattle, WA",
      graduationDate: "June 2027",
      coursework: "Computer Programming, Introduction to Databases Systems, Systems Programming, Web Development, Data Structures and Algorithms"
    }
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "VNL Entertainment Games",
      location: "Seattle, WA",
      dates: "April 2025 – Present",
      description: [
        'Engineered responsive <strong>React components</strong> within Next.js framework, <strong>enhancing website performance</strong> and maintainability.',
        'Streamlined development workflow with 4 teammates, ensuring <strong>consistent code integration</strong> and timely delivery.',
        'Optimized <strong>NoSQL database queries</strong>, <strong>improving data retrieval speeds</strong> and application responsiveness.',
        'Crafted responsive UI elements using Bootstrap, delivering <strong>seamless cross-device experiences</strong>.'
      ]
    },
    {
      title: "Crew Member",
      company: "Planet Fitness",
      location: "Milton, WA",
      dates: "March 2022 – September 2024",
      description: [
        'Trained <strong>5+ new employees</strong> on DataTrak, <strong>increasing operational efficiency by 25%</strong> through system shortcuts.',
        'Reduced manual check-in time by <strong>50%</strong> with barcode updates, improving member flow during peak hours.',
        'Promoted positive team environment through effective communication and leadership.'
      ]
    }
  ],
  projects: [
    {
      name: "Gradescope-Plus",
      location: "Seattle, WA",
      dates: "April 2025 - April 2025",
      technologies: "React, TailwindCSS, TypeScript",
      description: [
        'Engineered high-performance React TypeScript application with <strong>secure authentication and 2FA</strong>.',
        'Designed responsive dashboard UI with <strong>color-coded visual indicators</strong> for assignment prioritization.',
        'Architected robust API integration with <strong>retry mechanisms</strong> and comprehensive error handling.'
      ]
    },
    {
      name: "E-Commerce Store",
      location: "Seattle, WA",
      dates: "December 2024 - December 2024",
      technologies: "HTML/CSS, JavaScript, SQL, Node.js",
      description: [
        'Developed fully functional e-commerce website using <strong>Node.js and JavaScript</strong>.',
        'Built robust backend architecture handling <strong>product listings and secure transactions</strong>.',
        'Implemented dynamic frontend features with <strong>responsive design</strong> and enhanced user experience.'
      ]
    }
  ],
  clubs: [
    {
      title: "Software Engineer, Community Outreach",
      company: "Software Engineer Career Club",
      location: "Seattle, WA",
      dates: "April 2025 - Present",
      description: [
        'Engineered career advancement applications through <strong>collaborative development cycles</strong>.',
        'Spearheaded Hispanic recruitment initiatives through <strong>targeted community outreach</strong>.',
        'Amplified Hispanic community visibility through <strong>strategic advocacy programs</strong>.'
      ]
    }
  ],
  skills: {
    "Technical Skills": "Programming (Java, HTML/CSS, JavaScript, TypeScript, Node.js, Python, Flask, MySQL, C, C++), Microsoft Azure, Database Programming, Visual Studio Code, Terminal, Problem-Solving Skills, Communication, Teamwork & Leadership, Collaboration, Debugging, API Design, REST APIs, Object-Oriented Programming (OOP), Git, Version Control, Troubleshooting, Interpersonal Skills, Verbal Communication, Compliance, Linux/Windows Environment, Back-end Development",
    "Languages": "English (Native), Spanish (Fluent)",
    "Interests": "Math, weightlifting, video games, programming, algorithms, swimming, PC hardware, personal finance, credit, investing, learning emerging technologies, gaming"
  }
}

// Export the default data for external use
export const resumeData = defaultResumeData

export default Resume
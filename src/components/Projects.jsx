import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A modern, interactive portfolio built with React and Tailwind CSS, featuring a macOS-inspired desktop interface.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      status: "Completed",
      features: ["Responsive Design", "Interactive UI", "Modern Animations", "Mobile Optimized"],
      github: "https://github.com/JTovalin10/portfolio",
      demo: "#",
      image: "💻"
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      description: "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      status: "In Progress",
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Processing"],
      github: "https://github.com/JTovalin10/ecommerce-app",
      demo: "#",
      image: "🛒"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
      status: "Completed",
      features: ["Real-time Updates", "Team Collaboration", "Task Tracking", "Progress Analytics"],
      github: "https://github.com/JTovalin10/task-manager",
      demo: "#",
      image: "📋"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts and data visualization.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
      status: "Completed",
      features: ["Location Detection", "5-Day Forecast", "Interactive Charts", "Responsive Design"],
      github: "https://github.com/JTovalin10/weather-dashboard",
      demo: "#",
      image: "🌤️"
    },
    {
      id: 5,
      title: "Social Media Analytics Tool",
      description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
      technologies: ["Python", "Flask", "Chart.js", "SQLite"],
      status: "In Progress",
      features: ["Data Visualization", "Custom Reports", "Export Functionality", "Real-time Updates"],
      github: "https://github.com/JTovalin10/social-analytics",
      demo: "#",
      image: "📊"
    },
    {
      id: 6,
      title: "Mobile-First Banking App",
      description: "Secure banking application with transaction management and financial planning tools.",
      technologies: ["React Native", "Node.js", "MySQL", "JWT Authentication"],
      status: "Planning",
      features: ["Secure Transactions", "Budget Tracking", "Bill Reminders", "Financial Insights"],
      github: "https://github.com/JTovalin10/banking-app",
      demo: "#",
      image: "🏦"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#28ca42'
      case 'In Progress': return '#FFD54F'
      case 'Planning': return '#9C27B0'
      default: return '#E1BEE7'
    }
  }

  return (
    <div style={{ padding: '20px', height: '100%', overflow: 'auto' }}>
      <h1 style={{
        margin: '0 0 20px 0',
        color: 'rgba(255, 255, 255, 0.95)',
        fontSize: '28px',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        💻 Projects Portfolio
      </h1>

      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <p style={{
          margin: '0',
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '16px',
          lineHeight: '1.6'
        }}>
          A collection of projects showcasing my development skills, from full-stack web applications 
          to mobile-first solutions. Each project demonstrates different aspects of modern software development.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '25px'
      }}>
        {projects.map((project) => (
          <div key={project.id} style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            padding: '25px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-8px)'
            e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)'
            e.target.style.background = 'rgba(255, 255, 255, 0.08)'
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
            e.target.style.background = 'rgba(255, 255, 255, 0.05)'
          }}>
            {/* Project Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                boxShadow: '0 8px 20px rgba(0, 122, 204, 0.3)'
              }}>
                {project.image}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  margin: '0 0 8px 0',
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  {project.title}
                </h3>
                <div style={{
                  display: 'inline-block',
                  background: `${getStatusColor(project.status)}20`,
                  color: getStatusColor(project.status),
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  {project.status}
                </div>
              </div>
            </div>

            {/* Project Description */}
            <p style={{
              margin: '0 0 20px 0',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              {project.description}
            </p>

            {/* Technologies */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{
                margin: '0 0 10px 0',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Technologies Used:
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {project.technologies.map((tech, index) => (
                  <span key={index} style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{
                margin: '0 0 10px 0',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Key Features:
              </h4>
              <ul style={{
                margin: '0',
                padding: '0 0 0 20px',
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '13px',
                lineHeight: '1.5'
              }}>
                {project.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: '4px' }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'flex-end'
            }}>
              <button style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
              }}
              onClick={() => window.open(project.github, '_blank')}>
                View Code
              </button>
              {project.status === 'Completed' && (
                <button style={{
                  background: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
                  border: 'none',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)'
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)'
                }}>
                  Live Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div style={{
        marginTop: '40px',
        background: 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)',
        padding: '25px',
        borderRadius: '12px',
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(156, 39, 176, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h3 style={{ margin: '0 0 15px 0', fontSize: '20px' }}>
          🚀 Interested in Collaborating?
        </h3>
        <p style={{ margin: '0 0 20px 0', opacity: 0.9 }}>
          I'm always excited to work on new projects and collaborate with fellow developers.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onClick={() => window.open('https://github.com/JTovalin10', '_blank')}>
            View All Projects
          </button>
          <button style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onClick={() => {
            // This would open the Contact window
            console.log('Open Contact window')
          }}>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
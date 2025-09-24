import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Outfit Finder",
      description: "Final project for my app development class (CSE 340). Outfit Finder is a Flutter application that helps users choose appropriate clothing based on current weather conditions and location. I worked on a team and led the development of this app that provides real-time outfit suggestions, maintains a digital wardrobe, and offers location-aware clothing recommendations.",
      technologies: ["Dart", "Flutter"],
      status: "Completed",
      features: ["Real-time weather-based outfit suggestions", "Location-aware clothing recommendations", "Digital wardrobe management", "Sample outfits for different weather conditions", "Persistent storage using Isar database", "Provider-based state management", "Weather condition filtering (Sunny, Gloomy, Rainy, Slightly Cloudy)", "Temperature tracking (current, high, low)", "Automatic weather updates every 70 seconds", "Undo/redo functionality for outfit management", "Internationalization support (English, Spanish)"],
      github: "https://github.com/JTovalin10/outfit-finder",
      demo: "#",
      image: "👕"
    },
    {
      id: 2,
      title: "E-Store",
      description: "Class project e-commerce platform with product management and SQLite3 database integration.",
      technologies: ["JavaScript", "SQL", "HTML", "CSS"],
      status: "Completed",
      features: ["Product management", "SQLite3 database integration", "Class project implementation"],
      github: "https://github.com/JTovalin10/E-Commerce-Website",
      demo: "#",
      image: "🛒"
    },
    {
      id: 3,
      title: "GradescopePlus",
      description: "I forked a gradescope-api that someone made and added the web part so that people can see their assignments easier. Simple tool for Gradescope that shows assignments due soon and how many days until they are due.",
      technologies: ["Python", "React"],
      status: "Completed",
      features: ["Assignment due date tracking", "Days until due calculation", "Gradescope integration", "Web interface for easier assignment viewing"],
      github: "https://github.com/JTovalin10/gradescope-api",
      demo: "https://gradescope-plus.vercel.app/",
      image: "📊"
    },
    {
      id: 4,
      title: "Advanced Expense Tracker",
      description: "Expense tracker in terminal that uses OOP in Python and has admin and user roles. Project meant to learn Python programming concepts.",
      technologies: ["Python"],
      status: "Completed",
      features: ["Object-oriented programming", "Admin and user roles", "Terminal-based interface", "Expense tracking functionality"],
      github: "https://github.com/JTovalin10/expenseTrackerAdvanced",
      demo: "#",
      image: "💰"
    },
    {
      id: 5,
      title: "Harmony",
      description: "Cross-platform music platform syncing desktop app. It will use users' laptop resources to link their given playlists so they don't have to pay the websites that can also do this.",
      technologies: ["Electron"],
      status: "In Progress",
      features: ["Cross-platform music syncing", "Desktop application", "Playlist management", "Resource-efficient syncing"],
      github: "https://github.com/JTovalin10/Harmony",
      demo: "#",
      image: "🎵"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#28ca42'
      case 'In Progress': return '#FF6B35'
      case 'Planning': return '#9C27B0'
      default: return '#E1BEE7'
    }
  }

  return (
    <div style={{ padding: '20px', height: '100%', overflow: 'auto' }}>
      <h1 style={{
        margin: '0 0 20px 0',
        color: '#000000',
        fontSize: '28px',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        💻 Projects Portfolio
      </h1>

      <div style={{
        background: 'rgba(0, 0, 0, 0.05)',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <p style={{
          margin: '0',
          color: '#000000',
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
            background: 'rgba(0, 0, 0, 0.05)',
            borderRadius: '16px',
            padding: '25px',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-8px)'
            e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)'
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
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
                  color: '#000000',
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
              color: '#000000',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              {project.description}
            </p>

            {/* Technologies */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{
                margin: '0 0 10px 0',
                color: '#000000',
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
                    background: 'rgba(0, 0, 0, 0.1)',
                    color: '#000000',
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
                color: '#000000',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Key Features:
              </h4>
              <ul style={{
                margin: '0',
                padding: '0 0 0 20px',
                color: '#000000',
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
                background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
                border: 'none',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)'
                e.target.style.boxShadow = '0 6px 16px rgba(255, 107, 107, 0.4)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)'
                e.target.style.boxShadow = '0 4px 12px rgba(255, 107, 107, 0.3)'
              }}
              onClick={() => window.open(project.github, '_blank')}>
                View Code
              </button>
              {project.status === 'Completed' && project.demo !== '#' && (
                <button style={{
                  background: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
                  border: 'none',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(78, 205, 196, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)'
                  e.target.style.boxShadow = '0 6px 16px rgba(78, 205, 196, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.boxShadow = '0 4px 12px rgba(78, 205, 196, 0.3)'
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
import React from 'react'

const AboutMe = () => {
  return (
    <div style={{ padding: '30px', height: '100%', overflow: 'auto', backgroundColor: 'white' }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '60px',
          margin: '0 auto 20px auto',
          boxShadow: '0 10px 30px rgba(0, 122, 204, 0.3)',
          border: '4px solid #e5e7eb',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <img 
            src="/1737058680058.jpeg?v=1" 
            alt="Justin Hernandez-Tovalin"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div style={{
            width: '100%',
            height: '100%',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '60px'
          }}>
            👤
          </div>
        </div>
        
        <h1 style={{
          margin: '0 0 10px 0',
          color: '#1f2937',
          fontSize: '32px',
          fontWeight: '700'
        }}>
          Justin Hernandez-Tovalin
        </h1>
        
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
          color: 'white',
          padding: '8px 20px',
          borderRadius: '20px',
          fontSize: '16px',
          fontWeight: '500',
          marginBottom: '15px'
        }}>
          Computer Science Student
        </div>
        
        <p style={{
          margin: '0',
          color: '#6b7280',
          fontSize: '18px',
          fontWeight: '500'
        }}>
          University of Washington - Seattle
        </p>
      </div>

      {/* About Section */}
      <div style={{
        background: '#f9fafb',
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid #e5e7eb',
        marginBottom: '30px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{
          margin: '0 0 25px 0',
          color: '#1f2937',
          fontSize: '24px',
          fontWeight: '600',
          textAlign: 'center',
          borderBottom: '2px solid #007ACC',
          paddingBottom: '10px'
        }}>
          About Me
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px'
        }}>
          <div>
            <h3 style={{
              margin: '0 0 15px 0',
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🎯 My Mission
            </h3>
            <p style={{
              margin: '0',
              color: '#374151',
              fontSize: '16px',
              lineHeight: '1.6'
            }}>
              I'm deeply fascinated by the intersection of technology and creativity, always seeking to build solutions that make a real impact. 
              My goal is to create software that not only works well but also enhances people's lives.
            </p>
          </div>
          
          <div>
            <h3 style={{
              margin: '0 0 15px 0',
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🚀 My Journey
            </h3>
            <p style={{
              margin: '0',
              color: '#374151',
              fontSize: '16px',
              lineHeight: '1.6'
            }}>
              From building my first "Hello World" program to developing full-stack applications, I've discovered that coding is not just about writing instructions for computers—it's about solving problems and creating experiences.
            </p>
          </div>
        </div>
        
        <div style={{
          marginTop: '25px',
          padding: '20px',
          background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)',
          borderRadius: '12px',
          border: '1px solid #81d4fa'
        }}>
          <h3 style={{
            margin: '0 0 15px 0',
            color: '#0277bd',
            fontSize: '18px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            🎮 Beyond Code
          </h3>
          <p style={{
            margin: '0',
            color: '#01579b',
            fontSize: '16px',
            lineHeight: '1.6'
          }}>
            When I'm not coding, you'll find me exploring the Pacific Northwest through hiking (especially lake hikes), 
            staying active with fitness and swimming, diving into RPG and horror games like Persona 5 and Silent Hill 2, 
            learning about supplements and nutrition, or exploring personal finance and investing.
          </p>
        </div>
      </div>

      {/* Fun Fact Section */}
      <div style={{
        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #f59e0b',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h3 style={{
          margin: '0 0 10px 0',
          color: '#92400e',
          fontSize: '18px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          🐶 Fun Fact
        </h3>
        <p style={{
          margin: '0',
          color: '#78350f',
          fontSize: '16px',
          fontWeight: '500'
        }}>
          My favorite dog breed is the Shiba Inu! That's why you'll see a Shiba Inu logo in the menu bar instead of the traditional Apple logo.
        </p>
      </div>

      {/* Skills Preview */}
      <div style={{
        background: 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)',
        padding: '30px',
        borderRadius: '16px',
        color: 'white',
        boxShadow: '0 10px 30px rgba(156, 39, 176, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        textAlign: 'center'
      }}>
        <h3 style={{ 
          margin: '0 0 20px 0', 
          fontSize: '24px',
          fontWeight: '600'
        }}>
          🚀 Quick Skills Overview
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '12px',
          marginBottom: '20px'
        }}>
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Java', 'Python', 'SQL', 'Git'].map(skill => (
            <div key={skill} style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              textAlign: 'center',
              fontWeight: '500',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              {skill}
            </div>
          ))}
        </div>
        
        <p style={{
          margin: '0',
          fontSize: '16px',
          opacity: 0.9,
          fontWeight: '500'
        }}>
          Click "Technical Skills" in the dock to see my full tech stack!
        </p>
      </div>
    </div>
  )
}

export default AboutMe;
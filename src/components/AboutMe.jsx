import React from 'react'

const AboutMe = () => {
  return (
    <div style={{ padding: '20px', height: '100%', overflow: 'auto' }}>
      <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
        {/* Profile Section */}
        <div style={{ flex: '0 0 200px' }}>
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px',
            marginBottom: '20px',
            boxShadow: '0 10px 30px rgba(0, 122, 204, 0.3)',
            border: '4px solid rgba(255, 255, 255, 0.2)'
          }}>
            👤
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '15px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: 'rgba(255, 255, 255, 0.95)' }}>
              Justin Hernandez-Tovalin
            </h3>
            <p style={{ margin: '0', color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}>
              Computer Science Student<br />
              University of Washington - Seattle
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div style={{ flex: 1 }}>
          <h1 style={{
            margin: '0 0 20px 0',
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: '28px',
            fontWeight: '600'
          }}>
            About Me
          </h1>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '25px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '25px'
          }}>
            <p style={{
              margin: '0 0 20px 0',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '16px',
              lineHeight: '1.6'
            }}>
              Hello! I'm Justin Hernandez-Tovalin, a passionate Computer Science student at the University of Washington - Seattle. 
              I'm deeply fascinated by the intersection of technology and creativity, always seeking to build solutions that make a real impact.
            </p>
            
            <p style={{
              margin: '0 0 20px 0',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '16px',
              lineHeight: '1.6'
            }}>
              My journey in tech began with curiosity about how things work under the hood. From building my first "Hello World" 
              program to developing full-stack applications, I've discovered that coding is not just about writing instructions for computers—it's about solving problems and creating experiences.
            </p>

            <p style={{
              margin: '0',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '16px',
              lineHeight: '1.6'
            }}>
              When I'm not coding, you'll find me exploring the Pacific Northwest through photography and hiking, 
              staying active with fitness, or diving into strategic games that challenge my problem-solving skills.
            </p>
          </div>

          {/* Skills Preview */}
          <div style={{
            background: 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)',
            padding: '25px',
            borderRadius: '12px',
            color: 'white',
            boxShadow: '0 10px 30px rgba(156, 39, 176, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>
              🚀 Quick Skills Overview
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '10px'
            }}>
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Java', 'Python', 'SQL', 'HTML/CSS'].map(skill => (
                <div key={skill} style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  {skill}
                </div>
              ))}
            </div>
            <p style={{
              margin: '15px 0 0 0',
              fontSize: '14px',
              opacity: 0.9,
              textAlign: 'center'
            }}>
              Click "Technical Skills" in the dock to see my full tech stack!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
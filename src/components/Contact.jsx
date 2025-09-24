import React from 'react'

const Contact = () => {
  return (
    <div style={{ padding: '20px', height: '100%', overflow: 'auto' }}>
      <h1 style={{
        margin: '0 0 20px 0',
        color: 'rgba(255, 255, 255, 0.95)',
        fontSize: '28px',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        ✉️ Get in Touch
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
          I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in technology. 
          Feel free to reach out through any of the channels below!
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        {/* Contact Information */}
        <div>
          <h2 style={{
            margin: '0 0 20px 0',
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: '20px',
            fontWeight: '600'
          }}>
            📞 Contact Information
          </h2>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '20px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}>
                📧
              </div>
              <div>
                <h3 style={{
                  margin: '0 0 5px 0',
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Email
                </h3>
                <a 
                  href="mailto:Jherna3@uw.edu"
                  style={{ 
                    color: '#007ACC', 
                    textDecoration: 'none',
                    fontSize: '14px'
                  }}
                >
                  Jherna3@uw.edu
                </a>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}>
                📱
              </div>
              <div>
                <h3 style={{
                  margin: '0 0 5px 0',
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Phone
                </h3>
                <a 
                  href="tel:+12532057966"
                  style={{ 
                    color: '#007ACC', 
                    textDecoration: 'none',
                    fontSize: '14px'
                  }}
                >
                  (253) 205-7966
                </a>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}>
                📍
              </div>
              <div>
                <h3 style={{
                  margin: '0 0 5px 0',
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Location
                </h3>
                <span style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px'
                }}>
                  Seattle, WA
                </span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}>
                💼
              </div>
              <div>
                <h3 style={{
                  margin: '0 0 5px 0',
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  LinkedIn
                </h3>
                <a 
                  href="https://www.linkedin.com/in/justin-hernandez-tovalin-uw2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#007ACC', 
                    textDecoration: 'none',
                    fontSize: '14px'
                  }}
                >
                  linkedin.com/in/justin-hernandez-tovalin-uw2026
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{
              margin: '0 0 15px 0',
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              🌐 Connect With Me
            </h3>
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center'
            }}>
              <button
                onClick={() => window.open('https://github.com/JTovalin10', '_blank')}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                  e.target.style.transform = 'scale(1.05)'
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                <span>🐙</span> GitHub
              </button>
              <button
                onClick={() => window.open('https://www.linkedin.com/in/justin-hernandez-tovalin-uw2026/', '_blank')}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                  e.target.style.transform = 'scale(1.05)'
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                <span>💼</span> LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* Quick Message */}
        <div>
          <h2 style={{
            margin: '0 0 20px 0',
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: '20px',
            fontWeight: '600'
          }}>
            💬 Quick Message
          </h2>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '25px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <p style={{
              margin: '0 0 20px 0',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '16px',
              lineHeight: '1.6'
            }}>
              Ready to start a conversation? Click the button below to send me an email directly!
            </p>
            
            <button
              onClick={() => window.open('mailto:Jherna3@uw.edu?subject=Hello from your portfolio!', '_blank')}
              style={{
                background: 'linear-gradient(135deg, #007ACC 0%, #005A9E 100%)',
                border: 'none',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(0, 122, 204, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 20px rgba(0, 122, 204, 0.4)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 15px rgba(0, 122, 204, 0.3)'
              }}
            >
              📤 Send Email
            </button>
          </div>
        </div>
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
          🚀 Let's Build Something Amazing Together!
        </h3>
        <p style={{ margin: '0 0 20px 0', opacity: 0.9 }}>
          Whether you're looking for a developer, have a project idea, or just want to chat about technology, 
          I'd love to hear from you!
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
            View My Work
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
          onClick={() => window.open('https://drive.google.com/file/d/1T218CP7fhTvMNWqAwZCJt90XKguSz417/view?usp=sharing', '_blank')}>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact

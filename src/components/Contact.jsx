import React from 'react'

const Contact = () => {
  return (
    <div style={{ padding: '20px', height: '100%', overflow: 'auto', backgroundColor: 'white' }}>
      <h1 style={{
        margin: '0 0 20px 0',
        color: '#1f2937',
        fontSize: '28px',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        ✉️ Get in Touch
      </h1>

      <div style={{
        background: '#f9fafb',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <p style={{
          margin: '0',
          color: '#374151',
          fontSize: '16px',
          lineHeight: '1.6'
        }}>
          I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in technology. 
          Feel free to reach out through any of the channels below!
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px'
      }}>

        {/* Email Contact Form */}
        <div style={{ maxWidth: '500px', width: '100%' }}>
          <h2 style={{
            margin: '0 0 20px 0',
            color: '#1f2937',
            fontSize: '20px',
            fontWeight: '600'
          }}>
            📧 Send Me a Message
          </h2>

          <div style={{
            background: '#f9fafb',
            padding: '25px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb'
          }}>
            <form 
              action="https://formspree.io/f/xjkavlak" 
              method="POST"
              target="_blank"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}
            >
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '5px',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    color: '#374151',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '5px',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    color: '#374151',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '5px',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    color: '#374151',
                    boxSizing: 'border-box'
                  }}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '5px',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    color: '#374151',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Tell me about your project, idea, or just say hello!"
                />
              </div>

              <button
                type="submit"
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
                  boxShadow: '0 4px 15px rgba(0, 122, 204, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '10px'
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
                <span>📤</span> Send Message
              </button>
            </form>

            <div style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#e0f2fe',
              borderRadius: '8px',
              border: '1px solid #b3e5fc'
            }}>
              <p style={{
                margin: '0',
                color: '#0277bd',
                fontSize: '14px',
                textAlign: 'center'
              }}>
                💡 <strong>Tip:</strong> You can also connect with me on LinkedIn or check out my work on GitHub!
              </p>
            </div>
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

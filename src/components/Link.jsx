import { theme } from '../config/theme';

// Link component
const Link = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`d-inline-block px-2 py-1 rounded ${theme.link}`}
    style={{ 
      marginLeft: '-4px', 
      marginRight: '-4px',
      textDecoration: 'underline',
      textDecorationColor: 'var(--nord-primary)',
      textUnderlineOffset: '2px',
      textDecorationThickness: '1.5px',
      transition: 'all 0.2s ease',
      backgroundColor: 'transparent'
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = 'rgba(136, 192, 208, 0.15)';
      e.target.style.textDecorationColor = 'var(--nord-link)';
      e.target.style.textDecorationThickness = '2px';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = 'transparent';
      e.target.style.textDecorationColor = 'var(--nord-primary)';
      e.target.style.textDecorationThickness = '1.5px';
    }}
  >
    {children}
  </a>
);

export default Link;

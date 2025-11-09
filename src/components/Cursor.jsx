// Blinking cursor component
const Cursor = () => (
  <span className="d-inline-block bg-light animate-blink" style={{ width: '8px', height: '20px' }} aria-hidden="true"></span>
);

export default Cursor;

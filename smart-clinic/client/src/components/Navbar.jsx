import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      marginBottom: '2rem'
    }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/patients" style={{ marginRight: '1rem' }}>Patients</Link>
      <Link to="/doctors" style={{ marginRight: '1rem' }}>Doctors</Link>
      <Link to="/appointments">Appointments</Link>
    </nav>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Home from '../pages/Home';
import Patients from '../pages/Patients';
import Doctors from '../pages/Doctors';
import Appointments from '../pages/Appointments';

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
}

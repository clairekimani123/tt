import React from "react";

const Home = () => {
  return (
    <div className="page-content">
      <h1>Welcome to Smart Clinic</h1>
      <p>Your all-in-one clinic management platform for managing patients, doctors, and appointments with ease.</p>

      <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 8px rgba(0,0,0,0.05)' }}>
        <h2>Why Smart Clinic?</h2>
        <ul style={{ textAlign: 'left', lineHeight: '1.8' }}>
          <li>📋 Easy-to-use interface for registering and managing patients</li>
          <li>🩺 Manage doctor schedules and specializations efficiently</li>
          <li>📆 Book and track appointments seamlessly</li>
          <li>📊 View all records in organized tables</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

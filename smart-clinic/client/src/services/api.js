const API_URL = 'http://localhost:5000/api';

export const fetchPatients = () =>
  fetch(`${API_URL}/patients`).then(res => res.json());

export const createPatient = (data) =>
  fetch(`${API_URL}/patients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

export const fetchDoctors = () =>
  fetch(`${API_URL}/doctors`).then(res => res.json());

export const createDoctor = (data) =>
  fetch(`${API_URL}/doctors`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

export const fetchAppointments = () =>
  fetch(`${API_URL}/appointments`).then(res => res.json());

export const createAppointment = (data) =>
  fetch(`${API_URL}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

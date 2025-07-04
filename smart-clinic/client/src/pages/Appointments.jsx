import { useState, useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { appointmentSchema } from '../validations/appointmentSchema';
import FormField from '../components/FormField';
import {
  fetchAppointments,
  createAppointment,
  fetchPatients,
  fetchDoctors,
} from '../services/api';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchAppointments().then(setAppointments);
    fetchPatients().then(setPatients);
    fetchDoctors().then(setDoctors);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Appointments</h2>
      <ul style={{ marginBottom: '2rem' }}>
        {appointments.map((a) => (
          <li key={a.id}>
            <strong>Date:</strong> {a.appointment_date}<br/>
            <strong>Patient ID:</strong> {a.patient_id}<br/>
            <strong>Doctor ID:</strong> {a.doctor_id}<br/>
            <strong>Notes:</strong> {a.notes || 'None'}
          </li>
        ))}
      </ul>

      <h3>Schedule New Appointment</h3>
      <Formik
        initialValues={{
          patient_id: '',
          doctor_id: '',
          appointment_date: '',
          notes: '',
        }}
        validationSchema={appointmentSchema}
        onSubmit={(values, { resetForm }) => {
          const formatted = {
            ...values,
            patient_id: Number(values.patient_id),
            doctor_id: Number(values.doctor_id),
          };
          createAppointment(formatted).then(() => {
            fetchAppointments().then(setAppointments);
            resetForm();
          });
        }}
      >
        {({ values, handleChange }) => (
          <Form style={{ maxWidth: '400px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="patient_id">Patient</label>
              <select
                id="patient_id"
                name="patient_id"
                value={values.patient_id}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              >
                <option value="">Select a patient</option>
                {patients.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.email})
                  </option>
                ))}
              </select>
              <ErrorMessage name="patient_id" component="div" style={{ color: 'red' }} />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="doctor_id">Doctor</label>
              <select
                id="doctor_id"
                name="doctor_id"
                value={values.doctor_id}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              >
                <option value="">Select a doctor</option>
                {doctors.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.specialization})
                  </option>
                ))}
              </select>
              <ErrorMessage name="doctor_id" component="div" style={{ color: 'red' }} />
            </div>

            <FormField
              name="appointment_date"
              label="Appointment Date"
              placeholder="YYYY-MM-DD"
            />

            <FormField
              name="notes"
              label="Notes"
              placeholder="Optional notes"
            />

            <button type="submit" style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
              Create Appointment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

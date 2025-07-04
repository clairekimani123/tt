import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { patientSchema } from '../validations/patientSchema';
import FormField from '../components/FormField';
import { fetchPatients, createPatient } from '../services/api';

export default function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients().then(setPatients);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Patients</h2>
      <ul style={{ marginBottom: '2rem' }}>
        {patients.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.email}, {p.phone_number}
          </li>
        ))}
      </ul>

      <h3>Add New Patient</h3>
      <Formik
        initialValues={{ name: '', email: '', phone_number: '' }}
        validationSchema={patientSchema}
        onSubmit={(values, { resetForm }) => {
          createPatient(values).then(() => {
            fetchPatients().then(setPatients);
            resetForm();
          });
        }}
      >
        <Form style={{ maxWidth: '400px' }}>
          <FormField name="name" label="Name" placeholder="Full Name" />
          <FormField name="email" label="Email" type="email" />
          <FormField name="phone_number" label="Phone Number" />

          <button type="submit" style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
            Add Patient
          </button>
        </Form>
      </Formik>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { doctorSchema } from '../validations/doctorSchema';
import FormField from '../components/FormField';
import { fetchDoctors, createDoctor } from '../services/api';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors().then(setDoctors);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Doctors</h2>
      <ul style={{ marginBottom: '2rem' }}>
        {doctors.map((d) => (
          <li key={d.id}>
            <strong>{d.name}</strong> - {d.specialization}
          </li>
        ))}
      </ul>

      <h3>Add New Doctor</h3>
      <Formik
        initialValues={{ name: '', specialization: '' }}
        validationSchema={doctorSchema}
        onSubmit={(values, { resetForm }) => {
          createDoctor(values).then(() => {
            fetchDoctors().then(setDoctors);
            resetForm();
          });
        }}
      >
        <Form style={{ maxWidth: '400px' }}>
          <FormField name="name" label="Name" placeholder="Doctor's Full Name" />
          <FormField name="specialization" label="Specialization" placeholder="e.g. Cardiology" />

          <button type="submit" style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
            Add Doctor
          </button>
        </Form>
      </Formik>
    </div>
  );
}

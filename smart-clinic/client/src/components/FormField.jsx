import { Field, ErrorMessage } from 'formik';

export default function FormField({ name, label, type = 'text', placeholder }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={name} style={{ display: 'block', fontWeight: 'bold' }}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <ErrorMessage
        name={name}
        component="div"
        style={{ color: 'red', marginTop: '0.25rem' }}
      />
    </div>
  );
}

import * as Yup from 'yup';

export const patientSchema = Yup.object({
  name: Yup.string().required('Name is required').min(2),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone_number: Yup.string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone must be digits only')
});

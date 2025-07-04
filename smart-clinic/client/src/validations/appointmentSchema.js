import * as Yup from 'yup';

export const appointmentSchema = Yup.object({
  patient_id: Yup.number().required('Patient is required').typeError('Patient is required'),
  doctor_id: Yup.number().required('Doctor is required').typeError('Doctor is required'),
  appointment_date: Yup.string()
    .required('Date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
  notes: Yup.string()
});

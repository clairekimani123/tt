import * as Yup from 'yup';

export const doctorSchema = Yup.object({
  name: Yup.string().required('Name is required').min(2),
  specialization: Yup.string().required('Specialization is required').min(2)
});

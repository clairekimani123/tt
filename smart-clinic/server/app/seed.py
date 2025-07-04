from app import create_app, db
from app.models import Patient, Doctor, Appointment

app = create_app()

sample_patients = [
    Patient(name='Alice Johnson', email='alice@example.com', phone_number='1234567890'),
    Patient(name='Bob Smith', email='bob@example.com', phone_number='0987654321'),
]

sample_doctors = [
    Doctor(name='Dr. Susan Lee', specialization='Cardiology'),
    Doctor(name='Dr. Michael Brown', specialization='Dermatology'),
]

sample_appointments = [
    Appointment(patient_id=1, doctor_id=1, appointment_date='2025-07-05', notes='Initial consultation'),
    Appointment(patient_id=2, doctor_id=2, appointment_date='2025-07-06', notes='Follow-up visit'),
]

def seed():
    with app.app_context():
        # Clear existing data
        Appointment.query.delete()
        Patient.query.delete()
        Doctor.query.delete()
        db.session.commit()

        # Add new data
        db.session.add_all(sample_patients)
        db.session.add_all(sample_doctors)
        db.session.commit()

        # Appointments need patient/doctor IDs that exist
        db.session.add_all(sample_appointments)
        db.session.commit()

        print('✅ Database seeded successfully!')

if __name__ == '__main__':
    seed()

from marshmallow import Schema, fields, validate
from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field
from .models import Patient, Doctor, Appointment

# --------------------------
# Patient Schema
# --------------------------

class PatientSchema(SQLAlchemySchema):
    class Meta:
        model = Patient
        load_instance = True

    id = auto_field(dump_only=True)
    name = auto_field(required=True, validate=validate.Length(min=1))
    email = auto_field(required=True, validate=validate.Email())
    phone_number = auto_field(required=True, validate=validate.Regexp(r'^\d+$', error="Phone must be digits only"))

# --------------------------
# Doctor Schema
# --------------------------

class DoctorSchema(SQLAlchemySchema):
    class Meta:
        model = Doctor
        load_instance = True

    id = auto_field(dump_only=True)
    name = auto_field(required=True, validate=validate.Length(min=1))
    specialization = auto_field(required=True, validate=validate.Length(min=1))

# --------------------------
# Appointment Schema
# --------------------------

class AppointmentSchema(SQLAlchemySchema):
    class Meta:
        model = Appointment
        load_instance = True

    id = auto_field(dump_only=True)
    patient_id = auto_field(required=True)
    doctor_id = auto_field(required=True)
    appointment_date = auto_field(required=True, validate=validate.Length(min=1))
    notes = auto_field()

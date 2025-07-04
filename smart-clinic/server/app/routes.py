from flask import Blueprint, request, jsonify
from .models import db, Patient, Doctor, Appointment

bp = Blueprint('api', __name__)


@bp.route('/patients', methods=['GET'])
def get_patients():
    patients = Patient.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'email': p.email,
        'phone_number': p.phone_number
    } for p in patients])

@bp.route('/patients', methods=['POST'])
def create_patient():
    data = request.get_json()
    if not all(k in data for k in ('name', 'email', 'phone_number')):
        return jsonify({'error': 'Missing required fields'}), 400
    p = Patient(**data)
    db.session.add(p)
    db.session.commit()
    return jsonify({'message': 'Patient created'}), 201


@bp.route('/doctors', methods=['GET'])
def get_doctors():
    doctors = Doctor.query.all()
    return jsonify([{
        'id': d.id,
        'name': d.name,
        'specialization': d.specialization
    } for d in doctors])

@bp.route('/doctors', methods=['POST'])
def create_doctor():
    data = request.get_json()
    if not all(k in data for k in ('name', 'specialization')):
        return jsonify({'error': 'Missing required fields'}), 400
    d = Doctor(**data)
    db.session.add(d)
    db.session.commit()
    return jsonify({'message': 'Doctor created'}), 201


@bp.route('/appointments', methods=['GET'])
def get_appointments():
    appointments = Appointment.query.all()
    return jsonify([{
        'id': a.id,
        'patient_id': a.patient_id,
        'doctor_id': a.doctor_id,
        'appointment_date': a.appointment_date,
        'notes': a.notes
    } for a in appointments])

@bp.route('/appointments', methods=['POST'])
def create_appointment():
    data = request.get_json()
    if not all(k in data for k in ('patient_id', 'doctor_id', 'appointment_date')):
        return jsonify({'error': 'Missing required fields'}), 400
    a = Appointment(**data)
    db.session.add(a)
    db.session.commit()
    return jsonify({'message': 'Appointment created'}), 201

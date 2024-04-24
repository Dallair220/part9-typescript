// 9.11: Patientor backend, step4

import patients from '../../data/patients';
import { NewPatient, NonSensitivePatientData, Patient } from '../types';
import { v4 as uuidv4 } from 'uuid';

const getPatients = (): NonSensitivePatientData[] => {
  // add all properties except ssn
  return patients.map((entry) => ({
    id: entry.id,
    name: entry.name,
    dateOfBirth: entry.dateOfBirth,
    gender: entry.gender,
    occupation: entry.occupation,
  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = { ...patient, id: uuidv4() };
  patients.push(newPatient);
  return newPatient;
};

export default { getPatients, addPatient };

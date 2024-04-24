// 9.11: Patientor backend, step4

import patients from '../../data/patients';
import { NonSensitivePatientData } from '../types';

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

export default { getPatients };

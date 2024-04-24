// 9.11: Patientor backend, step4

import express from 'express';
import patientService from '../services/patientService';
import patients from '../../data/patients';
import { Patient } from '../types';
import { v4 as uuidv4 } from 'uuid';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.send(patientService.getPatients());
});

patientsRouter.post('/', (req, res) => {
  const patientWithoutId = req.body as Patient;
  const patient = { ...patientWithoutId, id: uuidv4() };
  patients.push(patient);

  res.send(patient);
});

export default patientsRouter;

import express from 'express';
import patientService from '../services/patientService';
import createNewPatient from '../utils';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  const patients = patientService.getPatients();
  res.send(patients);
});

patientsRouter.post('/', (req, res) => {
  try {
    const newPatient = createNewPatient(req.body);
    const patient = patientService.addPatient(newPatient);
    return res.send(patient);
  } catch (error: unknown) {
    if (error instanceof Error) return res.status(400).send(error.message);
    return res.status(400).send(error);
  }
});

export default patientsRouter;

// 9.10: Patientor backend, step3

import express from 'express';
import diagnosisService from '../services/diagnosisService';

const diagnosesRouter = express.Router();

diagnosesRouter.get('/', (_req, res) => {
  res.send(diagnosisService.getDiagnoses());
});

export default diagnosesRouter;

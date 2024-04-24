// 9.10: Patientor backend, step3

import diagnoses from '../../data/diagnoses';
import { Diagnosis } from '../types';

const getDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};

export default { getDiagnoses };

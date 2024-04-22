// 9.10: Patientor backend, step3

import data from '../../data/diagnoses';
import { Diagnosis } from '../types';

const getDiagnoses = (): Diagnosis[] => {
  return data;
};

export default { getDiagnoses };

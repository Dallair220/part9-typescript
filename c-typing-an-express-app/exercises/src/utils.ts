import { Gender, NewPatient } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string';
};

const parseString = (str: unknown): string => {
  if (!isString(str)) throw new Error('Incorrect comment type: ' + typeof str);

  return str;
};

const isGender = (param: string): param is Gender => {
  const genderValues = Object.values(Gender);
  const genderValuesAsString = genderValues.map((value) => value.toString());
  return genderValuesAsString.includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender)) throw new Error('Incorrect gender type: ' + typeof gender);
  if (!isGender(gender)) throw new Error('Incorrect gender: ' + gender);

  return gender;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date)) throw new Error('Incorrect date type: ' + typeof date);
  if (!isDate(date)) throw new Error('Incorrect date: ' + date);

  return date;
};

const createNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== 'object') throw new Error('Incorrect or missing data');

  if (
    !('name' in object) ||
    !('dateOfBirth' in object) ||
    !('ssn' in object) ||
    !('gender' in object) ||
    !('occupation' in object)
  ) {
    throw new Error('Incorrect data: some fields are missing');
  }

  if (!object.name || !object.dateOfBirth || !object.ssn || !object.gender || !object.occupation) {
    throw new Error('Missing field value');
  }

  const patient = {
    name: parseString(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseString(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
  };

  return patient;
};

export default createNewPatient;

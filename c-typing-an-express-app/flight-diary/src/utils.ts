import { NewDiaryEntry, Visibility, Weather } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string';
};

const parseComment = (comment: unknown): string => {
  if (!isString(comment)) throw new Error('Incorrect comment type: ' + typeof comment);

  return comment;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date)) throw new Error('Incorrect date type: ' + typeof date);
  if (!isDate(date)) throw new Error('Incorrect date: ' + date);

  return date;
};

const isWeather = (param: string): param is Weather => {
  // Weather enum as array
  const weatherValues = Object.values(Weather);
  // Convert each value to a string
  const weatherValuesAsString = weatherValues.map((value) => value.toString());
  // Check if the param is included
  const isParamAWeatherValue = weatherValuesAsString.includes(param);

  return isParamAWeatherValue;
};

const parseWeather = (weather: unknown): Weather => {
  if (!isString(weather)) throw new Error('Incorrect weather type: ' + typeof weather);
  if (!isWeather(weather)) throw new Error('Incorrect weather: ' + weather);

  return weather;
};

const isVisibility = (param: string): param is Visibility => {
  const visibilityValues = Object.values(Visibility);
  const visibilityValuesAsString = visibilityValues.map((value) => value.toString());

  return visibilityValuesAsString.includes(param);
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!isString(visibility)) throw new Error('Incorrect visibility type: ' + typeof visibility);
  if (!isVisibility(visibility)) throw new Error('Incorrect visibility: ' + visibility);

  return visibility;
};

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  if (!object || typeof object !== 'object') throw new Error('Incorrect or missing data');

  if (
    !('weather' in object) ||
    !('visibility' in object) ||
    !('date' in object) ||
    !('comment' in object)
  ) {
    throw new Error('Incorrect data: some fields are missing');
  }

  const newEntry: NewDiaryEntry = {
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    date: parseDate(object.date),
    comment: parseComment(object?.comment),
  };

  return newEntry;
};

export default toNewDiaryEntry;

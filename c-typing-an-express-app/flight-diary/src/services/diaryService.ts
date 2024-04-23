import diaries from '../../data/entries';
import { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from '../types';

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map((entry) => ({
    id: entry.id,
    date: entry.date,
    weather: entry.weather,
    visibility: entry.visibility,
  }));
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: diaries.length + 1, // only works if no diaries can be removed
    ...entry,
  };
  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

const findById = (id: number): DiaryEntry | undefined => {
  return diaries.find((diary) => diary.id === id);
};

export default { getEntries, addDiary, getNonSensitiveEntries, findById };

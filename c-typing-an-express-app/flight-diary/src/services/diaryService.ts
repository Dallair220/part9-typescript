import diaries from '../../data/entries';
import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';

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

const addDiary = () => {
  return null;
};

const findById = (id: number): DiaryEntry | undefined => {
  return diaries.find((diary) => diary.id === id);
};

export default { getEntries, addDiary, getNonSensitiveEntries, findById };

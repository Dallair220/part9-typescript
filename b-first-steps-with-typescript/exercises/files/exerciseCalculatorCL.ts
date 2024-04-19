// 9.3 Command line

import parseArguments from './utils/parseArguments';

interface Results {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (target: number, dailyExerciseHours: number[]): Results => {
  const ratingDescription = ['could be better', 'good', 'great!'];

  const trainingDays = dailyExerciseHours.reduce((total, day) => {
    return day !== 0 ? total + 1 : total;
  }, 0);
  const average = dailyExerciseHours.reduce((a, b) => a + b) / dailyExerciseHours.length;
  const success = average >= target;

  let rating = 0;
  switch (true) {
    case average > target * 1.5:
      rating = 3;
      break;
    case success === true:
      rating = 2;
      break;
    case success === false:
      rating = 1;
      break;
    default:
      throw Error('some error');
  }

  return {
    periodLength: dailyExerciseHours.length,
    trainingDays,
    success,
    rating,
    ratingDescription: ratingDescription[rating - 1],
    target,
    average,
  };
};

try {
  const { target, dailyExerciseHours } = parseArguments(process.argv);
  console.log(calculateExercises(target, dailyExerciseHours));
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error('Error: ' + error.message);
  } else {
    console.error(error);
  }
}

export default calculateExercises;

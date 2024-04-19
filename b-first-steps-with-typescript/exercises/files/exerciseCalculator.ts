// 9.2 Exercise calculator

interface Results {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (dailyExerciseHours: number[], target: number): Results => {
  const ratingDescription = ['bad', 'good', 'great!'];

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

// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));

export default calculateExercises;

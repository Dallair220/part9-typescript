interface InputValues {
  target: number;
  dailyExerciseHours: number[];
}

const parseArguments = (args: String[]): InputValues => {
  if (args.length < 4) throw Error('Not enough args');

  // parse args to vars
  const target = Number(args[2]);
  const dailyExerciseHours = args.slice(3).map(Number);

  // check type of args to be only numbers
  if (isNaN(target)) throw Error('Only enter a number for the target.');
  dailyExerciseHours.forEach((day) => {
    if (isNaN(day)) throw Error('Only enter numbers.');
  });

  return { target, dailyExerciseHours };
};

export default parseArguments;

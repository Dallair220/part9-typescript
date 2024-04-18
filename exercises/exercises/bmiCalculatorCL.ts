// 9.3 Command line

const calculateBmi = (args: string[]): string => {
  if (args.length < 4) throw Error('Not enough args');
  if (args.length > 4) throw Error('Too many args');

  const height = Number(args[2]);
  const weight = Number(args[3]);

  if (isNaN(height) || isNaN(weight)) throw Error('Please only enter numbers.');

  const bmi = weight / ((height / 100) * (height / 100));

  switch (true) {
    case bmi < 16:
      return bmi + ': Underweight (Severe thinness)';
    case bmi < 17:
      return bmi + ': Underweight (Moderate thinness)';
    case bmi < 18.5:
      return bmi + ': Underweight (Mild thinness)';
    case bmi < 25:
      return bmi + ': Normal (healthy weight)';
    case bmi < 30:
      return bmi + ': Overweight (Pre-obese)';
    case bmi >= 40:
      return bmi + ': Very Obese';
    default:
      throw Error('Unexpected error');
  }
};

try {
  console.log(calculateBmi(process.argv));
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error('Error: ' + error.message);
  } else {
    console.error(error);
  }
}

export default calculateBmi;

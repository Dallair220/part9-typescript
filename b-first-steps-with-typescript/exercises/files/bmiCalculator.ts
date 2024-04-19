// 9.1 Body mass index

const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / ((height / 100) * (height / 100));

  switch (true) {
    case bmi < 16:
      return 'Underweight (Severe thinness)';
    case bmi < 17:
      return 'Underweight (Moderate thinness)';
    case bmi < 18.5:
      return 'Underweight (Mild thinness)';
    case bmi < 25:
      return 'Normal (healthy weight)';
    case bmi < 30:
      return 'Overweight (Pre-obese)';
    case bmi >= 40:
      return 'Very Obese';
    default:
      throw Error('error');
  }
};

// console.log(calculateBmi(171, 65));

export default calculateBmi;

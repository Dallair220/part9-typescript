interface MultiplyValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: String[]): MultiplyValues => {
  if (args.length < 4) throw Error('Too few args');
  if (args.length > 4) throw Error('Too many args');

  const a = Number(args[2]);
  const b = Number(args[3]);

  if (isNaN(a) || isNaN(b)) throw Error('NaN!');
  return { value1: a, value2: b };
};

const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
};

try {
  const { value1, value2 } = parseArguments(process.argv);
  multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('Something went wrong.');
  }
}

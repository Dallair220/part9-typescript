// 9.4 Express and 9.5 WebBMI and 9.7 WebExercises

import express from 'express';
const app = express();

import calculateBmi from './files/bmiCalculator';
import calculateExercises from './files/exerciseCalculator';

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello my Full-Stack friend!');
});

app.get('/bmi', (req, res) => {
  const weight = Number(req.query.weight);
  const height = Number(req.query.height);

  if (isNaN(weight) || isNaN(height))
    return res.status(400).json({ error: 'malformed parameters' });

  const bmi = calculateBmi(height, weight);
  const response = { weight, height, bmi };

  return res.json(response);
});

app.post('/exercise', (req, res) => {
  console.log(req.body);
  if (!('target' in req.body) || !('daily_exercises' in req.body)) {
    return res.status(400).json({ error: 'parameters missing' });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (typeof target !== 'number') {
    return res.status(400).json({ error: 'target should be a number' });
  }

  if (!Array.isArray(daily_exercises) || !daily_exercises.every(Number.isFinite)) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const calc = calculateExercises(daily_exercises as number[], target);

  return res.json(calc);
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

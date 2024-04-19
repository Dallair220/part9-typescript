import express from 'express';
const app = express();

import { calculator, Operation } from './calculator';

app.get('/', (_req, res) => {
  res.send('pong!');
});

app.post('/calculate', (req, res) => {
  const operations: Operation[] = ['multiply', 'add', 'divide'];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  // validate the data
  if (!value1 || isNaN(Number(value1))) return res.status(400).send({ error: '...' });
  if (!value2 || isNaN(Number(value1))) return res.status(400).send({ error: '...' });
  if (!op || !operations.includes(op as Operation)) return res.status(400).send({ error: '...' });

  const result = calculator(Number(value1), Number(value2), op as Operation);

  return res.send({ result });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

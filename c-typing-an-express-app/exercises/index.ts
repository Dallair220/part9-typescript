import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/ping', (_req, res) => {
  console.log('received ping!');
  res.send('pong!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

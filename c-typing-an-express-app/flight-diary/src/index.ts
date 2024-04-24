import express from 'express';
import cors from 'cors';
import router from './routes/diaries';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('ping received');
  res.send('pong');
});

app.use('/api/diaries', router);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

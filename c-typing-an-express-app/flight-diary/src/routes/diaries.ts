import express from 'express';
import diaryService from '../services/diaryService';

const router = express.Router();

router.get('/', (_req, res) => {
  const entries = diaryService.getEntries();
  res.send(entries);
});

router.post('/', (_req, res) => {
  res.send('Saving diary!');
});

export default router;

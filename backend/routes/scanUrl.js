import { Router } from 'express';
// import { callMlUrlAnalyzer } from '../services/mlClient.js';
// import { checkFirestoreThreat } from '../services/firestore.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ status: 'ERROR', reason: 'URL required' });

    // Mock response for hackathon (normally calls mlClient.js)
    if (url.includes('free') || url.includes('lottery')) {
      return res.json({ status: 'DANGER', reason: 'Phishing pattern detected' });
    }
    
    if (url.includes('bit.ly') || url.includes('tinyurl')) {
      return res.json({ status: 'SUSPICIOUS', reason: 'URL shortener detected' });
    }

    // Default safe
    res.json({ status: 'SAFE', reason: 'No threats detected' });
  } catch (error) {
    res.status(500).json({ status: 'ERROR', reason: 'Server error' });
  }
});

export default router;

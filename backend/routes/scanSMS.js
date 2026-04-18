import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Text required' });

    let status = 'SAFE';
    let flags = [];
    
    const textLower = text.toLowerCase();
    
    if (textLower.includes('urgent') && textLower.includes('money')) {
      status = 'DANGER';
      flags.push('Urgency Scam');
    }
    if (textLower.includes('kyc') && textLower.includes('suspend')) {
      status = 'DANGER';
      flags.push('KYC Fraud');
    }
    if (textLower.includes('lottery') || textLower.includes('prize')) {
      status = 'DANGER';
      flags.push('Fake Lottery');
    }

    res.json({ status, flags });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

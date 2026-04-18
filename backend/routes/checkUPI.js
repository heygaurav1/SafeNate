import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { upiId } = req.body;
    if (!upiId) return res.status(400).json({ error: 'UPI ID required' });

    // Dummy mock logic
    const reports = upiId.includes('scammer') ? 15 : 0;
    const status = reports > 0 ? 'DANGER' : 'SAFE';

    res.json({ status, reportCount: reports });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

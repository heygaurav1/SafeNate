import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import scanUrlRoute from './routes/scanUrl.js';
import checkUPIRoute from './routes/checkUPI.js';
import scanSMSRoute from './routes/scanSMS.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Main 3 API Routes
app.use('/api/scan-url', scanUrlRoute);
app.use('/api/check-upi', checkUPIRoute);
app.use('/api/scan-sms', scanSMSRoute);

app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running correctly' });
});

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});

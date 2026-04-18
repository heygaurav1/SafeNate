import axios from 'axios';

const API_BASE = 'http://localhost:3000/api'; // Render backend URL in prod

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Mocking logic for Hackathon as requested
export const scanUrl = async (url) => {
  // Hackathon hardcoded demos
  if (url.includes('free-money') || url.includes('lottery')) {
    return { status: 'DANGER', reason: 'Known phishing pattern detected.' };
  }
  if (url.includes('bit.ly') || url.includes('tinyurl')) {
    return { status: 'SUSPICIOUS', reason: 'URL shortener hides actual destination.' };
  }
  if (url.includes('google.com') || url.includes('gov.in')) {
    return { status: 'SAFE', reason: 'Verified official domain.' };
  }
  
  // Real API call fallback
  try {
    const res = await api.post('/scan-url', { url });
    return res.data;
  } catch (error) {
    return { status: 'SUSPICIOUS', reason: 'Could not verify at this time.' };
  }
};

export const checkUpi = async (upiId) => {
  try {
    const res = await api.post('/check-upi', { upiId });
    return res.data;
  } catch (error) {
    return { status: 'SAFE', reportCount: 0 };
  }
};

export const scanSms = async (text) => {
  try {
    const res = await api.post('/scan-sms', { text });
    return res.data;
  } catch (error) {
    return { status: 'SUSPICIOUS', flags: ['Failed to analyze'] };
  }
};

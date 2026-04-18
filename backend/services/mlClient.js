// Placeholder mapping to Python ML API Hosted on Render
import axios from 'axios';

const ML_API = process.env.ML_API_URL || 'http://localhost:8000';

export const callMlUrlAnalyzer = async (url) => {
  try {
    const response = await axios.post(`${ML_API}/predict/url`, { url });
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

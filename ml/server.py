from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="SafeNet ML Service")

class UrlRequest(BaseModel):
    url: str

class SmsRequest(BaseModel):
    text: str

@app.get("/")
def health_check():
    return {"status": "ML Engine Running"}

@app.post("/predict/url")
def predict_url(req: UrlRequest):
    # Dummy logic to replace with actual prediction
    if "free" in req.url or "lottery" in req.url:
        return {"level": "DANGER"}
    if "bit.ly" in req.url:
        return {"level": "SUSPICIOUS"}
    return {"level": "SAFE"}

@app.post("/predict/sms")
def predict_sms(req: SmsRequest):
    text_lower = req.text.lower()
    if "urgent" in text_lower and "money" in text_lower:
         return {"level": "DANGER", "reason": "Urgent money request"}
    if "kyc" in text_lower and "suspend" in text_lower:
         return {"level": "DANGER", "reason": "Fake KYC alert"}
    return {"level": "SAFE"}

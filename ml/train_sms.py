import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
import pickle
import os

def train():
    print("Training SMS NLP Model...")
    data = {
        'text': [
            'Hello there!',
            'Your bank account is suspended. Update KYC.',
            'URGENT: Send money via UPI',
            'Your OTP is 1234'
        ],
        'label': [0, 1, 1, 0]
    }
    df = pd.DataFrame(data)
    
    model = make_pipeline(TfidfVectorizer(stop_words='english'), MultinomialNB())
    model.fit(df['text'], df['label'])
    
    os.makedirs('model', exist_ok=True)
    with open('model/sms_classifier.pkl', 'wb') as f:
        pickle.dump(model, f)
    print("Saved to model/sms_classifier.pkl")

if __name__ == '__main__':
    train()

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
import pickle
import os

def train():
    print("Training URL Classifier...")
    data = {
        'url': ['http://safe.com', 'secure-bank.com', 'bit.ly/free-money', 'login-update-paypal.com'],
        'label': [0, 0, 1, 1]
    }
    df = pd.DataFrame(data)
    
    model = make_pipeline(TfidfVectorizer(analyzer='char', ngram_range=(3,5)), LogisticRegression())
    model.fit(df['url'], df['label'])
    
    os.makedirs('model', exist_ok=True)
    with open('model/url_classifier.pkl', 'wb') as f:
        pickle.dump(model, f)
    print("Saved to model/url_classifier.pkl")

if __name__ == '__main__':
    train()

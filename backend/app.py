import sys
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)
CORS(app)

df = pd.read_csv('dataset/dataset.csv')

tfidf = joblib.load('pkl/tfidf_vectorizer.pkl')
matrix = joblib.load('pkl/vectorized_summary.pkl')

cosine_sim = cosine_similarity(matrix, matrix)

def get_recommendations(title):
    try:
        # Get the index of the target book title
        idx = df[df['title'].str.lower() == title.lower()].index[0]
        # Get pairwise similarity scores of all books with target book
        sim_scores = list(enumerate(cosine_sim[idx]))
        # Sort the books based on similarity scores
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        # Get the indices of top 5 similar books, exclude the first which is the target book itself
        top_indices = [i[0] for i in sim_scores[1:6]]
        
        rec_title = df['title'].iloc[top_indices].tolist()
        rec_author = df['Author'].iloc[top_indices].fillna('Unknown Author').tolist()
        title_target = df['title'].iloc[idx]

        # Combine title and author into a list of dictionaries
        recommendations = [{"title": t, "author": a} for t, a in zip(rec_title, rec_author)]
        return title_target, recommendations
    except IndexError:
        return False, False

@app.route('/recommend', methods=['GET'])
def recommend():
    title = request.args.get('title', '')

    if not title:
        return jsonify({"error": "Please provide a book title"}), 400
    
    title_target, recommendations = get_recommendations(title)

    if not title_target and not recommendations:
        return jsonify({"error": "No recommendation found. Try another book."})

    return jsonify({"title": title, "title_target": title_target, "recommendations": recommendations})

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from PIL import Image
import urllib.request
from intrinsic_image_popularity.test import get_image_scores

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Add this line after initializing the Flask app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/iip_scores', methods=['POST'])
def calculate_image_score():
    # Retrieve data from the frontend - handle FE request
    data = request.json
    # Format: { image_url: window.imgURLs };
    image_urls = data.get('image_url')

    # Part I - call I2PA package, use repo fork if needed.
    result = get_image_scores(image_urls)
    
    # Part II - url to Image (# Iterate over each of 10 images - Put this in a for loop)
    # Send the result back to the frontend
    response = jsonify(result)
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    return response

if __name__ == '__main__':
    app.run(debug=True)




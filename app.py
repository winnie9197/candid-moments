from flask import Flask, jsonify, request, render_template
from flask_dotenv import DotEnv
from PIL import Image
import urllib.request

app = Flask(__name__, static_folder="dist", template_folder="src")

@app.route('/iip_scores', methods=['POST'])
def calculate_image_score():
    # Retrieve data from the frontend - handle FE request
    data = request.json
    # Format: { image_url: window.imgURLs };
    print(data.get('image_url'), 'image_url')

    # TODO
    # Part I - call I2PA package, use repo fork if needed.
    result = your_python_package.some_function(data)
    
    # Part II - url to Image (# Iterate over each of 10 images - Put this in a for loop)
    # urllib.request.urlretrieve(‘Image url’, “file_name”)
    # img = Image.open(“file_name”)

    # Send the result back to the frontend
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)




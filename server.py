from flask import Flask, jsonify
import json

app = Flask(__name__)

with open('scraped_data.json') as f:
    scraped_data = json.load(f)

@app.route('/')
def get_data():
    return jsonify(scraped_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

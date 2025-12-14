from flask import Flask, render_template, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
import cv2
from PIL import Image
import os
import base64
from io import BytesIO

app = Flask(__name__)
model = load_model('model/pneumonia_model.h5')

def prepare_image(image):
    img_array = np.array(image.convert('RGB'))
    img_resized = cv2.resize(img_array, (224,224)) / 255.0
    img_input = np.expand_dims(img_resized, axis=0)
    return img_input

def image_to_dataurl(image):
    buffered = BytesIO()
    image.save(buffered, format="PNG")
    return "data:image/png;base64," + base64.b64encode(buffered.getvalue()).decode()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        file = request.files['file']
        image = Image.open(file)
        img_input = prepare_image(image)

        pred = model.predict(img_input)[0][0]
        label = "Pneumonia" if pred > 0.5 else "Normal"

        return jsonify({
            'prediction': label,
            'image_url': image_to_dataurl(image)
        })

    return render_template('index.html')

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
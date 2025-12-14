import gradio as gr
import numpy as np
import cv2
from PIL import Image
from tensorflow.keras.models import load_model

model = load_model("model/pneumonia_model.h5")

def predict(image):
    img = image.convert("RGB")
    img = np.array(img)
    img = cv2.resize(img, (224, 224)) / 255.0
    img = np.expand_dims(img, axis=0)

    pred = model.predict(img)[0][0]

    if pred > 0.5:
        return "🟥 Pneumonia Detected\n\nThe uploaded chest X-ray shows visual patterns commonly associated with pneumonia.\n This AI-based assessment is intended for educational purposes only."
    else:
        return "🟩 No Pneumonia Detected\n\nThe uploaded chest X-ray does not show features typically associated with pneumonia according to the model."

gr.Interface(
    fn=predict,
    inputs=gr.Image(type="pil", label="Upload Chest X-ray"),
    outputs=gr.Textbox(label="Result"),
    title="Pneumonia Detection from Chest X-rays",
    description="CNN + Transfer Learning (MobileNetV2)"
).launch()

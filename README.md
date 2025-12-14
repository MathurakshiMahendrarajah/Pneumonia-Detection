# Pneumonia Detection from Chest X-rays

## Problem Statement
Classify chest X-ray images into **Normal** or **Pneumonia** using a CNN with transfer learning.

---

## Dataset
Chest X-Ray dataset with folders:
- `train/` → training images
- `val/` → validation images
- `test/` → test images

Classes: `NORMAL`, `PNEUMONIA`

---

## Model
- Base Model: MobileNetV2 (pretrained, frozen base)
- Custom Layers: GlobalAveragePooling → Dense(128, ReLU) → Dropout(0.5) → Dense(1, Sigmoid)
- Binary classification using sigmoid function
- Loss function: Binary Crossentropy
- Optimizer: Adam

---

## Pipeline
- Chest X-ray images
- Resize 224x224 + Normalize
- Data Augmentation (rotation, flip, zoom)
- MobileNetV2 (frozen)
- Custom Dense layers
- Training
- Evaluation (accuracy, confusion matrix)
- Saved model
- Local Flask / Hugging Face Spaces app for interactive predictions
```
        [Chest X-ray Images]
                  |
        Resize 224x224 + Normalize
                  |
    Data Augmentation (Rotation, Flip, Zoom)
                  |
        MobileNetV2 (Frozen Base)
                  |
        Custom Dense Layers
                  |
        Model Training & Evaluation
                  |
            Saved Model
                  |
        Flask / Hugging Face Spaces App
                  |
        User Uploads Image → Prediction
```
---

## Features (Professional Web App)
- Upload chest X-ray images
- Preview image before analysis
- Analyze image with one-click prediction
- Clean, responsive UI (desktop & tablet ready)
- Educational results with clear explanations
- Option to analyze another image after result

---
## Live Demo (Hugging Face Space)
This project is also deployed online using Hugging Face Spaces.
 1.    ```bash
       https://huggingface.co/spaces/MathurakshiM/Pneumonia_Detection
    
Try it directly in your browser without any setup:
	- Upload an X-ray image
	- Get instant prediction
	- Works on both desktop and mobile

---

## Limitations
- For educational purposes only
- Not a clinical diagnostic tool
- Accuracy depends on dataset quality and size

---

## How to Run

1. Clone the repo:
    ```bash
    git clone https://github.com/MathurakshiMahendrarajah/Pneumonia-Detection.git
    cd Pneumonia-Detection

2. Install dependencies:
    ```bash
    pip install -r requirements.txt

3. Run Flask app:
   ```bash
    python app.py

5. Open browser at http://127.0.0.1:5000 and test the app by uploading X-ray images.

---

## Screenshots

Flask App
<img width="1728" height="979" alt="Screenshot 2025-12-14 at 7 40 30 PM" src="https://github.com/user-attachments/assets/587e7fce-f46c-410f-b6b9-7b922fb1800a" />

<img width="1725" height="877" alt="Screenshot 2025-12-14 at 7 49 05 PM" src="https://github.com/user-attachments/assets/a3f5ed82-f12e-4efe-b1ef-3b808b1e993c" />

Hugging Face Space
<img width="1623" height="776" alt="Screenshot 2025-12-14 at 10 45 03 PM" src="https://github.com/user-attachments/assets/fa231262-eddf-4345-a0bd-532d6a93a47b" />

<img width="1628" height="768" alt="Screenshot 2025-12-14 at 10 45 22 PM" src="https://github.com/user-attachments/assets/9697474b-9542-4ffa-8d57-009cafeddc4a" />



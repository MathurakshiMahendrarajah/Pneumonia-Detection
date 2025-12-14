# Pneumonia Detection from Chest X-rays

## Problem Statement
Classify chest X-ray images into **Normal** or **Pneumonia** using a CNN with transfer learning.

## Dataset
Chest X-Ray dataset with folders:
- `train/` → training images
- `val/` → validation images
- `test/` → test images

Classes: `NORMAL`, `PNEUMONIA`

## Model
- MobileNetV2 (pretrained, frozen base)
- GlobalAveragePooling → Dense(128, ReLU) → Dropout(0.5) → Dense(1, Sigmoid)
- Binary classification

## Pipeline
Chest X-ray images
↓
Resize 224x224 + Normalize
↓
Data Augmentation (rotation, flip, zoom)
↓
MobileNetV2 (frozen)
↓
Custom Dense layers
↓
Training
↓
Evaluation (accuracy, confusion matrix)
↓
Saved model
↓
Flask Web App for deployment

## Deployment
- Flask app: `app.py`
- Deploy on Render 
- URL: <YOUR_RENDER_URL>
- Note: Free tier apps may sleep when inactive; full source code included.

## Features (Professional Web App)
- Upload chest X-ray images
- Preview image before analysis
- Analyze image with one-click prediction
- Clean, responsive UI (desktop & tablet ready)
- Educational results with clear explanations
- Option to analyze another image after result

## Limitations
- For educational purposes only
- Not a clinical diagnostic tool
- Accuracy depends on dataset quality and size

## How to Run

1. Clone the repo:
    ```bash
    git clone <REPO_URL>
    cd Pneumonia-Detection

2. Install dependencies:
    ```bash
    pip install -r requirements.txt

3. Run Flask app:
    python app.py

4. Open browser at http://127.0.0.1:5000 and test the app by uploading X-ray images.



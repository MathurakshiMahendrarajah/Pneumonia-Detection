const fileInput = document.getElementById('fileInput');
const fileLabel = document.getElementById('fileLabel');
const fileText = document.getElementById('fileText');
const previewImage = document.getElementById('previewImage');
const predictBtn = document.getElementById('predictBtn');

const resultDiv = document.getElementById('result');
const predictionTitle = document.getElementById('predictionTitle');
const predictionDesc = document.getElementById('predictionDesc');

const recheckSection = document.getElementById('recheck-section');

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;

    /* Upload success feedback */
    fileText.innerText = "Image uploaded successfully";
    fileLabel.classList.add('success');

    /* Show image preview */
    previewImage.src = URL.createObjectURL(file);
    previewImage.classList.remove('hidden');

    /* Enable analyze button */
    predictBtn.disabled = false;

    /* Reset previous result */
    resultDiv.classList.add('hidden');
    recheckSection.classList.add('hidden');
});

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    predictBtn.innerText = "Analyzing X-ray...";
    predictBtn.disabled = true;

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const response = await fetch('/', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    resultDiv.classList.remove('hidden');

    if (data.prediction === "Pneumonia") {
        predictionTitle.innerText = "Pneumonia Detected";
        predictionTitle.style.color = "#f87171";
        predictionDesc.innerText =
            "The uploaded chest X-ray shows visual patterns commonly associated with pneumonia. This AI-based assessment is intended for educational purposes only.";
    } else {
        predictionTitle.innerText = "No Pneumonia Detected";
        predictionTitle.style.color = "#4ade80";
        predictionDesc.innerText =
            "The uploaded chest X-ray does not show features typically associated with pneumonia according to the model.";
    }

    /* Show analyze-again section */
    recheckSection.classList.remove('hidden');

    predictBtn.innerText = "Analyze X-ray";
});

/* Reset flow for another image */
function resetApp() {
    fileInput.value = "";
    fileText.innerText = "Choose a chest X-ray image";
    fileLabel.classList.remove('success');

    previewImage.src = "";
    previewImage.classList.add('hidden');

    resultDiv.classList.add('hidden');
    recheckSection.classList.add('hidden');

    predictBtn.disabled = true;
}
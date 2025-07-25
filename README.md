# 🧠 AI Image Caption Generator

A full-stack AI-powered web application that generates natural language captions for uploaded images using the BLIP vision-language model from HuggingFace. It includes:

- ✨ React + Vite frontend
- 🔧 Node.js + Express backend
- 🐍 Python FastAPI service with the BLIP model

---

## 📁 Folder Structure

```
ai-image-caption-generator/
├── backend/            # Express backend
├── frontend/           # React frontend
├── python-model/       # FastAPI + Transformers model service
└── README.md
```

---


---

## 🚀 Features

- Upload an image and receive an AI-generated caption
- Simple and intuitive UI
- Integrates a powerful BLIP transformer model from HuggingFace
- Multi-service architecture for scalability

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Tapubormon/ai-image-caption-generator.git
cd ai-image-caption-generator
```

### 2️⃣ 🐍 Start the Python Model API

1. Go to the Python model directory:

   ```bash
   cd python-model
   ```

2. Create and activate a virtual environment (Windows):

   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the FastAPI server:

   ```bash
   uvicorn app:app --host 0.0.0.0 --port 5001 --reload
   ```

   The server will start at `http://localhost:5001`.

---

### 3️⃣ 🧾 Start the Backend (Node.js + Express)

1. Go to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with:

   ```env
   PORT=5000
   ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

   Backend runs at `http://localhost:5000`.

---

### 4️⃣ 🖼 Start the Frontend (React + Vite)

1. Go to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

   Frontend runs at `http://localhost:5173`.

---

## 🔄 How It Works

1. Frontend allows uploading an image.
2. The image is sent to the Node backend.
3. The backend forwards the image to the Python FastAPI service.
4. The FastAPI server processes the image with the BLIP model and generate a caption.
5. The caption is returned to the frontend and displayed.

---

## 🤝 Contributing
Pull requests are welcome! Feel free to open issues or submit suggestions.

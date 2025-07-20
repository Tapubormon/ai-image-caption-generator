import React, { useState, useRef } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setPreviewURL(URL.createObjectURL(file));
    setCaption('');
    setError('');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      setImageFile(file);
      setPreviewURL(URL.createObjectURL(file));
      setCaption('');
      setError('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleSubmit = async () => {
    if (!imageFile) {
      setError('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    setLoading(true);
    setError('');
    setCaption('');

    try {
      const res = await axios.post('http://localhost:5000/api/caption', formData);
      setCaption(res.data.caption);
    } catch (err) {
      console.error(err);
      setError('Failed to generate caption.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(caption);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
      <h2 className="text-xl font-bold mb-2">AI Image Caption Generator</h2>

      <input
        type="file"
        accept="image/*"
        id="image-upload"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <div
        className={`w-full border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
          isDragging ? 'border-blue-600 bg-blue-50' : 'border-blue-400'
        }`}
        onClick={() => fileInputRef.current.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p className="text-blue-600 font-medium">Click to upload</p>
        <p className="text-sm text-gray-500">or drag & drop an image here</p>
      </div>

      {previewURL && (
        <div className="mt-2">
          <img src={previewURL} alt="Preview" className="rounded-md max-h-64 mx-auto" />
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Generating...' : 'Generate Caption'}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {caption && (
        <div className="mt-4">
          <p className="text-green-700 font-semibold">Caption: {caption}</p>
          <button
            onClick={handleCopy}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            Copy Caption
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

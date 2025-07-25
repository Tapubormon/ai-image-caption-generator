const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function getCaptionFromPython(imagePath) {
  const form = new FormData();
  form.append('file', fs.createReadStream(imagePath));

  try {
    const response = await axios.post('http://localhost:5001/caption', form, {
      headers: form.getHeaders(),
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });
    return response.data.caption;
  } catch (error) {
    console.error('Error calling Python API:', error.response?.data || error.message);
    throw new Error('Failed to get caption from Python service');
  }
}

module.exports = { getCaptionFromPython };

const fs = require('fs');
const { getCaptionFromPython } = require('../services/pythonService');

exports.generateCaption = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No image uploaded' });

    // Call your local Python FastAPI server
    const caption = await getCaptionFromPython(file.path);

    // Delete uploaded file after processing
    fs.unlinkSync(file.path);

    res.json({ caption });
  } catch (err) {
    console.error('Error generating caption:', err.message);
    res.status(500).json({ error: 'Failed to generate caption' });
  }
};

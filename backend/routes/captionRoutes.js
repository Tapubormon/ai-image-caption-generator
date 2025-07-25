// backend/routes/captionRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { generateCaption } = require('../controllers/captionController');

// multer setup
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Route
router.post('/', upload.single('image'), generateCaption);

// ✅ Make sure you have this
module.exports = router;

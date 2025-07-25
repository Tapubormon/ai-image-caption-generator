const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const captionRoutes = require('./routes/captionRoutes'); // ✅ correct path


app.use(cors());
app.use(express.json());
app.use('/api/caption', captionRoutes); // ✅ use it as middleware

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


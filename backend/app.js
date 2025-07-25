const express = require('express');
const app = express();
const cors = require('cors');
const captionRoutes = require('./routes/captionRoutes'); // ✅ correct path

app.use(cors());
app.use(express.json());
app.use('/api/caption', captionRoutes); // ✅ use it as middleware

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`);
});

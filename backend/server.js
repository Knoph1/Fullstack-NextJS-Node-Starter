const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Fullstack Node.js Backend!' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
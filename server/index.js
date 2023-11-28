const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.json({ message: 'Backend API is working!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

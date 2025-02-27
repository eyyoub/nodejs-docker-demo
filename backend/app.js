const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Home route
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

// API route
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from Node.js API!',
    status: 'success'
  };
  res.json(data);
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});

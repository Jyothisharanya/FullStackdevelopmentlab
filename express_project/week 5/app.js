const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Express app!</h1><p>You have reached the home page.</p>');
});
app.get('/about', (req, res) => {
    res.send('This server was built as a learning project to understand Express.js and routing.');
});
app.get('/api/status', (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "Server is running smoothly."
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Press Ctrl+c to stop the server.');
});
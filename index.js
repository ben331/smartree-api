const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/api/dashboard', (req, res) => {
  const data = {
    all: Math.floor(Math.random() * 10) + 1,
    healthy: Math.floor(Math.random() * 10) + 1,
    suspicious: Math.floor(Math.random() * 10) + 1,
    infected: Math.floor(Math.random() * 10) + 1,
  };

  res.json(data);
});

app.get('/api/slow-service', (req, res) => {
  const timeout = req.query.timeout || 10;
  setTimeout(() => {
    res.send('Servicio lento');
  }, timeout);
});

app.listen( port, () => {
  console.log(`Server running on port ${port} or 3000`);
});
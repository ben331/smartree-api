const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/dashboard', (req, res) => {
  const data = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4
  };

  res.json(data);
});

app.listen( port, () => {
  console.log(`Server running on port ${port} or 3000`);
});
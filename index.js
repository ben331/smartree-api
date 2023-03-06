const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const data = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4
  };

  res.json(data);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
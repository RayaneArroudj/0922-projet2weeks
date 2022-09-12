const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World from express');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

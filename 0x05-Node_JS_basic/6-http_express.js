const express = require('express');

const app = express();
const PORT = 1245;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

module.exports = app;

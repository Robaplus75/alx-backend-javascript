const express = require('express');

const PORT = 7865;

const app = express();

app.use(express.json());

app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.post('/login', (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;

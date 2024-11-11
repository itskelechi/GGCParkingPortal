require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { readFile } = require('fs');
const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
   
        res.send( await readFile('./ggc-parking/index.html', 'utf-8'));

});

app.get('/tickets', async (req, res) => {
   
    res.send( await readFile('./ggc-parking/tickets.html', 'utf-8'));

});

app.get('/permits', async (req, res) => {
   
    res.send( await readFile('./ggc-parking/passes.html', 'utf-8'));

});

app.get('/merch', async (req, res) => {
   
    res.send( await readFile('./ggc-parking/merchandise.html', 'utf-8'));

});


// Mock Payment for FAFSA
app.post('/api/fafsa', (req, res) => {
  // Simulate FAFSA approval
  const isApproved = Math.random() > 0.2; // 80% approval rate
  res.json({ approved: isApproved });
});

// PayPal Payment Endpoint
app.post('/api/paypal/pay', async (req, res) => {
  try {
    const { amount } = req.body;
    const response = await axios.post('https://api.sandbox.paypal.com/v1/payments/payment', {
      intent: 'sale',
      payer: { payment_method: 'paypal' },
      transactions: [{ amount: { total: amount, currency: 'USD' } }],
      redirect_urls: {
        return_url: 'http://localhost:3700/payment-success',
        cancel_url: 'http://localhost:3700/payment-cancel',
      },
    }, {
      auth: {
        username: process.env.PAYPAL_CLIENT_ID,
        password: process.env.PAYPAL_SECRET,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error with PayPal transaction');
  }
});

// Klarna Payment Endpoint
app.post('/api/klarna/pay', async (req, res) => {
  try {
    const { amount } = req.body;
    // Add Klarna-specific setup for payment request
    res.json({ status: 'success', message: 'Klarna payment simulated' });
  } catch (error) {
    res.status(500).send('Error with Klarna transaction');
  }
});

app.listen(3700, () => console.log('Server running on http://localhost:3700'));

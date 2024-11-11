require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars'); // Updated import
const app = express();
const PORT = 3700;

// Set up Handlebars as the view engine
app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' })); // Updated syntax
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.render('content/index', { title: 'Home' }));
app.get('/permits', (req, res) => res.render('content/permits', { title: 'Parking Permits' }));
app.get('/tickets', (req, res) => res.render('content/tickets', { title: 'Pay Tickets' }));
app.get('/merchandise', (req, res) => res.render('content/merchandise', { title: 'Merchandise' }));
app.get('/checkout', (req, res) => res.render('content/checkout', { title: 'Checkout' }));

// Payment simulation routes (placeholders)
app.post('/tickets/pay', (req, res) => res.send('Ticket payment processed'));
app.post('/checkout/process', (req, res) => res.send('Checkout processed'));

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

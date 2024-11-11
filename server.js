const express = require('express');
const { engine } = require('express-handlebars');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Set up Handlebars view engine
app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
    eq: (a, b) => a === b // Define the `eq` helper
  }
})); 
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json());
app.use(express.static('public'));

// Main page route
app.get('/', async (req, res) => {
    res.render('index', { content: 'home' });
});

// Tickets page route
app.get('/tickets', async (req, res) => {
    res.render('index', { content: 'tickets' });
});

// Permits page route
app.get('/permits', async (req, res) => {
    res.render('index', { content: 'passes' });
});

// Merchandise page route
app.get('/merch', async (req, res) => {
    res.render('index', { content: 'merchandise' });
});

// Start the server
app.listen(3700, () => console.log('Server running on http://localhost:3700'));

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    res.send('Home page');
});

router.get('/about', (req, res) => {
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    res.send('About page');
});

router.get('/contact', (req, res) => {
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    res.send('Contact page');
});

module.exports = router;

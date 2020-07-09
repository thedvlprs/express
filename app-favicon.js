const express = require('express');
const path = require('path');
const favicon = require('express-favicon');

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.get('/', (req, res) => {
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    res.send('Home page');
});

app.listen(3000, () => {
    console.log(`Application started on port 3000`);
});

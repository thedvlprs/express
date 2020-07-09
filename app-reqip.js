const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    res.send(`The request IP is: ${req.ip}`);
});

app.listen(3000, () => {
    console.log(`Application started on port 3000`);
});

const express = require('express');

const app = express();

app.get('/greet', (req, res) => {
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    let name = req.query.name;
    let msg = `Hello ${name}`;
    res.send(msg);
});

app.listen(3000, () => console.log('Application started on port 3000'));

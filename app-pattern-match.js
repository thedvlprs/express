const express = require('express');

const app = express();

app.get('/city/:id([0-9]{1,5})', (req, res) => {
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    res.send(`id: ${req.params.id}`);
});

app.listen(3000, () => {
    console.log(`Application started on port 3000`);
});

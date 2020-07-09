const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/message', (req, res) => {
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    let name = req.body.name;
    let message = req.body.message;
    let output = `${name} says: ${message}`;

    res.send(output);
});

app.listen(3000, () => {
    console.log(`Application started on port 3000`);
});

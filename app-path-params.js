const express = require('express');

const app = express();

app.get('/show/:name/:age/', (req, res) => {
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    let name = req.params.name;
    let age = req.params.age;
    let msg = `${name} is ${age} years old`;

    res.send(msg);
});

app.listen(3000, () => {
    console.log(`Application started on port 3000`);
});

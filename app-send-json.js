const express = require('express');
const _ = require('lodash');

const app = express();

app.get('/movies', (req, res) => {
    res.set({ 'Content-Type': 'application/json; charset=utf-8' });

    let movies = {
        1: 'Toy story',
        2: 'The Raid',
        3: 'Hero',
        4: 'Ip Man',
        5: 'Kung Fu Panda',
    };

    let movie = _.sample(movies);

    res.json({ movie });
});

app.listen(3000, () => {
    console.log(`Application started on port 3000`);
});

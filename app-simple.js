const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello there!'));

app.listen(3000, () => {
    console.log(`Application started on port 3000`);
});

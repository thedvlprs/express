const express = require('express');

const app = express();
app.use(express.json());

app.post('/info', (req, res) => {
    console.log(req.body);

    res.json(req.body);
});

app.listen(3000, () => {
    console.log('Application started on port 3000');
});

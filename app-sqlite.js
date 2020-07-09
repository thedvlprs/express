const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('data/test.db');

app.get('/', (req, res) => {
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    res.send('Home page');
});

app.get('/cities', (req, res) => {
    const sql = 'select * from cities';
    const params = [];

    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }

        if (!rows) {
            res.status(204).json({ error: 'No cities found' });
            return;
        }

        res.json({
            message: 'success',
            data: rows,
        });
    });
});

app.get('/city/:id', (req, res) => {
    const sql = 'select * from cities where id = ?';
    const params = [req.params.id];

    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }

        if (!row) {
            res.status(204).json({ error: 'City not found' });
            return;
        }

        res.json({
            message: 'success',
            data: row,
        });
    });
});

const server = app.listen(3000, () => {
    console.log('Application started on port 3000');
});

process.on('SIGINT', () => {
    db.close((err) => {
        console.log('Application terminating');

        if (err) {
            console.error(err.message);
        }
        console.log('Closing the database connection.');
    });

    server.close();
});

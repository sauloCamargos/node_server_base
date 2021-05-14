import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ body: 'hello world' }));

app.listen(3333);

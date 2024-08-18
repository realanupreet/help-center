import express from 'express';
import cors from 'cors';
import database from './database.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is live and running!');
});

app.listen(3000, () => { 
    console.log('Server is running on http://localhost:3000');
});


console.log('Hello, World!');
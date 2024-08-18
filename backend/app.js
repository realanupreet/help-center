import express from 'express';
import cors from 'cors';
import database from './database.js';
import { serverConfig } from './env.js';

const app = express();

app.use(cors());
app.use(express.json());
// For pretty-printing JSON
if (app.get('env') === 'development') {
    app.set('json spaces', 2);
}

app.get('/', async (req, res) => {
    const data = await database.getAllRequests();
    res.send({
        message: 'Backend is live and running!',
        data: data,
    });
});

app.listen(serverConfig.port, () => { 
    console.log(`Server is running on http://localhost:${serverConfig.port}`);
});


console.log('Hello, World!');
import express from 'express';
import cors from 'cors';
import {
    getAllRequests,
    getOneRequest,
    createRequest,
    searchRequest,
} from './database.js';
import { errorHandler } from './middleware/errorHandler.js';
import { serverConfig } from './env.js';

const app = express();

app.use(cors());
app.use(express.json());

// For pretty-printing JSON
if (app.get('env') === 'development') {
    app.set('json spaces', 2);
}

app.get('/', async (req, res) => {
    const data = await getAllRequests(req.body);
    res.send(data);
});

app.post('/search', async (req, res) => {
    console.log('request received', req.body);
    const data = await searchRequest(req.body);
    res.send(data);
});

app.get('/ping', (req, res) => {
    res.send('Server is running');
});

app.get('/request/:id', async (req, res) => {
    const id = req.params.id;
    const data = await getOneRequest(id);
    res.send(data);
});

app.post('/', async (req, res) => {
    let request = req.body;
    request.data = request.description || '';
    const id = await createRequest(request);
    setTimeout(() => {
        res.send({
            message: 'Request created successfully',
            id: id,
        });
    }, 2000);
});

//middleware to handle errors
app.use(errorHandler); 

app.listen(serverConfig.port, () => { 
    console.log(`Server is running on http://localhost:${serverConfig.port}`);
});


console.log('Hello, World!');
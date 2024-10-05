import express from 'express';
import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();

const app = express();
const port = process.env.PORT || 3014;

app.get('/', (req: express.Request, res: express.Response) => {
    logger.info(`Received request on root endpoint/api-gateway`)
    res.send('Api-gateway is running!')
});

app.listen(port, () => {
    logger.info(`API-Gateway listening at http://localhost:${port}`);
});
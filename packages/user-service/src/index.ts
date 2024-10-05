import express from 'express';
import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();

const app = express();
const port = process.env.PORT || 3010;

app.get('/', (req: express.Request, res: express.Response) => {
    logger.info(`Received request on root endpoint`)
    res.send('user service is running!')
});

app.listen(port, () => {
    logger.info(`User service listening at http://localhost:${port}`);
});
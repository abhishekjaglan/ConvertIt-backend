import express from 'express';
import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();

const app = express();
const port = process.env.PORT || 3011;

app.get('/', (req: express.Request, res: express.Response) => {
    logger.info(`Received request on root endpoint/Email service`)
    res.send('Email service is running!')
});

app.listen(port, () => {
    logger.info(`Email service listening at http://localhost:${port}`);
});
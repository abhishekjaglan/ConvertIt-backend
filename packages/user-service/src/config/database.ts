import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import logger from '../logger';

dotenv.config();

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const USERS_TABLE = process.env.USERS_TABLE || 'Users';
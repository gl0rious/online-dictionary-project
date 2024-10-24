import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const host = process.env.MONGODB_HOST || 'localhost';
const port = process.env.MONGODB_PORT || '27017';
const dbName = process.env.MONGODB_DB || 'dictionary';

let dbURI;

if (username && password) {
    dbURI = `mongodb://${username}:${password}@${host}:${port}/${dbName}?authSource=admin`;
} else {
    dbURI = `mongodb://${host}:${port}/${dbName}`;
}

export const connectDB = async () => {
    const client = new MongoClient(dbURI);
    try {
        await client.connect();
        return { client, db: client.db(dbName) };
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
};

export const dropCollection = async (db, name) => {
    const collection = db.collection(name);
    try {
        await collection.drop();
    } catch (err) {
        if (err.codeName !== 'NamespaceNotFound') {
            throw err;
        }
    }
};

export const closeConnection = async (client) => {
    await client.close();
};

import { connectDB, dropCollection, closeConnection } from './db.js';
import fs from 'fs';
import { resolve } from 'path';

// const filePath = path.resolve('./database/englishdictionary.json');
// const filePath = path.resolve('./database/popular.json');
// const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const importCollection = async (path, name) => {
    let client;
    try {
        const filePath = resolve(path);
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const { client: mongoClient, db } = await connectDB();
        client = mongoClient;
        await dropCollection(db, name);
        const collection = db.collection(name);
        const result = await collection.insertMany(jsonData.entries);
        console.log(`${result.insertedCount} documents inserted into the '${name}' collection`);
    } catch (err) {
        console.error('Error during the import process:', err);
    } finally {
        if (client) {
            await closeConnection(client);
        }
    }
}

(async () => {
    importCollection('./database/englishdictionary.json', 'words');
    importCollection('./database/popular.json', 'popular');
})();

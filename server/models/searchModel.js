import { connectDB } from '../database/db.js';

export const searchWordsInDB = async (query) => {
    let mongoClient;
    try {
        const { client, db } = await connectDB();
        mongoClient = client;
        const collection = db.collection('words');

        const regex = new RegExp(`^${query}$`, 'i');
        return await collection.find({ word: regex }).limit(10).toArray();
    } catch (error) {
        console.error('Error searching words in the database:', error);
        throw new Error('Database search failed');
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
};

export const incrementSearchCount = async (word) => {
    let mongoClient;
    try {
        const { client, db } = await connectDB();
        mongoClient = client;
        const searchCountCollection = db.collection('popular');
        await searchCountCollection.updateOne(
            { word },
            { $inc: { count: 1 } },
            { upsert: true }
        );
    } catch (error) {
        console.error('Error incrementing search count in the database:', error);
        throw new Error('Failed to increment search count');
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
};

export const getPopularWordsFromDB = async () => {
    let mongoClient;
    try {
        const { client, db } = await connectDB();
        mongoClient = client;
        const searchCountCollection = db.collection('popular');
        return await searchCountCollection.find().sort({ count: -1 }).limit(10).toArray();
    } catch (error) {
        console.error('Error retrieving top searched words from the database:', error);
        throw new Error('Failed to retrieve top searched words');
    } finally {
        if (mongoClient) {
            await mongoClient.close();
        }
    }
};

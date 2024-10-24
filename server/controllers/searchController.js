import { searchWordsInDB, incrementSearchCount, getPopularWordsFromDB } from '../models/searchModel.js';
import { connectDB, closeConnection } from '../database/db.js';

export const searchWords = async (req, res) => {
    const { q: query } = req.query;

    if (!query) {
        return res.status(400).json({ message: 'Query parameter is required' });
    }

    try {
        const results = await searchWordsInDB(query);
        await incrementSearchCount(query);
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Error while searching for words', error: error.message });
    }
};

export const getPopularWords = async (req, res) => {
    let client;
    try {
        const { client: dbClient, db } = await connectDB();
        client = dbClient;

        const topWords = await getPopularWordsFromDB(db);
        res.json(topWords);
    } catch (error) {
        res.status(500).json({ message: 'Error while retrieving popular words', error: error.message });
    } finally {
        if (client) {
            await closeConnection(client);
        }
    }
};

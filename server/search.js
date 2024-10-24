// import express from 'express';

// const searchRouter = (db) => {
//     const router = express.Router();

//     router.get('/search', async (req, res) => {
//         const term = req.query.term?.toLowerCase();
//         if (!term) {
//             return res.status(400).json({ error: 'No term provided' });
//         }

//         try {
//             const collection = db.collection('terms');
//             const result = await collection.findOne({ term });
//             if (result) {
//                 res.json({ term: result.term, definition: result.definition });
//             } else {
//                 res.status(404).json({ error: 'Term not found' });
//             }
//         } catch (err) {
//             console.error('Error searching term:', err);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     });

//     // Route for top 10 popular search terms
//     router.get('/popular', async (req, res) => {
//         try {
//             const collection = db.collection('popularTerms');
//             const popularTerms = await collection.find().sort({ count: -1 }).limit(10).toArray();
//             res.json(popularTerms);
//         } catch (err) {
//             console.error('Error fetching popular terms:', err);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     });

//     return router;
// };

// export default searchRouter;

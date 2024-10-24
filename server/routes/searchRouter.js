import express from 'express';
import { searchWords, getPopularWords } from '../controllers/searchController.js';

const router = express.Router();

/**
 * @swagger
 * /api/search:
 *   get:
 *     summary: Search for words
 *     description: Fetch words that match the search query
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: The word to search for
 *     responses:
 *       200:
 *         description: A list of words
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   word:
 *                     type: string
 *                   wordtype:
 *                     type: string
 *                   definition:
 *                     type: string
 */
router.get('/search', searchWords);

/**
 * @swagger
 * /api/popular:
 *   get:
 *     summary: Get popular search words
 *     description: Fetch the top 10 most searched words
 *     responses:
 *       200:
 *         description: A list of popular words
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   word:
 *                     type: string
 *                   count:
 *                     type: integer
 */
router.get('/popular', getPopularWords);

export default router;

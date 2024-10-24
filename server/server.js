import express from 'express';
import cors from 'cors';
import searchRouter from './routes/searchRouter.js';
import swaggerConfig from './swaggerConfig.js';

const app = express();
const port = process.env.SERVER_PORT || 4000;

app.use(cors());
app.use(express.json());
swaggerConfig(app);
app.use('/api', searchRouter);

app.use(async (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

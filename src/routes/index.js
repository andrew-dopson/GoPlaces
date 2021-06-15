import express from 'express';
import poi from './poi';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: 'Hello' }));

indexRouter.use('/poi', poi);

export default indexRouter;
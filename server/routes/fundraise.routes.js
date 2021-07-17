import express from 'express';

const router = express.Router();

import { getFundraise, createFundraise } from '../controllers/fundraise.controller.js';

router.get('/get-fundraise', getFundraise);
router.post('/create-fundraise', createFundraise);

export default router;

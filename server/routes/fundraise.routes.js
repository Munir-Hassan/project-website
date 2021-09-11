import express from 'express';

const router = express.Router();

import { getFundraise, createFundraise, getFundraisePost } from '../controllers/fundraise.controller.js';

router.get('/get-fundraise', getFundraise);
router.get('/get-fundraise/:id', getFundraisePost);
router.post('/create-fundraise', createFundraise);

export default router;

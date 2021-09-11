import express from 'express';

const router = express.Router();

import { acceptPayment } from '../controllers/payment.controller.js';

router.post('/accept-payment', acceptPayment);

export default router;

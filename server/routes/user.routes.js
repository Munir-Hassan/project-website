import express from 'express';

const router = express.Router();

import { signUp, signIn, adminLogin, createAdmin } from '../controllers/user.controller.js';

router.post('/auth/signup', signUp);
router.post('/auth/signin', signIn);
router.post('/auth/admin-login', adminLogin);
router.post('/auth/create-admin', createAdmin);

export default router;

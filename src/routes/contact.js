// src/routes/contact.js
import express from 'express';
import { createMessage } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', createMessage);

export default router;

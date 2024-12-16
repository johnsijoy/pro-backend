// src/routes/experience.js
import express from 'express';
import { getExperiences, createExperience } from '../controllers/experienceController.js';

const router = express.Router();

router.get('/', getExperiences);
router.post('/', createExperience);

export default router;

// src/routes/skills.js
import express from 'express';
import { getSkills, createSkill } from '../controllers/skillsController.js';

const router = express.Router();

router.get('/', getSkills);
router.post('/', createSkill);

export default router;

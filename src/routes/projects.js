// src/routes/projects.js
import express from 'express';
import { getProjects, createProject } from '../controllers/projectsController.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);

export default router;

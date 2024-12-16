// src/controllers/experienceController.js
import Experience from '../models/Experience.js';

export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createExperience = async (req, res) => {
  const { company, position, startDate, endDate, description } = req.body;

  try {
    const newExperience = await Experience.create({
      company,
      position,
      startDate,
      endDate,
      description,
    });
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

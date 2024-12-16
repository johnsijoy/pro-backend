// src/controllers/contactController.js
import Contact from '../models/Contact.js';

export const createMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = await Contact.create({ name, email, message });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

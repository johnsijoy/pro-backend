// src/models/Experience.js
import mongoose from 'mongoose';

const experienceSchema = mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false },
  description: { type: String, required: true },
});

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;

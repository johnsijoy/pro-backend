import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true }, // e.g., Beginner, Intermediate, Expert
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Skill', skillSchema);

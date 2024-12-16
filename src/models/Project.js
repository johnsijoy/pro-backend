import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // For project image file paths
  link: { type: String }, // Project demo or code link
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Project', projectSchema);

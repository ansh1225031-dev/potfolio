import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String },
  technologies: [{ type: String }],
  github: { type: String },
  live: { type: String },
  featured: { type: Boolean, default: false },
  overview: { type: String },
  problem: { type: String },
  solution: { type: String },
  features: [{ type: String }],
  challenges: { type: String },
  learned: { type: String },
  future: [{ type: String }],
  order: { type: Number, default: 0 }
}, {
  timestamps: true
});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import connectDB from './config/db.js';

import projectRoutes from './routes/projects.js';
import skillRoutes from './routes/skills.js';
import achievementRoutes from './routes/achievements.js';

import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

console.log("🔥 THIS SERVER.JS IS RUNNING");
console.log("🔥 MONGODB_URI =", process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

if (process.env.MONGODB_URI) {
  connectDB();
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/achievements', achievementRoutes);


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

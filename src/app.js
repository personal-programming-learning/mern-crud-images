import express from 'express';
const app = express();

import postsRoutes from './routes/posts.routes.js';

// Middleware
app.use(express.json());

// Routes
app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Route /' })
})

export default app;


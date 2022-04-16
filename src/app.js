import express from 'express';
import fileUpload from 'express-fileupload';

const app = express();

import postsRoutes from './routes/posts.routes.js';

// Middleware
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}));

// Routes
app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Route /' })
})

export default app;


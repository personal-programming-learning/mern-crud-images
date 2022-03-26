import express from 'express';
const app = express();

import postsRoutes from './src/routes/posts.routes.js'

app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Soy un mensaje de la ruta /' })
})

app.listen(3000);
console.log('Server in running port', 3000)
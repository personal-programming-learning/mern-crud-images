import { Router } from 'express'; 
import { getPosts, getByIdPost ,createPosts, updatePosts, deletePosts } from '../controllers/posts.controllers.js';

const router = Router();

router.get('/', getPosts);
router.get('/:id', getByIdPost);
router.post('/', createPosts);
router.put('/:id', updatePosts);
router.delete('/:id', deletePosts);

export default router;
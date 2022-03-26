import { Router } from 'express'; 

const router = Router();

router.get('/', (req, res) => {
  const response = [];
  res.json({ data:response })
})

export default router;
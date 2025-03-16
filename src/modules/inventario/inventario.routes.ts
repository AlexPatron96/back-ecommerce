// routes/inventario.routes.ts
import { Router } from 'express';
import { getInventario, updateStock } from './inventario.controller';

const router = Router();

router.get('/', getInventario);
router.put('/:id', updateStock);

export default router;

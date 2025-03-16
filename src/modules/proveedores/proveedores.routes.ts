// routes/proveedores.routes.ts
import { Router } from 'express';
import {
    createProveedor,
    deleteProveedor,
    getProveedores,
    updateProveedor,
} from './proveedores.controller';

const router = Router();

router.post('/', createProveedor);
router.get('/', getProveedores);
router.put('/:id', updateProveedor);
router.delete('/:id', deleteProveedor);

export default router;

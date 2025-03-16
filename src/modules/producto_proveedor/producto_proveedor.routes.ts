// routes/producto_proveedor.routes.ts
import { Router } from 'express';
import {
    createProductoProveedor,
    deleteProductoProveedor,
    getProductosProveedores,
    updateProductoProveedor,
} from './producto_proveedor.controller';

const router = Router();

router.post('/', createProductoProveedor);
router.get('/', getProductosProveedores);
router.put('/:id', updateProductoProveedor);
router.delete('/:id', deleteProductoProveedor);

export default router;

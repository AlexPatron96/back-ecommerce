import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    asociarImpuestoAProductoController,
    eliminarAsociacionProductoImpuestoController,
    eliminarImpuestosDeProductoController,
    obtenerImpuestosPorProductoController,
    obtenerProductosPorImpuestoController,
} from './producto_impuesto.controller';

const router = express.Router();

router.post('/asociar', authenticateToken, asociarImpuestoAProductoController);
router.get('/producto/:producto_id', obtenerImpuestosPorProductoController);
router.get('/impuesto/:impuesto_id', obtenerProductosPorImpuestoController);
router.delete(
    '/eliminar/:id',
    authenticateToken,
    eliminarAsociacionProductoImpuestoController,
);
router.delete(
    '/eliminar-producto/:producto_id',
    authenticateToken,
    eliminarImpuestosDeProductoController,
);

export default router;

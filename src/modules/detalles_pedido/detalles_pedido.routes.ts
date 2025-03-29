import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    actualizarCantidadDetallePedidoController,
    agregarDetallePedidoController,
    eliminarDetallePedidoController,
    obtenerDetallesPorPedidoController,
    vaciarDetallesPedidoController,
} from './detalles_pedido.controller';

const router = express.Router();

router.post('/agregar2', authenticateToken, agregarDetallePedidoController);
router.post('/agregar', agregarDetallePedidoController);
router.get('/:pedido_id', obtenerDetallesPorPedidoController);
router.put('/actualizar/:id', actualizarCantidadDetallePedidoController);
router.delete('/eliminar/:id', eliminarDetallePedidoController);
router.delete('/vaciar/:pedido_id', vaciarDetallesPedidoController);

export default router;

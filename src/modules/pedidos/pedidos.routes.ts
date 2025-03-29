import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    actualizarEstadoPedidoController,
    crearPedidoController,
    eliminarPedidoController,
    obtenerPedidoPorIdController,
    obtenerPedidosController,
} from './pedidos.controller';

const router = express.Router();

router.post('/hola', authenticateToken, crearPedidoController);
router.post('/crear', crearPedidoController);
router.get('/', obtenerPedidosController);
router.get('/:id', obtenerPedidoPorIdController);
router.put('/actualizar/:id', actualizarEstadoPedidoController);
router.delete('/eliminar/:id', eliminarPedidoController);

export default router;

import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    actualizarCantidadEnCarritoController,
    agregarProductoAlCarritoController,
    eliminarProductoDelCarritoController,
    obtenerCarritoPorUsuarioController,
    vaciarCarritoController,
} from './carrito.controller';

const router = express.Router();

router.post('/asd', authenticateToken, agregarProductoAlCarritoController);
router.post('/agregar', agregarProductoAlCarritoController);
router.get('/:usuario_id', obtenerCarritoPorUsuarioController);
router.put('/actualizar/:id', actualizarCantidadEnCarritoController);
router.delete('/eliminar/:id', eliminarProductoDelCarritoController);
router.delete('/vaciar/:usuario_id', vaciarCarritoController);

export default router;

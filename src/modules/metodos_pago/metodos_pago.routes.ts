import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    actualizarMetodoPagoController,
    crearMetodoPagoController,
    eliminarMetodoPagoController,
    obtenerMetodoPagoPorIdController,
    obtenerMetodosPagoController,
} from './metodos_pago.controller';

const router = express.Router();

router.post('/crear', authenticateToken, crearMetodoPagoController);
router.get('/', obtenerMetodosPagoController);
router.get('/:id', obtenerMetodoPagoPorIdController);
router.put(
    '/actualizar/:id',
    authenticateToken,
    actualizarMetodoPagoController,
);
router.delete('/eliminar/:id', authenticateToken, eliminarMetodoPagoController);

export default router;

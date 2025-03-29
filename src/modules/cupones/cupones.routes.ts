import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    aplicarCuponController,
    crearCuponController,
    eliminarCuponController,
    obtenerCuponesController,
    obtenerCuponPorCodigoController,
} from './cupones.controller';

const router = express.Router();

router.post('/crear1', authenticateToken, crearCuponController);
router.post('/crear', crearCuponController);
router.get('/', obtenerCuponesController);
router.get('/:codigo', obtenerCuponPorCodigoController);
router.put('/aplicar/:codigo', aplicarCuponController);
router.delete('/eliminar/:id', eliminarCuponController);

export default router;

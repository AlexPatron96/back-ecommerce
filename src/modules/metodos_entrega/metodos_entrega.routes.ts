import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    actualizarMetodoEntregaController,
    crearMetodoEntregaController,
    eliminarMetodoEntregaController,
    obtenerMetodoEntregaPorIdController,
    obtenerMetodosEntregaController,
} from './metodos_entrega.controller';

const router = express.Router();

router.post('/crear', authenticateToken, crearMetodoEntregaController);
router.get('/', obtenerMetodosEntregaController);
router.get('/:id', obtenerMetodoEntregaPorIdController);
router.put(
    '/actualizar/:id',
    authenticateToken,
    actualizarMetodoEntregaController,
);
router.delete(
    '/eliminar/:id',
    authenticateToken,
    eliminarMetodoEntregaController,
);

export default router;

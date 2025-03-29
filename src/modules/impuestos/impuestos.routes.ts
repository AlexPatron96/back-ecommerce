import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    actualizarImpuestoController,
    crearImpuestoController,
    eliminarImpuestoController,
    obtenerImpuestoPorIdController,
    obtenerImpuestosController,
} from './impuestos.controller';

const router = express.Router();

router.post('/crear', authenticateToken, crearImpuestoController);
router.get('/', obtenerImpuestosController);
router.get('/:id', obtenerImpuestoPorIdController);
router.put('/actualizar/:id', authenticateToken, actualizarImpuestoController);
router.delete('/eliminar/:id', authenticateToken, eliminarImpuestoController);

export default router;

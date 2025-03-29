import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    actualizarSeccionController,
    crearSeccionController,
    eliminarSeccionController,
    obtenerSeccionesController,
    obtenerSeccionPorIdController,
} from './secciones.controller';

const router = express.Router();

router.post('/crear', authenticateToken, crearSeccionController);
router.get('/', obtenerSeccionesController);
router.get('/:id', obtenerSeccionPorIdController);
router.put('/actualizar/:id', authenticateToken, actualizarSeccionController);
router.delete('/eliminar/:id', authenticateToken, eliminarSeccionController);

export default router;

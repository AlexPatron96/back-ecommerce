import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    eliminarActividadController,
    eliminarTodasLasActividadesController,
    obtenerActividadesController,
    obtenerActividadesPorUsuarioController,
    registrarActividadController,
} from './actividades.controller';

const router = express.Router();

router.post('/registrar', authenticateToken, registrarActividadController);
router.get('/', authenticateToken, obtenerActividadesController);
router.get(
    '/:usuario_id',
    authenticateToken,
    obtenerActividadesPorUsuarioController,
);
router.delete('/eliminar/:id', authenticateToken, eliminarActividadController);
router.delete(
    '/eliminar-todo',
    authenticateToken,
    eliminarTodasLasActividadesController,
);

export default router;

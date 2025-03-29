import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    actualizarMarcaController,
    crearMarcaController,
    eliminarMarcaController,
    obtenerMarcaPorIdController,
    obtenerMarcasController,
} from './marcas.controller';

const router = express.Router();

router.post('/crear', authenticateToken, crearMarcaController);
router.get('/', obtenerMarcasController);
router.get('/:id', obtenerMarcaPorIdController);
router.put('/actualizar/:id', authenticateToken, actualizarMarcaController);
router.delete('/eliminar/:id', authenticateToken, eliminarMarcaController);

export default router;

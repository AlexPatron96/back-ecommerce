import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    agregarFavoritoController,
    eliminarFavoritoController,
    obtenerFavoritosPorUsuarioController,
} from './favoritos.controller';

const router = express.Router();

router.post('/agregar', authenticateToken, agregarFavoritoController);
router.get(
    '/:usuario_id',
    authenticateToken,
    obtenerFavoritosPorUsuarioController,
);
router.delete('/eliminar/:id', authenticateToken, eliminarFavoritoController);

export default router;

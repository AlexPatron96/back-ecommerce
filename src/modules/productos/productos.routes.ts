import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import { upload } from '../../middleware/multer';
import {
    actualizarProductoController,
    crearProductoController,
    crearProductoFileController,
    eliminarProductoController,
    obtenerProductoPorIdController,
    obtenerProductosController,
} from './productos.controller';

const router = express.Router();

router.post('/crear', authenticateToken, crearProductoController);
router.get('/', obtenerProductosController);
router.get('/:id', obtenerProductoPorIdController);
router.put('/actualizar/:id', actualizarProductoController);
router.delete('/eliminar/:id', eliminarProductoController);

// ✅ Crear un producto con archivos adjuntos (imágenes, videos, documentos)
router.post(
    '/crear-file',
    authenticateToken,
    upload.array('archivos', 10),
    crearProductoFileController,
);
export default router;

import express from 'express';
import { upload } from '../../middleware/multer';
import FileController from './files.controller';

const router = express.Router();

// ✅ Subir un archivo
router.post('/upload', upload.single('file'), FileController.uploadFile);

// router.post("/upload", authenticateToken, FileController.uploadFile);

// ✅ Eliminar un archivo por su nombre
router.delete('/delete/:fileName', FileController.deleteFile);
// router.delete("/delete/:fileName", authenticateToken, FileController.deleteFile);

export default router;

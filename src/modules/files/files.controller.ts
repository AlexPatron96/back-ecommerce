import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

class FileController {
    static async uploadFile(req: Request, res: Response): Promise<void> {
        try {
            if (!req.file) {
                res.status(400).json({
                    message: 'No se subió ningún archivo.',
                });
                return;
            }

            const { mimetype, buffer } = req.file;
            const fileName = req.body.fileName; // ✅ Recibir el nombre del archivo desde el frontend
            if (!fileName) {
                res.status(400).json({
                    message: 'El nombre del archivo (fileName) es obligatorio.',
                });
                return;
            }
            const hoy = new Date();

            // Extraer día, mes y año
            const dia = String(hoy.getDate()).padStart(2, '0'); // Día con 2 dígitos
            const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Mes (sumamos 1 porque empieza en 0)
            const anio = hoy.getFullYear(); // Año completo

            // Formato final
            const fechaFormateada = `${dia}${mes}${anio}`;
            const uniqueSuffix = `${fileName}-${fechaFormateada}-${Math.round(Math.random() * 1e4)}`;
            let filePath = '';
            let fileUrl = '';
            let thumbnailUrl = '';

            // ✅ Procesar IMÁGENES y generar miniatura
            if (mimetype.startsWith('image/')) {
                const fileName = `${uniqueSuffix}.webp`;
                filePath = path.join(
                    __dirname,
                    '../../../uploads/images/',
                    fileName,
                );
                const thumbnailPath = path.join(
                    __dirname,
                    '../../../uploads/thumbnails/',
                    fileName,
                );

                // ✅ Guardar imagen optimizada
                await sharp(buffer)
                    // .resize(800) // Redimensionar a 800px de ancho
                    .toFormat('webp')
                    .webp({ quality: 80 })
                    .toFile(filePath);

                // ✅ Generar miniatura de 200px de ancho
                await sharp(buffer)
                    .resize(150) // Thumbnail de 200px
                    .toFormat('webp')
                    .webp({ quality: 60 }) // Más comprimido
                    .toFile(thumbnailPath);

                fileUrl = `/uploads/images/${fileName}`;
                thumbnailUrl = `/uploads/thumbnails/${fileName}`;
            }

            // ✅ Procesar VIDEOS (sin miniatura)
            else if (mimetype.startsWith('video/')) {
                const fileExtension = path.extname(req.file.originalname);
                const fileName = `${uniqueSuffix}${fileExtension}`;
                filePath = path.join(
                    __dirname,
                    '../../../uploads/videos/',
                    fileName,
                );
                fs.writeFileSync(filePath, buffer);
                fileUrl = `/uploads/videos/${fileName}`;
            }

            // ✅ Procesar DOCUMENTOS (sin miniatura)
            else if (mimetype.startsWith('application/')) {
                const fileExtension = path.extname(req.file.originalname);
                const fileName = `${uniqueSuffix}${fileExtension}`;
                filePath = path.join(
                    __dirname,
                    '../../../uploads/documents/',
                    fileName,
                );
                fs.writeFileSync(filePath, buffer);
                fileUrl = `/uploads/documents/${fileName}`;
            }

            res.status(201).json({
                message: 'Archivo subido con éxito',
                fileUrl,
                thumbnailUrl: thumbnailUrl || null, // Miniatura solo si es imagen
                fileType: mimetype,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al procesar archivo',
                error,
            });
        }
    }

    // ✅ Nueva función para eliminar archivos
    static async deleteFile(req: Request, res: Response): Promise<void> {
        try {
            const { fileName } = req.params; // Nombre del archivo desde la URL
            if (!fileName) {
                res.status(400).json({
                    message: 'El nombre del archivo es obligatorio.',
                });
                return;
            }

            // ✅ Rutas de posibles archivos
            const imagePath = path.join(
                __dirname,
                '../../../uploads/images/',
                fileName,
            );
            const thumbnailPath = path.join(
                __dirname,
                '../../../uploads/thumbnails/',
                fileName,
            );
            const videoPath = path.join(
                __dirname,
                '../../../uploads/videos/',
                fileName,
            );
            const docPath = path.join(
                __dirname,
                '../../../uploads/documents/',
                fileName,
            );

            // ✅ Verificar y eliminar si el archivo existe
            let deleted = false;

            [imagePath, thumbnailPath, videoPath, docPath].forEach(filePath => {
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                    deleted = true;
                }
            });

            if (deleted) {
                res.json({ message: 'Archivo eliminado con éxito.' });
            } else {
                res.status(404).json({ message: 'Archivo no encontrado.' });
            }
        } catch (error) {
            res.status(500).json({
                message: 'Error al eliminar archivo',
                error,
            });
        }
    }
}

export default FileController;

import multer from 'multer';

// ✅ Tipos de archivo permitidos
const fileTypes = {
    images: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp'],
    videos: ['video/mp4', 'video/mpeg', 'video/ogg', 'video/webm'],
    documents: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
};

// ✅ Configurar almacenamiento en memoria (antes de procesar)
const storage = multer.memoryStorage();

export const upload = multer({
    storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // ✅ Límite de 50MB para todos los archivos
    fileFilter: (req, file, cb) => {
        if (
            fileTypes.images.includes(file.mimetype) ||
            fileTypes.videos.includes(file.mimetype) ||
            fileTypes.documents.includes(file.mimetype)
        ) {
            cb(null, true);
        } else {
            cb(
                new Error(
                    'Formato de archivo no válido. Solo imágenes, videos y documentos.',
                ),
            );
        }
    },
});

// import multer from 'multer';

// // ✅ Configurar almacenamiento temporal
// const storage = multer.memoryStorage(); // Guardar en memoria antes de procesar

// export const upload = multer({
//     storage,
//     limits: { fileSize: 5 * 1024 * 1024 }, // Límite de 5MB por imagen
//     fileFilter: (req, file, cb) => {
//         if (!file.mimetype.startsWith('image/')) {
//             return cb(new Error('Solo se permiten imágenes'));
//         }
//         cb(null, true);
//     },
// });

// import multer from 'multer';
// import path from 'path';

// // ✅ Tipos de archivo permitidos
// const fileTypes = {
//     images: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
//     videos: ['video/mp4', 'video/mpeg', 'video/ogg', 'video/webm'],
//     documents: [
//         'application/pdf',
//         'application/msword',
//         'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//     ],
// };

// // ✅ Configurar almacenamiento en carpetas separadas
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         let uploadPath = 'uploads/';

//         if (fileTypes.images.includes(file.mimetype)) {
//             uploadPath += 'images/';
//         } else if (fileTypes.videos.includes(file.mimetype)) {
//             uploadPath += 'videos/';
//         } else if (fileTypes.documents.includes(file.mimetype)) {
//             uploadPath += 'documents/';
//         } else {
//             return cb(new Error('Formato de archivo no válido'), '');
//         }

//         cb(null, uploadPath);
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//         cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
//     },
// });

// // ✅ Middleware de `Multer`
// export const upload = multer({
//     storage,
//     limits: { fileSize: 10 * 1024 * 1024 }, // 10MB máximo
//     fileFilter: (req, file, cb) => {
//         if (
//             fileTypes.images.includes(file.mimetype) ||
//             fileTypes.videos.includes(file.mimetype) ||
//             fileTypes.documents.includes(file.mimetype)
//         ) {
//             cb(null, true);
//         } else {
//             cb(
//                 new Error(
//                     'Formato de archivo no válido. Solo imágenes, videos y documentos.',
//                 ),
//             );
//         }
//     },
// });

// *********************** Permite subir un archivo routes *********************************
// import express from "express";
// import { FileController } from "./files.controller";
// import { upload } from "../../carp-middleware/multer";
// import { authMiddleware } from "../../carp-middleware/auth";

// const router = express.Router();

// // ✅ Subir un solo archivo (imagen, video o documento)
// router.post("/upload", authMiddleware, upload.single("file"), FileController.uploadFile);

// export default router;

// *********************** Permite subir un archivo Controller *********************************

// import express from "express";
// import { FileController } from "./files.controller";
// import { upload } from "../../carp-middleware/multer";
// import { authMiddleware } from "../../carp-middleware/auth";

// const router = express.Router();

// // ✅ Subir un solo archivo (imagen, video o documento)
// router.post("/upload", authMiddleware, upload.single("file"), FileController.uploadFile);

// export default router;

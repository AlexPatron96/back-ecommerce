import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { prisma } from '../../app';

// ✅ Procesar y almacenar un archivo
export const procesarArchivo = async (producto_id: any, archivo: any) => {
    console.log({ message: 'imagen recibe:', producto_id, archivo });
    const { mimetype, buffer, originalname } = archivo;
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e4)}`;
    let filePath = '';
    let fileUrl = '';
    let thumbnailUrl = '';

    // ✅ Guardar IMÁGENES con miniatura
    if (mimetype.startsWith('image/')) {
        const fileName = `${uniqueName}.webp`;
        filePath = path.join(__dirname, '../../../uploads/images/', fileName);
        const thumbnailPath = path.join(
            __dirname,
            '../../../uploads/thumbnails/',
            fileName,
        );

        await sharp(buffer)
            .toFormat('webp')
            .webp({ quality: 80 })
            .toFile(filePath);
        await sharp(buffer)
            .resize(150)
            .toFormat('webp')
            .webp({ quality: 60 })
            .toFile(thumbnailPath);

        fileUrl = `/uploads/images/${fileName}`;
        thumbnailUrl = `/uploads/thumbnails/${fileName}`;
    }

    // ✅ Guardar VIDEOS
    else if (mimetype.startsWith('video/')) {
        const fileExtension = path.extname(originalname);
        const fileName = `${uniqueName}${fileExtension}`;
        filePath = path.join(__dirname, '../../../uploads/videos/', fileName);
        fs.writeFileSync(filePath, buffer);
        fileUrl = `/uploads/videos/${fileName}`;
    }

    // ✅ Guardar en la base de datos
    return await prisma.imagenes.create({
        data: {
            producto_id,
            url: fileUrl,
            thumbnail: thumbnailUrl || null,
        },
    });
};

import { procesarArchivo } from './files.repository';

// ✅ Subir archivos y asociarlos a un producto
export const servicioSubirArchivos = async (
    producto_id: any,
    archivos: Express.Multer.File[],
) => {
    const archivosProcesados = await Promise.all(
        archivos.map(
            async archivo => await procesarArchivo(producto_id, archivo),
        ),
    );
    return archivosProcesados;
};

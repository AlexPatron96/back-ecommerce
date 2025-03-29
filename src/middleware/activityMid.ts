import { NextFunction, Request, Response } from 'express';
import { servicioRegistrarActividad } from '../modules/actividades/actividades.service';

// ✅ Middleware para registrar actividades automáticamente
export const actividadMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const usuario_id = req.user?.id || null; // Verifica si hay un usuario autenticado (debe estar en `req.user`)
        const tipo_actividad = req.method + ' ' + req.path; // Ejemplo: "POST /productos/crear"
        const descripcion = JSON.stringify(req.body); // Guarda el contenido de la solicitud

        // Evitar registrar actividades para ciertas rutas (opcional)
        const rutasExcluidas = ['/actividades', '/login', '/logout'];
        if (rutasExcluidas.some(ruta => req.path.includes(ruta))) {
            return next();
        }

        // Registra la actividad en la BD
        await servicioRegistrarActividad({
            usuario_id,
            tipo_actividad,
            descripcion:
                descripcion.length > 200
                    ? descripcion.substring(0, 200) + '...'
                    : descripcion, // Limita descripción
        });

        next();
    } catch (error) {
        console.error('Error registrando actividad:', error);
        next(); // No interrumpe la ejecución, solo registra el error
    }
};

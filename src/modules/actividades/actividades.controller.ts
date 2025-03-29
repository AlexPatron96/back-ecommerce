import { Request, Response } from 'express';
import {
    servicioEliminarActividad,
    servicioEliminarTodasLasActividades,
    servicioObtenerActividades,
    servicioObtenerActividadesPorUsuario,
    servicioRegistrarActividad,
} from './actividades.service';

// ✅ Registrar una actividad
export const registrarActividadController = async (
    req: Request,
    res: Response,
) => {
    try {
        const actividad = await servicioRegistrarActividad(req.body);
        res.status(201).json({
            message: 'Actividad registrada con éxito',
            actividad,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al registrar actividad',
            error,
        });
    }
};

// ✅ Obtener todas las actividades
export const obtenerActividadesController = async (
    req: Request,
    res: Response,
) => {
    try {
        const actividades = await servicioObtenerActividades();
        res.json(actividades);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener actividades',
            error,
        });
    }
};

// ✅ Obtener actividades por usuario
export const obtenerActividadesPorUsuarioController = async (
    req: Request,
    res: Response,
) => {
    try {
        const usuario_id = Number(req.params.usuario_id);
        const actividades =
            await servicioObtenerActividadesPorUsuario(usuario_id);
        res.json(actividades);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener actividades',
            error,
        });
    }
};

// ✅ Eliminar una actividad
export const eliminarActividadController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        await servicioEliminarActividad(id);
        res.json({ message: 'Actividad eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar actividad', error });
    }
};

// ✅ Eliminar todas las actividades (uso restringido)
export const eliminarTodasLasActividadesController = async (
    req: Request,
    res: Response,
) => {
    try {
        await servicioEliminarTodasLasActividades();
        res.json({ message: 'Todas las actividades eliminadas con éxito' });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar todas las actividades',
            error,
        });
    }
};

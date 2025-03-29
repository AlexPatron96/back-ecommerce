import { Request, Response } from 'express';
import {
    servicioActualizarSeccion,
    servicioCrearSeccion,
    servicioEliminarSeccion,
    servicioObtenerSecciones,
    servicioObtenerSeccionPorId,
} from './secciones.service';

// ✅ Crear sección
export const crearSeccionController = async (req: Request, res: Response) => {
    try {
        const seccion = await servicioCrearSeccion(req.body);
        res.status(201).json({ message: 'Sección creada con éxito', seccion });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear sección', error });
    }
};

// ✅ Obtener todas las secciones
export const obtenerSeccionesController = async (
    req: Request,
    res: Response,
) => {
    try {
        const secciones = await servicioObtenerSecciones();
        res.json(secciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener secciones', error });
    }
};

// ✅ Obtener sección por ID
export const obtenerSeccionPorIdController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const seccion = await servicioObtenerSeccionPorId(id);
        if (!seccion)
            res.status(404).json({ message: 'Sección no encontrada' });

        res.json(seccion);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener sección', error });
    }
};

// ✅ Actualizar sección
export const actualizarSeccionController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const seccion = await servicioActualizarSeccion(id, req.body);
        res.json({ message: 'Sección actualizada con éxito', seccion });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar sección', error });
    }
};

// ✅ Eliminar sección
export const eliminarSeccionController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        await servicioEliminarSeccion(id);
        res.json({ message: 'Sección eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar sección', error });
    }
};

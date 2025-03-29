import { Request, Response } from 'express';
import {
    servicioActualizarImpuesto,
    servicioCrearImpuesto,
    servicioEliminarImpuesto,
    servicioObtenerImpuestoPorId,
    servicioObtenerImpuestos,
} from './impuestos.service';

// ✅ Crear impuesto
export const crearImpuestoController = async (req: Request, res: Response) => {
    try {
        const impuesto = await servicioCrearImpuesto(req.body);
        res.status(201).json({
            message: 'Impuesto creado con éxito',
            impuesto,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear impuesto', error });
    }
};

// ✅ Obtener todos los impuestos
export const obtenerImpuestosController = async (
    req: Request,
    res: Response,
) => {
    try {
        const impuestos = await servicioObtenerImpuestos();
        res.json(impuestos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener impuestos', error });
    }
};

// ✅ Obtener impuesto por ID
export const obtenerImpuestoPorIdController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const impuesto = await servicioObtenerImpuestoPorId(id);
        if (!impuesto)
            res.status(404).json({ message: 'Impuesto no encontrado' });

        res.json(impuesto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener impuesto', error });
    }
};

// ✅ Actualizar impuesto
export const actualizarImpuestoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const impuesto = await servicioActualizarImpuesto(id, req.body);
        res.json({ message: 'Impuesto actualizado con éxito', impuesto });
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar impuesto',
            error,
        });
    }
};

// ✅ Eliminar impuesto
export const eliminarImpuestoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        await servicioEliminarImpuesto(id);
        res.json({ message: 'Impuesto eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar impuesto', error });
    }
};

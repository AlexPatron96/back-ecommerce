import { Request, Response } from 'express';
import {
    servicioActualizarMetodoEntrega,
    servicioCrearMetodoEntrega,
    servicioEliminarMetodoEntrega,
    servicioObtenerMetodoEntregaPorId,
    servicioObtenerMetodosEntrega,
} from './metodos_entrega.service';

// ✅ Crear un método de entrega
export const crearMetodoEntregaController = async (
    req: Request,
    res: Response,
) => {
    try {
        const metodoEntrega = await servicioCrearMetodoEntrega(req.body);
        res.status(201).json({
            message: 'Método de entrega creado con éxito',
            metodoEntrega,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear método de entrega',
            error,
        });
    }
};

// ✅ Obtener todos los métodos de entrega
export const obtenerMetodosEntregaController = async (
    req: Request,
    res: Response,
) => {
    try {
        const metodosEntrega = await servicioObtenerMetodosEntrega();
        res.json(metodosEntrega);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener métodos de entrega',
            error,
        });
    }
};

// ✅ Obtener un método de entrega por ID
export const obtenerMetodoEntregaPorIdController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const metodoEntrega = await servicioObtenerMetodoEntregaPorId(id);
        if (!metodoEntrega)
            res.status(404).json({
                message: 'Método de entrega no encontrado',
            });

        res.json(metodoEntrega);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener método de entrega',
            error,
        });
    }
};

// ✅ Actualizar un método de entrega
export const actualizarMetodoEntregaController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const metodoEntrega = await servicioActualizarMetodoEntrega(
            id,
            req.body,
        );
        res.json({
            message: 'Método de entrega actualizado con éxito',
            metodoEntrega,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar método de entrega',
            error,
        });
    }
};

// ✅ Eliminar un método de entrega
export const eliminarMetodoEntregaController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        await servicioEliminarMetodoEntrega(id);
        res.json({ message: 'Método de entrega eliminado con éxito' });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar método de entrega',
            error,
        });
    }
};

import { Request, Response } from 'express';
import {
    servicioActualizarMetodoPago,
    servicioCrearMetodoPago,
    servicioEliminarMetodoPago,
    servicioObtenerMetodoPagoPorId,
    servicioObtenerMetodosPago,
} from './metodos_pago.service';

// ✅ Crear un método de pago
export const crearMetodoPagoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const metodoPago = await servicioCrearMetodoPago(req.body);
        res.status(201).json({
            message: 'Método de pago creado con éxito',
            metodoPago,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear método de pago',
            error,
        });
    }
};

// ✅ Obtener todos los métodos de pago
export const obtenerMetodosPagoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const metodosPago = await servicioObtenerMetodosPago();
        res.json(metodosPago);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener métodos de pago',
            error,
        });
    }
};

// ✅ Obtener un método de pago por ID
export const obtenerMetodoPagoPorIdController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const metodoPago = await servicioObtenerMetodoPagoPorId(id);
        if (!metodoPago)
            res.status(404).json({ message: 'Método de pago no encontrado' });

        res.json(metodoPago);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener método de pago',
            error,
        });
    }
};

// ✅ Actualizar un método de pago
export const actualizarMetodoPagoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const metodoPago = await servicioActualizarMetodoPago(id, req.body);
        res.json({
            message: 'Método de pago actualizado con éxito',
            metodoPago,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar método de pago',
            error,
        });
    }
};

// ✅ Eliminar un método de pago
export const eliminarMetodoPagoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        await servicioEliminarMetodoPago(id);
        res.json({ message: 'Método de pago eliminado con éxito' });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar método de pago',
            error,
        });
    }
};

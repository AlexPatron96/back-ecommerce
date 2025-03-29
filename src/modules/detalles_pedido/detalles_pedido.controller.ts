import { Request, Response } from 'express';
import {
    servicioActualizarCantidadDetallePedido,
    servicioAgregarDetallePedido,
    servicioEliminarDetallePedido,
    servicioObtenerDetallesPorPedido,
    servicioVaciarDetallesPedido,
} from './detalles_pedido.service';

// ✅ Agregar detalle de pedidos
export const agregarDetallePedidoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const detalle = await servicioAgregarDetallePedido(req.body);
        res.status(201).json({
            message: 'Detalle de pedido agregado',
            detalle,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al agregar detalle de pedido',
            error,
        });
    }
};

// ✅ Obtener detalles de un pedido
export const obtenerDetallesPorPedidoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const pedido_id = Number(req.params.pedido_id);
        const detalles = await servicioObtenerDetallesPorPedido(pedido_id);
        res.json(detalles);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener detalles de pedido',
            error,
        });
    }
};

// ✅ Actualizar cantidad de un producto en el pedido
export const actualizarCantidadDetallePedidoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const { cantidad } = req.body;
        const detalle = await servicioActualizarCantidadDetallePedido(
            id,
            cantidad,
        );
        res.json({ message: 'Cantidad actualizada', detalle });
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar cantidad',
            error,
        });
    }
};

// ✅ Eliminar un detalle de pedido
export const eliminarDetallePedidoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        await servicioEliminarDetallePedido(id);
        res.json({ message: 'Detalle de pedido eliminado' });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar detalle de pedido',
            error,
        });
    }
};

// ✅ Vaciar detalles de un pedido
export const vaciarDetallesPedidoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const pedido_id = Number(req.params.pedido_id);
        await servicioVaciarDetallesPedido(pedido_id);
        res.json({ message: 'Detalles de pedido vaciados' });
    } catch (error) {
        res.status(500).json({
            message: 'Error al vaciar detalles de pedido',
            error,
        });
    }
};

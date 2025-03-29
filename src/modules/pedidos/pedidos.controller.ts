import { Request, Response } from 'express';
import {
    servicioActualizarEstadoPedido,
    servicioCrearPedido,
    servicioEliminarPedido,
    servicioObtenerPedidoPorId,
    servicioObtenerPedidos,
} from './pedidos.service';

// ✅ Crear un pedido
export const crearPedidoController = async (req: Request, res: Response) => {
    try {
        const pedido = await servicioCrearPedido(req.body);
        res.status(201).json({ message: 'Pedido creado con éxito', pedido });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear pedido', error });
    }
};

// ✅ Obtener todos los pedidos
export const obtenerPedidosController = async (req: Request, res: Response) => {
    try {
        const pedidos = await servicioObtenerPedidos();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener pedidos', error });
    }
};

// ✅ Obtener pedido por ID
export const obtenerPedidoPorIdController = async (
    req: Request,
    res: Response,
) => {
    try {
        const pedido = await servicioObtenerPedidoPorId(req.params.id);
        if (!pedido) {
            res.status(404).json({ message: 'Pedido no encontrado' });
        }

        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener pedido', error });
    }
};

// ✅ Actualizar estado del pedido
export const actualizarEstadoPedidoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const { estado } = req.body;
        const pedido = await servicioActualizarEstadoPedido(
            req.params.id,
            estado,
        );
        res.json({ message: 'Estado del pedido actualizado', pedido });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar estado', error });
    }
};

// ✅ Eliminar un pedido
export const eliminarPedidoController = async (req: Request, res: Response) => {
    try {
        await servicioEliminarPedido(req.params.id);
        res.json({ message: 'Pedido eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar pedido', error });
    }
};

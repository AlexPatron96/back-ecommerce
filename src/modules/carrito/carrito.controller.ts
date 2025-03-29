import { Request, Response } from 'express';
import {
    servicioActualizarCantidadEnCarrito,
    servicioAgregarProductoAlCarrito,
    servicioEliminarProductoDelCarrito,
    servicioObtenerCarritoPorUsuario,
    servicioVaciarCarrito,
} from './carrito.service';

// ✅ Agregar producto al carrito
export const agregarProductoAlCarritoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const item = await servicioAgregarProductoAlCarrito(req.body);
        res.status(201).json({ message: 'Producto agregado al carrito', item });
    } catch (error) {
        res.status(500).json({
            message: 'Error al agregar producto al carrito',
            error,
        });
    }
};

// ✅ Obtener el carrito de un usuario
export const obtenerCarritoPorUsuarioController = async (
    req: Request,
    res: Response,
) => {
    try {
        // const usuario_id = Number(req.params.usuario_id);
        const carrito = await servicioObtenerCarritoPorUsuario(
            req.params.usuario_id,
        );
        res.json(carrito);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el carrito', error });
    }
};

// ✅ Actualizar cantidad de un producto en el carrito
export const actualizarCantidadEnCarritoController = async (
    req: Request,
    res: Response,
) => {
    try {
        // const id = Number(req.params.id);
        const { cantidad } = req.body;
        const item = await servicioActualizarCantidadEnCarrito(
            req.params.id,
            cantidad,
        );
        res.json({ message: 'Cantidad actualizada', item });
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar cantidad',
            error,
        });
    }
};

// ✅ Eliminar un producto del carrito
export const eliminarProductoDelCarritoController = async (
    req: Request,
    res: Response,
) => {
    try {
        // const id = Number(req.params.id);
        await servicioEliminarProductoDelCarrito(req.params.id);
        res.json({ message: 'Producto eliminado del carrito' });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar producto del carrito',
            error,
        });
    }
};

// ✅ Vaciar el carrito de un usuario
export const vaciarCarritoController = async (req: Request, res: Response) => {
    try {
        // const usuario_id = Number(req.params.usuario_id);
        await servicioVaciarCarrito(req.params.usuario_id);
        res.json({ message: 'Carrito vaciado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al vaciar el carrito', error });
    }
};

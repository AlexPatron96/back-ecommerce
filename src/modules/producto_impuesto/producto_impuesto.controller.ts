import { Request, Response } from 'express';
import {
    servicioAsociarImpuestoAProducto,
    servicioEliminarAsociacionProductoImpuesto,
    servicioEliminarImpuestosDeProducto,
    servicioObtenerImpuestosPorProducto,
    servicioObtenerProductosPorImpuesto,
} from './producto_impuesto.service';

// ✅ Asociar un impuesto a un producto
export const asociarImpuestoAProductoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const asociacion = await servicioAsociarImpuestoAProducto(req.body);
        res.status(201).json({
            message: 'Impuesto asociado al producto',
            asociacion,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al asociar impuesto', error });
    }
};

// ✅ Obtener impuestos por producto
export const obtenerImpuestosPorProductoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const producto_id = Number(req.params.producto_id);
        const impuestos =
            await servicioObtenerImpuestosPorProducto(producto_id);
        res.json(impuestos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener impuestos', error });
    }
};

// ✅ Obtener productos por impuesto
export const obtenerProductosPorImpuestoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const impuesto_id = Number(req.params.impuesto_id);
        const productos =
            await servicioObtenerProductosPorImpuesto(impuesto_id);
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error });
    }
};

// ✅ Eliminar una asociación producto-impuesto
export const eliminarAsociacionProductoImpuestoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        await servicioEliminarAsociacionProductoImpuesto(id);
        res.json({ message: 'Asociación eliminada con éxito' });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar asociación',
            error,
        });
    }
};

// ✅ Eliminar todas las asociaciones de un producto
export const eliminarImpuestosDeProductoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const producto_id = Number(req.params.producto_id);
        await servicioEliminarImpuestosDeProducto(producto_id);
        res.json({ message: 'Impuestos eliminados del producto' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar impuestos', error });
    }
};

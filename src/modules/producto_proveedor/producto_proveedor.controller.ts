// controllers/producto_proveedor.controller.ts
import { Request, Response } from 'express';
import {
    createProductoProveedorService,
    deleteProductoProveedorService,
    getProductosProveedoresService,
    updateProductoProveedorService,
} from './producto_proveedor.service';

export const createProductoProveedor = async (req: Request, res: Response) => {
    try {
        const productoProveedor = await createProductoProveedorService(
            req.body,
        );
        res.status(201).json({
            ...productoProveedor,
            id: productoProveedor.id.toString(),
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al asociar el producto con el proveedor',
        });
    }
};

export const getProductosProveedores = async (req: Request, res: Response) => {
    try {
        const productosProveedores = await getProductosProveedoresService();
        const dataSend = productosProveedores.map(prodProv => ({
            ...prodProv,
            id: prodProv.id.toString(),
        }));
        res.status(201).json({
            data: dataSend,
            message:
                'Aqui esta la lista de los productos con su stock en  existentes.',
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener las asociaciones producto-proveedor',
        });
    }
};

export const updateProductoProveedor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const productoProveedor = await updateProductoProveedorService(
            Number(id),
            req.body,
        );
        res.status(201).json({
            ...productoProveedor,
            id: productoProveedor.id.toString(),
            messagge: 'Producto actualizado',
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al actualizar la asociación producto-proveedor',
        });
    }
};

export const deleteProductoProveedor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deleteProductoProveedorService(Number(id));
        res.json({
            message: 'Asociación producto-proveedor eliminada correctamente',
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al eliminar la asociación producto-proveedor',
        });
    }
};

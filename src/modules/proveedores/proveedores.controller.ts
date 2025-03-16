// controllers/proveedores.controller.ts
import { Request, Response } from 'express';
import {
    createProveedorService,
    deleteProveedorService,
    getProveedoresService,
    updateProveedorService,
} from './proveedores.service';

export const createProveedor = async (req: Request, res: Response) => {
    try {
        const proveedor = await createProveedorService(req.body);
        res.status(201).json({ ...proveedor, id: proveedor.id.toString() });
    } catch (error) {
        res.status(500).json({
            error: 'Error al crear el proveedor',
            messagge: (error as any).messagge,
        });
        console.log(error);
    }
};

export const getProveedores = async (req: Request, res: Response) => {
    try {
        const proveedores = await getProveedoresService();
        const dataSend = proveedores.map(proveedor => ({
            ...proveedor,
            id: proveedor.id.toString(),
        }));
        res.status(200).json({
            data: dataSend,
            message: 'Aqui esta la lista de todos los proveedores existentes.',
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los proveedores' });
    }
};

export const updateProveedor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const proveedor = await updateProveedorService(Number(id), req.body);
        res.status(201).json({ ...proveedor, id: proveedor.id.toString() });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el proveedor' });
    }
};

export const deleteProveedor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deleteProveedorService(Number(id));
        res.json({ message: 'Proveedor eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el proveedor' });
    }
};

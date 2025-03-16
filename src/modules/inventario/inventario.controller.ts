// controllers/inventario.controller.ts
import { Request, Response } from 'express';
import { getInventarioService, updateStockService } from './inventario.service';

export const getInventario = async (req: Request, res: Response) => {
    try {
        const inventario = await getInventarioService();
        res.json(inventario);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el inventario' });
    }
};

export const updateStock = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { stock } = req.body;
        const updatedStock = await updateStockService(Number(id), stock);
        res.json(updatedStock);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el stock' });
    }
};

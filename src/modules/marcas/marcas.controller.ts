import { Request, Response } from 'express';
import {
    servicioActualizarMarca,
    servicioCrearMarca,
    servicioEliminarMarca,
    servicioObtenerMarcaPorId,
    servicioObtenerMarcas,
} from './marcas.service';

// ✅ Crear marca
export const crearMarcaController = async (req: Request, res: Response) => {
    try {
        const marca = await servicioCrearMarca(req.body);
        res.status(201).json({ message: 'Marca creada con éxito', marca });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear marca', error });
    }
};

// ✅ Obtener todas las marcas
export const obtenerMarcasController = async (req: Request, res: Response) => {
    try {
        const marcas = await servicioObtenerMarcas();
        res.json(marcas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener marcas', error });
    }
};

// ✅ Obtener marca por ID
export const obtenerMarcaPorIdController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const marca = await servicioObtenerMarcaPorId(id);
        if (!marca) res.status(404).json({ message: 'Marca no encontrada' });

        res.json(marca);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener marca', error });
    }
};

// ✅ Actualizar marca
export const actualizarMarcaController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const marca = await servicioActualizarMarca(id, req.body);
        res.json({ message: 'Marca actualizada con éxito', marca });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar marca', error });
    }
};

// ✅ Eliminar marca
export const eliminarMarcaController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        await servicioEliminarMarca(id);
        res.json({ message: 'Marca eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar marca', error });
    }
};

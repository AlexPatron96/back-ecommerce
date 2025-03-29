import { Request, Response } from 'express';
import {
    servicioAplicarCupon,
    servicioCrearCupon,
    servicioEliminarCupon,
    servicioObtenerCupones,
    servicioObtenerCuponPorCodigo,
} from './cupones.service';

// ✅ Crear cupón
export const crearCuponController = async (req: Request, res: Response) => {
    try {
        const cupon = await servicioCrearCupon(req.body);
        res.status(201).json({ message: 'Cupón creado con éxito', cupon });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear cupón', error });
    }
};

// ✅ Obtener todos los cupones
export const obtenerCuponesController = async (req: Request, res: Response) => {
    try {
        const cupones = await servicioObtenerCupones();
        res.json(cupones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener cupones', error });
    }
};

// ✅ Obtener un cupón por código
export const obtenerCuponPorCodigoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const codigo = req.params.codigo;
        const cupon = await servicioObtenerCuponPorCodigo(codigo);
        if (!cupon) res.status(404).json({ message: 'Cupón no encontrado' });

        res.json(cupon);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener cupón', error });
    }
};

// ✅ Aplicar cupón
export const aplicarCuponController = async (req: Request, res: Response) => {
    try {
        const codigo = req.params.codigo;
        const cupon = await servicioAplicarCupon(codigo);
        res.json({ message: 'Cupón aplicado con éxito', cupon });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// ✅ Eliminar un cupón
export const eliminarCuponController = async (req: Request, res: Response) => {
    try {
        // const id = Number(req.params.id);
        await servicioEliminarCupon(req.params.id);
        res.json({ message: 'Cupón eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar cupón', error });
    }
};

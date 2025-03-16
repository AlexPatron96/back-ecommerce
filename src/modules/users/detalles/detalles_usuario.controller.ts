// controllers/detalles_usuario.controller.ts
import { Request, Response } from 'express';
import {
    getUserDetailsService,
    updateUserDetailsService,
} from './detalles_usuario.service';

export const getUserDetails = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const detalles = await getUserDetailsService(Number(id));
        res.json(detalles);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener detalles del usuario',
        });
    }
};

export const updateUserDetails = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const detalles = await updateUserDetailsService(Number(id), req.body);
        res.json(detalles);
    } catch (error) {
        res.status(500).json({
            error: 'Error al actualizar detalles del usuario',
        });
    }
};

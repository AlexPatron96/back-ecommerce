import { Request, Response } from 'express';
import {
    servicioAgregarFavorito,
    servicioEliminarFavorito,
    servicioObtenerFavoritosPorUsuario,
} from './favoritos.service';

// ✅ Agregar a favoritos
export const agregarFavoritoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const favorito = await servicioAgregarFavorito(req.body);
        res.status(201).json({
            message: 'Producto agregado a favoritos',
            favorito,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al agregar a favoritos',
            error,
        });
    }
};

// ✅ Obtener favoritos de un usuario
export const obtenerFavoritosPorUsuarioController = async (
    req: Request,
    res: Response,
) => {
    try {
        const usuario_id = Number(req.params.usuario_id);
        const favoritos = await servicioObtenerFavoritosPorUsuario(usuario_id);
        res.json(favoritos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener favoritos', error });
    }
};

// ✅ Eliminar de favoritos
export const eliminarFavoritoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        await servicioEliminarFavorito(id);
        res.json({ message: 'Producto eliminado de favoritos' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar favorito', error });
    }
};

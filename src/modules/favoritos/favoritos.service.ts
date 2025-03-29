import {
    agregarFavorito,
    eliminarFavorito,
    obtenerFavoritosPorUsuario,
} from './favoritos.repository';

// ✅ Servicio para agregar un producto a favoritos
export const servicioAgregarFavorito = async (data: any) => {
    return await agregarFavorito(data);
};

// ✅ Servicio para obtener favoritos de un usuario
export const servicioObtenerFavoritosPorUsuario = async (
    usuario_id: number,
) => {
    return await obtenerFavoritosPorUsuario(usuario_id);
};

// ✅ Servicio para eliminar un favorito
export const servicioEliminarFavorito = async (id: number) => {
    return await eliminarFavorito(id);
};

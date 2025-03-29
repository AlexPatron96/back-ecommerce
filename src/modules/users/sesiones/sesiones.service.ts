import {
    crearSesion,
    eliminarSesion,
    obtenerSesionPorUsuario,
} from './sesiones.repository';

// ✅ Servicio para crear sesión
export const servicioCrearSesion = async (
    usuario_id: number,
    token: string,
) => {
    return await crearSesion(usuario_id, token);
};

// ✅ Servicio para obtener sesión por usuario
export const servicioObtenerSesionPorUsuario = async (usuario_id: number) => {
    return await obtenerSesionPorUsuario(usuario_id);
};

// ✅ Servicio para eliminar sesión
export const servicioEliminarSesion = async (usuario_id: number) => {
    return await eliminarSesion(usuario_id);
};

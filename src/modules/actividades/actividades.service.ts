import {
    eliminarActividad,
    eliminarTodasLasActividades,
    obtenerActividades,
    obtenerActividadesPorUsuario,
    registrarActividad,
} from './actividades.repository';

// ✅ Servicio para registrar una actividad
export const servicioRegistrarActividad = async (data: any) => {
    return await registrarActividad(data);
};

// ✅ Servicio para obtener todas las actividades
export const servicioObtenerActividades = async () => {
    return await obtenerActividades();
};

// ✅ Servicio para obtener actividades por usuario
export const servicioObtenerActividadesPorUsuario = async (
    usuario_id: number,
) => {
    return await obtenerActividadesPorUsuario(usuario_id);
};

// ✅ Servicio para eliminar una actividad
export const servicioEliminarActividad = async (id: number) => {
    return await eliminarActividad(id);
};

// ✅ Servicio para limpiar todas las actividades
export const servicioEliminarTodasLasActividades = async () => {
    return await eliminarTodasLasActividades();
};

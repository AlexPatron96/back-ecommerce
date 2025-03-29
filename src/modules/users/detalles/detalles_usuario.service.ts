// services/detalles_usuario.service.ts
import {
    getUserDetailsRepo,
    updateUserDetailsRepo,
} from './detalles_usuario.repository';

export const getUserDetailsService = async (id: number) => {
    return await getUserDetailsRepo(id);
};

export const updateUserDetailsService = async (id: number, data: any) => {
    return await updateUserDetailsRepo(id, data);
};

/********************************************/
/********************************************/
/********************************************/
/********************************************/
import {
    actualizarDetallesCliente,
    crearDetallesCliente,
    obtenerDetallesClientePorUsuario,
} from './detalles_usuario.repository';

// ✅ Servicio para crear detalles de cliente
export const servicioCrearDetallesCliente = async (
    usuario_id: number,
    data: any,
) => {
    return await crearDetallesCliente(usuario_id, data);
};

// ✅ Servicio para obtener detalles de cliente
export const servicioObtenerDetallesClientePorUsuario = async (
    usuario_id: number,
) => {
    return await obtenerDetallesClientePorUsuario(usuario_id);
};

// ✅ Servicio para actualizar detalles de cliente
export const servicioActualizarDetallesCliente = async (
    usuario_id: number,
    data: any,
) => {
    return await actualizarDetallesCliente(usuario_id, data);
};

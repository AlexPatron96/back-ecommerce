import {
    actualizarMetodoEntrega,
    crearMetodoEntrega,
    eliminarMetodoEntrega,
    obtenerMetodoEntregaPorId,
    obtenerMetodosEntrega,
} from './metodos_entrega.repository';

// ✅ Servicio para crear un método de entrega
export const servicioCrearMetodoEntrega = async (data: any) => {
    return await crearMetodoEntrega(data);
};

// ✅ Servicio para obtener métodos de entrega
export const servicioObtenerMetodosEntrega = async () => {
    return await obtenerMetodosEntrega();
};

// ✅ Servicio para obtener un método de entrega por ID
export const servicioObtenerMetodoEntregaPorId = async (id: number) => {
    return await obtenerMetodoEntregaPorId(id);
};

// ✅ Servicio para actualizar un método de entrega
export const servicioActualizarMetodoEntrega = async (
    id: number,
    data: any,
) => {
    return await actualizarMetodoEntrega(id, data);
};

// ✅ Servicio para eliminar un método de entrega
export const servicioEliminarMetodoEntrega = async (id: number) => {
    return await eliminarMetodoEntrega(id);
};

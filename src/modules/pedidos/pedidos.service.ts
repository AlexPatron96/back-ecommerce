import {
    actualizarEstadoPedido,
    crearPedido,
    eliminarPedido,
    obtenerPedidoPorId,
    obtenerPedidos,
} from './pedidos.repository';

// ✅ Servicio para crear un pedido
export const servicioCrearPedido = async (data: any) => {
    return await crearPedido(data);
};

// ✅ Servicio para obtener pedidos
export const servicioObtenerPedidos = async () => {
    return await obtenerPedidos();
};

// ✅ Servicio para obtener un pedido por ID
export const servicioObtenerPedidoPorId = async (id: string) => {
    return await obtenerPedidoPorId(id);
};

// ✅ Servicio para actualizar estado
export const servicioActualizarEstadoPedido = async (
    id: string,
    estado: string,
) => {
    return await actualizarEstadoPedido(id, estado);
};

// ✅ Servicio para eliminar un pedido
export const servicioEliminarPedido = async (id: string) => {
    return await eliminarPedido(id);
};

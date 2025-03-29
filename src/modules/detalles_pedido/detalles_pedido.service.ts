import {
    actualizarCantidadDetallePedido,
    agregarDetallePedido,
    eliminarDetallePedido,
    obtenerDetallesPorPedido,
    vaciarDetallesPedido,
} from './detalles_pedido.repository';

// ✅ Servicio para agregar un detalle de pedido
export const servicioAgregarDetallePedido = async (data: any) => {
    return await agregarDetallePedido(data);
};

// ✅ Servicio para obtener detalles de un pedido
export const servicioObtenerDetallesPorPedido = async (pedido_id: number) => {
    return await obtenerDetallesPorPedido(pedido_id);
};

// ✅ Servicio para actualizar cantidad en un detalle de pedido
export const servicioActualizarCantidadDetallePedido = async (
    id: number,
    cantidad: number,
) => {
    return await actualizarCantidadDetallePedido(id, cantidad);
};

// ✅ Servicio para eliminar un detalle de pedido
export const servicioEliminarDetallePedido = async (id: number) => {
    return await eliminarDetallePedido(id);
};

// ✅ Servicio para vaciar detalles de un pedido
export const servicioVaciarDetallesPedido = async (pedido_id: number) => {
    return await vaciarDetallesPedido(pedido_id);
};

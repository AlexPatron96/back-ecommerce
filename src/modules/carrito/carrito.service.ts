import {
    actualizarCantidadEnCarrito,
    agregarProductoAlCarrito,
    eliminarProductoDelCarrito,
    obtenerCarritoPorUsuario,
    vaciarCarrito,
} from './carrito.repository';

// ✅ Servicio para agregar un producto al carrito
export const servicioAgregarProductoAlCarrito = async (data: any) => {
    return await agregarProductoAlCarrito(data);
};

// ✅ Servicio para obtener el carrito de un usuario
export const servicioObtenerCarritoPorUsuario = async (usuario_id: string) => {
    return await obtenerCarritoPorUsuario(usuario_id);
};

// ✅ Servicio para actualizar cantidad
export const servicioActualizarCantidadEnCarrito = async (
    id: string,
    cantidad: number,
) => {
    return await actualizarCantidadEnCarrito(id, cantidad);
};

// ✅ Servicio para eliminar un producto
export const servicioEliminarProductoDelCarrito = async (id: string) => {
    return await eliminarProductoDelCarrito(id);
};

// ✅ Servicio para vaciar el carrito
export const servicioVaciarCarrito = async (usuario_id: string) => {
    return await vaciarCarrito(usuario_id);
};

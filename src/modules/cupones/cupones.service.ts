import {
    aplicarCupon,
    crearCupon,
    eliminarCupon,
    obtenerCupones,
    obtenerCuponPorCodigo,
} from './cupones.repository';

// ✅ Servicio para crear un cupón
export const servicioCrearCupon = async (data: any) => {
    return await crearCupon(data);
};

// ✅ Servicio para obtener cupones
export const servicioObtenerCupones = async () => {
    return await obtenerCupones();
};

// ✅ Servicio para obtener un cupón por código
export const servicioObtenerCuponPorCodigo = async (codigo: string) => {
    return await obtenerCuponPorCodigo(codigo);
};

// ✅ Servicio para aplicar un cupón en un pedido
export const servicioAplicarCupon = async (codigo: string) => {
    return await aplicarCupon(codigo);
};

// ✅ Servicio para eliminar un cupón
export const servicioEliminarCupon = async (id: string) => {
    return await eliminarCupon(id);
};

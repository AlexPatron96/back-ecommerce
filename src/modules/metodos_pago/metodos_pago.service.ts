import {
    actualizarMetodoPago,
    crearMetodoPago,
    eliminarMetodoPago,
    obtenerMetodoPagoPorId,
    obtenerMetodosPago,
} from './metodos_pago.repository';

// ✅ Servicio para crear un método de pago
export const servicioCrearMetodoPago = async (data: any) => {
    return await crearMetodoPago(data);
};

// ✅ Servicio para obtener métodos de pago
export const servicioObtenerMetodosPago = async () => {
    return await obtenerMetodosPago();
};

// ✅ Servicio para obtener un método de pago por ID
export const servicioObtenerMetodoPagoPorId = async (id: number) => {
    return await obtenerMetodoPagoPorId(id);
};

// ✅ Servicio para actualizar un método de pago
export const servicioActualizarMetodoPago = async (id: number, data: any) => {
    return await actualizarMetodoPago(id, data);
};

// ✅ Servicio para eliminar un método de pago
export const servicioEliminarMetodoPago = async (id: number) => {
    return await eliminarMetodoPago(id);
};

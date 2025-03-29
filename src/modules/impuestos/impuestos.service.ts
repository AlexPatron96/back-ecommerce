import {
    actualizarImpuesto,
    crearImpuesto,
    eliminarImpuesto,
    obtenerImpuestoPorId,
    obtenerImpuestos,
} from './impuestos.repository';

// ✅ Servicio para crear un impuesto
export const servicioCrearImpuesto = async (data: any) => {
    return await crearImpuesto(data);
};

// ✅ Servicio para obtener impuestos
export const servicioObtenerImpuestos = async () => {
    return await obtenerImpuestos();
};

// ✅ Servicio para obtener un impuesto por ID
export const servicioObtenerImpuestoPorId = async (id: number) => {
    return await obtenerImpuestoPorId(id);
};

// ✅ Servicio para actualizar un impuesto
export const servicioActualizarImpuesto = async (id: number, data: any) => {
    return await actualizarImpuesto(id, data);
};

// ✅ Servicio para eliminar un impuesto
export const servicioEliminarImpuesto = async (id: number) => {
    return await eliminarImpuesto(id);
};

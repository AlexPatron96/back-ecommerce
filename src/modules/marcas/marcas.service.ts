import {
    actualizarMarca,
    crearMarca,
    eliminarMarca,
    obtenerMarcaPorId,
    obtenerMarcas,
} from './marcas.repository';

// ✅ Servicio para crear una marca
export const servicioCrearMarca = async (data: any) => {
    return await crearMarca(data);
};

// ✅ Servicio para obtener marcas
export const servicioObtenerMarcas = async () => {
    return await obtenerMarcas();
};

// ✅ Servicio para obtener una marca por ID
export const servicioObtenerMarcaPorId = async (id: number) => {
    return await obtenerMarcaPorId(id);
};

// ✅ Servicio para actualizar una marca
export const servicioActualizarMarca = async (id: number, data: any) => {
    return await actualizarMarca(id, data);
};

// ✅ Servicio para eliminar una marca
export const servicioEliminarMarca = async (id: number) => {
    return await eliminarMarca(id);
};

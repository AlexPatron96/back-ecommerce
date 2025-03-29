import {
    actualizarSeccion,
    crearSeccion,
    eliminarSeccion,
    obtenerSecciones,
    obtenerSeccionPorId,
} from './secciones.repository';

// ✅ Servicio para crear una sección
export const servicioCrearSeccion = async (data: any) => {
    return await crearSeccion(data);
};

// ✅ Servicio para obtener secciones
export const servicioObtenerSecciones = async () => {
    return await obtenerSecciones();
};

// ✅ Servicio para obtener una sección por ID
export const servicioObtenerSeccionPorId = async (id: number) => {
    return await obtenerSeccionPorId(id);
};

// ✅ Servicio para actualizar una sección
export const servicioActualizarSeccion = async (id: number, data: any) => {
    return await actualizarSeccion(id, data);
};

// ✅ Servicio para eliminar una sección
export const servicioEliminarSeccion = async (id: number) => {
    return await eliminarSeccion(id);
};

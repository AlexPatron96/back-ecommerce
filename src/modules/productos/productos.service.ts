import { asociarImpuestoAProducto } from '../producto_impuesto/producto_impuesto.repository';
import {
    actualizarProducto,
    crearProducto,
    eliminarProducto,
    obtenerProductoPorId,
    obtenerProductos,
} from './productos.repository';

// ✅ Servicio para crear un producto
export const servicioCrearProducto = async (data: any) => {
    return await crearProducto(data);
};

// ✅ Servicio para obtener productos
export const servicioObtenerProductos = async () => {
    return await obtenerProductos();
};

// ✅ Servicio para obtener un producto por ID
export const servicioObtenerProductoPorId = async (id: number) => {
    return await obtenerProductoPorId(id);
};

// ✅ Servicio para actualizar un producto
export const servicioActualizarProducto = async (id: number, data: any) => {
    return await actualizarProducto(id, data);
};

// ✅ Servicio para eliminar un producto
export const servicioEliminarProducto = async (id: number) => {
    return await eliminarProducto(id);
};

// ✅ Asociar impuestos al producto
export const servicioAsociarImpuestos = async (
    producto_id: number,
    impuestos: any,
) => {
    const impuestosData = impuestos.map((impuesto_id: number) => ({
        producto_id,
        impuesto_id,
    }));
    return await asociarImpuestoAProducto(impuestosData);
};

import {
    asociarImpuestoAProducto,
    eliminarAsociacionProductoImpuesto,
    eliminarImpuestosDeProducto,
    obtenerImpuestosPorProducto,
    obtenerProductosPorImpuesto,
} from './producto_impuesto.repository';

// ✅ Servicio para asociar un impuesto a un producto
export const servicioAsociarImpuestoAProducto = async (data: any) => {
    return await asociarImpuestoAProducto(data);
};

// ✅ Servicio para obtener impuestos por producto
export const servicioObtenerImpuestosPorProducto = async (
    producto_id: number,
) => {
    return await obtenerImpuestosPorProducto(producto_id);
};

// ✅ Servicio para obtener productos por impuesto
export const servicioObtenerProductosPorImpuesto = async (
    impuesto_id: number,
) => {
    return await obtenerProductosPorImpuesto(impuesto_id);
};

// ✅ Servicio para eliminar una asociación producto-impuesto
export const servicioEliminarAsociacionProductoImpuesto = async (
    id: number,
) => {
    return await eliminarAsociacionProductoImpuesto(id);
};

// ✅ Servicio para eliminar todos los impuestos de un producto
export const servicioEliminarImpuestosDeProducto = async (
    producto_id: number,
) => {
    return await eliminarImpuestosDeProducto(producto_id);
};

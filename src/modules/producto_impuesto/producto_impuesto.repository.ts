import { prisma } from '../../app';

// ✅ Asociar un impuesto a un producto
export const asociarImpuestoAProducto = async (data: any) => {
    console.log({ message: 'impuesto Recibe:', data });
    return await prisma.producto_impuesto.create({
        data: {
            producto_id: data.producto_id,
            impuesto_id: data.impuesto_id,
        },
    });
};

// ✅ Obtener impuestos asociados a un producto
export const obtenerImpuestosPorProducto = async (producto_id: number) => {
    return await prisma.producto_impuesto.findMany({
        where: { producto_id },
        include: { impuestos: true },
    });
};

// ✅ Obtener productos asociados a un impuesto
export const obtenerProductosPorImpuesto = async (impuesto_id: number) => {
    return await prisma.producto_impuesto.findMany({
        where: { impuesto_id },
        include: { productos: true },
    });
};

// ✅ Eliminar una asociación producto-impuesto
export const eliminarAsociacionProductoImpuesto = async (id: number) => {
    return await prisma.producto_impuesto.delete({
        where: { id },
    });
};

// ✅ Eliminar todas las asociaciones de un producto
export const eliminarImpuestosDeProducto = async (producto_id: number) => {
    return await prisma.producto_impuesto.deleteMany({
        where: { producto_id },
    });
};

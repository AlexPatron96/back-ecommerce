import { prisma } from '../../app';

// ✅ Agregar un detalle de pedido
export const agregarDetallePedido = async (data: any) => {
    return await prisma.detalles_pedido.create({
        data: {
            pedido_id: data.pedido_id,
            producto_id: data.producto_id,
            cantidad: data.cantidad,
            precio_unitario: data.precio_unitario,
        },
    });
};

// ✅ Obtener detalles de un pedido
export const obtenerDetallesPorPedido = async (pedido_id: number) => {
    return await prisma.detalles_pedido.findMany({
        where: { pedido_id },
        include: { productos: true }, // Incluir detalles del producto
    });
};

// ✅ Actualizar la cantidad de un producto en el pedido
export const actualizarCantidadDetallePedido = async (
    id: number,
    cantidad: number,
) => {
    return await prisma.detalles_pedido.update({
        where: { id },
        data: { cantidad },
    });
};

// ✅ Eliminar un detalle de pedido
export const eliminarDetallePedido = async (id: number) => {
    return await prisma.detalles_pedido.delete({
        where: { id },
    });
};

// ✅ Vaciar los detalles de un pedido (si se cancela)
export const vaciarDetallesPedido = async (pedido_id: number) => {
    return await prisma.detalles_pedido.deleteMany({
        where: { pedido_id },
    });
};

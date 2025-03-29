import { prisma } from '../../app';

// ✅ Crear un pedido
export const crearPedido = async (data: any) => {
    return await prisma.pedidos.create({
        data: {
            estado: 'pendiente',
            total: data.total,
            subtotal: data.subtotal,
            valor_iva: data.valor_iva,
            costo_envio: data.costo_envio,
            total_neto: data.total_neto,
            metodo_entrega_id: data.metodo_entrega_id,
            metodo_pago_id: data.metodo_pago_id,
            descuento: data.descuento,
            cupon_id: data.cupon_id,
            detalles: data.detalles,
        },
    });
};

// ✅ Obtener todos los pedidos
export const obtenerPedidos = async () => {
    return await prisma.pedidos.findMany({
        include: {
            usuarios: true,
            detalles_pedido: true,
            metodos_entrega: true,
            metodos_pago: true,
            cupones: true,
        },
    });
};

// ✅ Obtener un pedido por ID
export const obtenerPedidoPorId = async (id: string) => {
    return await prisma.pedidos.findUnique({
        where: { id: Number(id) },
        include: {
            usuarios: true,
            detalles_pedido: true,
        },
    });
};

// ✅ Actualizar estado del pedido
export const actualizarEstadoPedido = async (id: string, estado: string) => {
    return await prisma.pedidos.update({
        where: { id: Number(id) },
        data: { estado },
    });
};

// ✅ Eliminar un pedido
export const eliminarPedido = async (id: string) => {
    return await prisma.pedidos.delete({
        where: { id: Number(id) },
    });
};

import { prisma } from '../../app';

// ✅ Agregar un producto al carrito
export const agregarProductoAlCarrito = async (data: any) => {
    // Verificar si el producto ya está en el carrito del usuario
    const itemExistente = await prisma.carrito.findFirst({
        where: {
            usuario_id: data.usuario_id,
            producto_id: data.producto_id,
        },
    });

    if (itemExistente) {
        // Si ya existe, incrementar la cantidad
        return await prisma.carrito.update({
            where: { id: itemExistente.id },
            data: { cantidad: itemExistente.cantidad + data.cantidad },
        });
    } else {
        // Si no existe, agregarlo
        return await prisma.carrito.create({
            data: {
                usuario_id: data.usuario_id,
                producto_id: data.producto_id,
                cantidad: data.cantidad,
            },
        });
    }
};

// ✅ Obtener el carrito de un usuario
export const obtenerCarritoPorUsuario = async (usuario_id: string) => {
    return await prisma.carrito.findMany({
        where: { usuario_id: Number(usuario_id) },
        include: { productos: true }, // Incluir detalles del producto
    });
};

// ✅ Actualizar la cantidad de un producto en el carrito
export const actualizarCantidadEnCarrito = async (
    id: string,
    cantidad: number,
) => {
    return await prisma.carrito.update({
        where: { id: Number(id) },
        data: { cantidad },
    });
};

// ✅ Eliminar un producto del carrito
export const eliminarProductoDelCarrito = async (id: string) => {
    return await prisma.carrito.delete({
        where: { id: Number(id) },
    });
};

// ✅ Vaciar el carrito de un usuario
export const vaciarCarrito = async (usuario_id: string) => {
    return await prisma.carrito.deleteMany({
        where: { usuario_id: Number(usuario_id) },
    });
};

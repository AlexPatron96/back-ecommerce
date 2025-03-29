// repositories/detalles_usuario.repository.ts
import { prisma } from '../../../app';

export const getUserDetailsRepo = async (id: number) => {
    return await prisma.detalles_cliente.findUnique({ where: { id: id } });
};

export const updateUserDetailsRepo = async (id: number, data: any) => {
    return await prisma.detalles_cliente.update({ where: { id: id }, data });
};

// ✅ Crear detalles de cliente
export const crearDetallesCliente = async (usuario_id: number, data: any) => {
    return await prisma.detalles_cliente.create({
        data: {
            usuario_id,
            ...data,
        },
    });
};

// ✅ Obtener detalles de cliente por usuario
export const obtenerDetallesClientePorUsuario = async (usuario_id: number) => {
    return await prisma.detalles_cliente.findFirst({
        where: { usuario_id: usuario_id },
    });
};

// ✅ Actualizar detalles de cliente
export const actualizarDetallesCliente = async (
    usuario_id: number,
    data: any,
) => {
    const detallesCliente = await prisma.detalles_cliente.findFirst({
        where: { usuario_id },
    });

    if (!detallesCliente) {
        throw new Error('Detalles del cliente no encontrados');
    }

    return await prisma.detalles_cliente.update({
        where: { id: detallesCliente.id },
        data,
    });
};

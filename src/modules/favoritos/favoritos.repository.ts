import { prisma } from '../../app';

// ✅ Agregar un producto a favoritos
export const agregarFavorito = async (data: any) => {
    return await prisma.favoritos.create({
        data: {
            usuario_id: data.usuario_id,
            producto_id: data.producto_id,
        },
    });
};

// ✅ Obtener productos favoritos de un usuario
export const obtenerFavoritosPorUsuario = async (usuario_id: number) => {
    return await prisma.favoritos.findMany({
        where: { usuario_id },
        include: { productos: true },
    });
};

// ✅ Eliminar un producto de favoritos
export const eliminarFavorito = async (id: number) => {
    return await prisma.favoritos.delete({
        where: { id },
    });
};

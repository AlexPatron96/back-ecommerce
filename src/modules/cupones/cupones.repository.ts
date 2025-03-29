import { prisma } from '../../app';

// ✅ Crear un cupón
export const crearCupon = async (data: any) => {
    return await prisma.cupones.create({
        data: {
            codigo: data.codigo,
            descripcion: data.descripcion,
            descuento_porcentaje: data.descuento_porcentaje,
            descuento_fijo: data.descuento_fijo,
            fecha_inicio: data.fecha_inicio,
            fecha_fin: data.fecha_fin,
            uso_maximo: data.uso_maximo,
            uso_actual: 0, // Se inicia en 0 usos
        },
    });
};

// ✅ Obtener todos los cupones
export const obtenerCupones = async () => {
    return await prisma.cupones.findMany();
};

// ✅ Obtener un cupón por código
export const obtenerCuponPorCodigo = async (codigo: string) => {
    return await prisma.cupones.findUnique({
        where: { codigo },
    });
};

// ✅ Aplicar un cupón en un pedido
export const aplicarCupon = async (codigo: string) => {
    const cupon = await prisma.cupones.findUnique({ where: { codigo } });

    if (!cupon) throw new Error('Cupón no encontrado.');
    if (cupon.uso_maximo && (cupon.uso_actual ?? 0) >= cupon.uso_maximo) {
        throw new Error('El cupón ha alcanzado su límite de usos.');
    }

    return await prisma.cupones.update({
        where: { codigo },
        data: { uso_actual: (cupon.uso_actual ?? 0) + 1 },
    });
};

// ✅ Eliminar un cupón
export const eliminarCupon = async (id: string) => {
    return await prisma.cupones.delete({ where: { id: Number(id) } });
};

import { prisma } from '../../app';

// ✅ Crear un método de entrega
export const crearMetodoEntrega = async (data: any) => {
    return await prisma.metodos_entrega.create({ data });
};

// ✅ Obtener todos los métodos de entrega
export const obtenerMetodosEntrega = async () => {
    return await prisma.metodos_entrega.findMany();
};

// ✅ Obtener un método de entrega por ID
export const obtenerMetodoEntregaPorId = async (id: number) => {
    return await prisma.metodos_entrega.findUnique({ where: { id } });
};

// ✅ Actualizar un método de entrega
export const actualizarMetodoEntrega = async (id: number, data: any) => {
    return await prisma.metodos_entrega.update({ where: { id }, data });
};

// ✅ Eliminar un método de entrega
export const eliminarMetodoEntrega = async (id: number) => {
    return await prisma.metodos_entrega.delete({ where: { id } });
};

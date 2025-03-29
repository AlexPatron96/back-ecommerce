import { prisma } from '../../app';

// ✅ Crear una marca
export const crearMarca = async (data: any) => {
    return await prisma.marcas.create({ data });
};

// ✅ Obtener todas las marcas
export const obtenerMarcas = async () => {
    return await prisma.marcas.findMany();
};

// ✅ Obtener una marca por ID
export const obtenerMarcaPorId = async (id: number) => {
    return await prisma.marcas.findUnique({ where: { id } });
};

// ✅ Actualizar una marca
export const actualizarMarca = async (id: number, data: any) => {
    return await prisma.marcas.update({ where: { id }, data });
};

// ✅ Eliminar una marca
export const eliminarMarca = async (id: number) => {
    return await prisma.marcas.delete({ where: { id } });
};

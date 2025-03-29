import { prisma } from '../../app';

// ✅ Crear una sección
export const crearSeccion = async (data: any) => {
    return await prisma.secciones.create({ data });
};

// ✅ Obtener todas las secciones
export const obtenerSecciones = async () => {
    return await prisma.secciones.findMany({
        include: { categorias: true },
    });
};

// ✅ Obtener una sección por ID
export const obtenerSeccionPorId = async (id: number) => {
    return await prisma.secciones.findUnique({
        where: { id },
        include: { categorias: true },
    });
};

// ✅ Actualizar una sección
export const actualizarSeccion = async (id: number, data: any) => {
    return await prisma.secciones.update({
        where: { id },
        data,
    });
};

// ✅ Eliminar una sección
export const eliminarSeccion = async (id: number) => {
    return await prisma.secciones.delete({
        where: { id },
    });
};

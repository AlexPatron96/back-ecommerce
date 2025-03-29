import { prisma } from '../../app';

// ✅ Registrar una actividad
export const registrarActividad = async (data: any) => {
    return await prisma.actividades.create({ data });
};

// ✅ Obtener todas las actividades
export const obtenerActividades = async () => {
    return await prisma.actividades.findMany({
        include: { usuarios: true },
    });
};

// ✅ Obtener actividades por usuario
export const obtenerActividadesPorUsuario = async (usuario_id: number) => {
    return await prisma.actividades.findMany({
        where: { usuario_id },
        include: { usuarios: true },
    });
};

// ✅ Eliminar una actividad por ID
export const eliminarActividad = async (id: number) => {
    return await prisma.actividades.delete({
        where: { id },
    });
};

// ✅ Limpiar todas las actividades (Usar con precaución)
export const eliminarTodasLasActividades = async () => {
    return await prisma.actividades.deleteMany();
};

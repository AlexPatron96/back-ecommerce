import { prisma } from '../../../app';

// ✅ Crear una sesión
export const crearSesion = async (usuario_id: number, token: string) => {
    return await prisma.sesiones.create({
        data: {
            usuario_id,
            token,
            inicio: new Date(),
        },
    });
};

// ✅ Obtener sesión por usuario
export const obtenerSesionPorUsuario = async (usuario_id: number) => {
    return await prisma.sesiones.findFirst({
        where: { usuario_id },
    });
};

// ✅ Eliminar sesión por usuario (logout)
export const eliminarSesion = async (usuario_id: number) => {
    return await prisma.sesiones.deleteMany({
        where: { usuario_id },
    });
};

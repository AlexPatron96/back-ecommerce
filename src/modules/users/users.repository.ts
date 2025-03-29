// modules/users/users.repository.ts
import { prisma } from '../../app';

export const updateUserPassword = async (
    userId: number,
    newPassword: string,
) => {
    await prisma.usuarios.update({
        where: { id: userId },
        data: { password: newPassword },
    });
    console.log('✅ Contraseña actualizada correctamente');
    return { message: 'Contrasena Actualizada correctamente', process: 'ok' };
};

export const findUserByEmail = async (email: string) => {
    return await prisma.usuarios.findUnique({
        where: { email },
    });
};

export const createSesion = async (email: string) => {
    return await prisma.usuarios.findUnique({
        where: { email },
    });
};

export const createSesionlAdmin = async (dataSesion: any) => {
    const { usuario_id, token, inicio } = dataSesion;
    return await prisma.sesiones.create({
        data: { usuario_id: usuario_id, token: token, inicio: inicio },
    });
};

export const createUser = async (userData: any) => {
    return await prisma.usuarios.create({ data: userData });
};

export const getAllUsers = async () => {
    return await prisma.usuarios.findMany();
};
export const logoutRepository = async (token: any) => {
    return await prisma.sesiones.deleteMany({ where: { token } });
};

export const getAllUsersMoreData = async () => {
    return await prisma.usuarios.findMany({
        select: {
            id: true,
            nombre: true,
            email: true,
            tipo_usuario: true,
            nivel_prioridad: true,
            actividades: { take: 5, orderBy: { fecha: 'desc' } },
            pedidos: { take: 5, orderBy: { fecha_pedido: 'desc' } },
            createdAt: true,
            favoritos: true,
            sesiones: { take: 5, orderBy: { inicio: 'desc' } },
        },
    });
};

// export const validateRepository = async () => {
//     return await prisma.usuarios.findMany();
// };

// export const findUserToken = async ( ) =>{
//   return  await prisma.usuarios.findFirst({
//     where: { resetToken: token }
// });
// }

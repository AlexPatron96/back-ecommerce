// repositories/detalles_usuario.repository.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserDetailsRepo = async (id: number) => {
    return await prisma.detalles_cliente.findUnique({ where: { id: id } });
};

export const updateUserDetailsRepo = async (id: number, data: any) => {
    return await prisma.detalles_cliente.update({ where: { id: id }, data });
};

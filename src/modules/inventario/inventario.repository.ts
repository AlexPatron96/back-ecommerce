// repositories/inventario.repository.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getInventarioRepo = async () => {
    return await prisma.inventario.findMany({
        include: {
            producto: true,
            bodega: true,
        },
    });
};

export const updateStockRepo = async (id: number, stock: number) => {
    return await prisma.inventario.update({
        where: { id },
        data: { stock },
    });
};

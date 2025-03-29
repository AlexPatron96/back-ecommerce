import { prisma } from '../../app';

export const createBodegaRepo = async (data: any) => {
    return await prisma.bodega.create({ data });
};

export const getBodegasRepo = async () => {
    return await prisma.bodega.findMany();
};

export const updateBodegaRepo = async (id: number, data: any) => {
    return await prisma.bodega.update({ where: { id }, data });
};

export const deleteBodegaRepo = async (id: number) => {
    return await prisma.bodega.delete({ where: { id } });
};

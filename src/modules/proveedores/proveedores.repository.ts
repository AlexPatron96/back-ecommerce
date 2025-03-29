// repositories/proveedores.repository.ts
import { prisma } from '../../app';

export const createProveedorRepo = async (data: any) => {
    console.log(data);
    return await prisma.proveedor.create({ data });
};

export const getProveedoresRepo = async () => {
    return await prisma.proveedor.findMany();
};

export const updateProveedorRepo = async (id: number, data: any) => {
    return await prisma.proveedor.update({ where: { id }, data });
};

export const deleteProveedorRepo = async (id: number) => {
    return await prisma.proveedor.delete({ where: { id } });
};

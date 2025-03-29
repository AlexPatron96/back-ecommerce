import { prisma } from '../../app';

export const createProductoProveedorRepo = async (data: any) => {
    return await prisma.producto_proveedor.create({ data });
};

export const getProductosProveedoresRepo = async () => {
    return await prisma.producto_proveedor.findMany({
        include: {
            producto: true,
            proveedor: true,
        },
    });
};

export const updateProductoProveedorRepo = async (id: number, data: any) => {
    return await prisma.producto_proveedor.update({ where: { id }, data });
};

export const deleteProductoProveedorRepo = async (id: number) => {
    return await prisma.producto_proveedor.delete({ where: { id } });
};

// services/producto_proveedor.service.ts
import {
    createProductoProveedorRepo,
    deleteProductoProveedorRepo,
    getProductosProveedoresRepo,
    updateProductoProveedorRepo,
} from './producto_proveedor.repository';

export const createProductoProveedorService = async (data: any) => {
    return await createProductoProveedorRepo(data);
};

export const getProductosProveedoresService = async () => {
    return await getProductosProveedoresRepo();
};

export const updateProductoProveedorService = async (id: number, data: any) => {
    return await updateProductoProveedorRepo(id, data);
};

export const deleteProductoProveedorService = async (id: number) => {
    return await deleteProductoProveedorRepo(id);
};

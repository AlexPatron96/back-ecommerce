// services/proveedores.service.ts
import {
    createProveedorRepo,
    deleteProveedorRepo,
    getProveedoresRepo,
    updateProveedorRepo,
} from './proveedores.repository';

export const createProveedorService = async (data: any) => {
    return await createProveedorRepo(data);
};

export const getProveedoresService = async () => {
    return await getProveedoresRepo();
};

export const updateProveedorService = async (id: number, data: any) => {
    return await updateProveedorRepo(id, data);
};

export const deleteProveedorService = async (id: number) => {
    return await deleteProveedorRepo(id);
};

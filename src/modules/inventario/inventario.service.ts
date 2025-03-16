// services/inventario.service.ts
import { getInventarioRepo, updateStockRepo } from './inventario.repository';

export const getInventarioService = async () => {
    return await getInventarioRepo();
};

export const updateStockService = async (id: number, stock: number) => {
    return await updateStockRepo(id, stock);
};

// services/detalles_usuario.service.ts
import {
    getUserDetailsRepo,
    updateUserDetailsRepo,
} from './detalles_usuario.repository';

export const getUserDetailsService = async (id: number) => {
    return await getUserDetailsRepo(id);
};

export const updateUserDetailsService = async (id: number, data: any) => {
    return await updateUserDetailsRepo(id, data);
};

// services/bodegas.service.ts
import {
  createBodegaRepo,
  deleteBodegaRepo,
  getBodegasRepo,
  updateBodegaRepo,
} from "./bodegas.repository";

export const createBodegaService = async (data: any) => {
  console.log("Datos recibidos desde: " + data);
  return await createBodegaRepo(data);
};

export const getBodegasService = async () => {
  return await getBodegasRepo();
};

export const updateBodegaService = async (id: number, data: any) => {
  return await updateBodegaRepo(id, data);
};

export const deleteBodegaService = async (id: number) => {
  return await deleteBodegaRepo(id);
};

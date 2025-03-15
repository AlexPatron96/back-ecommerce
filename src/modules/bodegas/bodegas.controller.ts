// controllers/bodegas.controller.ts
import { Request, Response } from "express";
import {
  createBodegaService,
  deleteBodegaService,
  getBodegasService,
  updateBodegaService,
} from "../bodegas/bodegas.service";

export const createBodega = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const bodega = await createBodegaService(req.body);
    const dataSend = { ...bodega, id: bodega.id.toString() };
    res.status(201).json({ dataSend, message: "Bodega Registrada" });
  } catch (error) {
    res.status(400).json({
      error: "Error al crear la bodega",
      messagge: (error as Error).message,
    });
  }
};

export const getBodegas = async (req: Request, res: Response) => {
  try {
    const bodegas = await getBodegasService();
    const dataSend = bodegas.map((bodega) => ({
      ...bodega,
      id: bodega.id.toString(),
    }));
    res
      .status(200)
      .json({
        data: dataSend,
        message: "Aqui esta la lista de todas las Bodegas existentes.",
      });
  } catch (error) {
    res.status(400).json({ error: "Error al obtener las bodegas" });
  }
};

export const updateBodega = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const bodega = await updateBodegaService(Number(id), req.body);
    res.json(bodega);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar la bodega" });
  }
};

export const deleteBodega = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteBodegaService(Number(id));
    res.json({ message: "Bodega eliminada correctamente" });
  } catch (error) {
    res.status(400).json({ error: "Error al eliminar la bodega" });
  }
};

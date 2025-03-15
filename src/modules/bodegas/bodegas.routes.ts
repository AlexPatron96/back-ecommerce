import { Router } from "express";
import {
  createBodega,
  deleteBodega,
  getBodegas,
  updateBodega,
} from "../bodegas/bodegas.controller";

const router = Router();

router.post("/", createBodega);
router.get("/", getBodegas);
router.put("/:id", updateBodega);
router.delete("/:id", deleteBodega);

export default router;

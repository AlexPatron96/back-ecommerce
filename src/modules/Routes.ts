import { Router } from "express";
import bodegasRoutes from "./bodegas/bodegas.routes";
import userRoutes from "./users/users.routes";
// import productRoutes from './products/products.routes';
// import orderRoutes from './orders/orders.routes';

const router = Router();

// Centralizando rutas
router.use("/users", userRoutes);
router.use("/bodegas", bodegasRoutes);
// router.use('/products', productRoutes);
// router.use('/orders', orderRoutes);

export default router;

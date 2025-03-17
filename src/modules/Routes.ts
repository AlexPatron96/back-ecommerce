import { Router } from 'express';
import bodegasRoutes from './bodegas/bodegas.routes';
import filesRoutes from './files/files.routes';
import inventoryRoutes from './inventario/inventario.routes';
import suppliersRouter from './proveedores/proveedores.routes';
import userRoutes from './users/users.routes';
// import orderRoutes from './orders/orders.routes';

const router = Router();

// Centralizando rutas
router.use('/users', userRoutes);
router.use('/bodegas', bodegasRoutes);
router.use('/suppliers', suppliersRouter);
router.use('/inventory', inventoryRoutes);
router.use('/files', filesRoutes);

export default router;

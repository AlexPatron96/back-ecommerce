import { Router } from 'express';
import bodegasRoutes from './bodegas/bodegas.routes';
import carShopRoutes from './carrito/carrito.routes';
import CouponRoutes from './cupones/cupones.routes';
import detailOrderRoutes from './detalles_pedido/detalles_pedido.routes';
import favoritosRoutes from './favoritos/favoritos.routes';
import filesRoutes from './files/files.routes';
import impuestosRoutes from './impuestos/impuestos.routes';
import inventoryRoutes from './inventario/inventario.routes';
import marcasRoutes from './marcas/marcas.routes';
import metodoEntregaRoutes from './metodos_entrega/metodos_entrega.routes';
import metodoPagoRoutes from './metodos_pago/metodos_pago.routes';
import orderRoutes from './pedidos/pedidos.routes';
import productSuppliersRoutes from './producto_proveedor/producto_proveedor.routes';
import productRoutes from './productos/productos.routes';
import suppliersRouter from './proveedores/proveedores.routes';
import seccionesRoutes from './secciones/secciones.routes';
import userRoutes from './users/users.routes';

const router = Router();

// Centralizando rutas
router.use('/users', userRoutes); //✅
router.use('/suppliers', suppliersRouter); //✅
router.use('/product', productRoutes); //✅
router.use('/product-suppliers', productSuppliersRoutes); //✅
router.use('/order', orderRoutes); //✅
router.use('/inventory', inventoryRoutes); //✅
router.use('/files', filesRoutes); //✅
router.use('/detail-order', detailOrderRoutes); //✅
router.use('/coupon', CouponRoutes);
router.use('/store-stock', bodegasRoutes); //✅
router.use('/car-shop', carShopRoutes); // ✅
router.use('/taxes', impuestosRoutes); // ✅
router.use('/brand', marcasRoutes);
router.use('/favorites', favoritosRoutes);
router.use('/metodo-pago', metodoPagoRoutes);
router.use('/metodo-entrega', metodoEntregaRoutes);
router.use('/secciones', seccionesRoutes);

export default router;

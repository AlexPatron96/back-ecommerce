import { Request, Response } from 'express';
import { servicioSubirArchivos } from '../files/files.service';
import { servicioAsociarImpuestoAProducto } from '../producto_impuesto/producto_impuesto.service';
import {
    servicioActualizarProducto,
    servicioAsociarImpuestos,
    servicioCrearProducto,
    servicioEliminarProducto,
    servicioObtenerProductoPorId,
    servicioObtenerProductos,
} from './productos.service';

// ✅ Crear producto
export const crearProductoController = async (req: Request, res: Response) => {
    try {
        const producto = await servicioCrearProducto(req.body);
        // ✅ Asociar el impuesto si se proporciona
        if (req.body.impuesto_id) {
            await servicioAsociarImpuestoAProducto({
                producto_id: producto.id,
                impuesto_id: req.body.impuesto_id,
            });
        }
        res.status(201).json({
            message: 'Producto creado con éxito',
            producto,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear producto', error });
    }
};

// ✅ Obtener todos los productos
export const obtenerProductosController = async (
    req: Request,
    res: Response,
) => {
    try {
        const productos = await servicioObtenerProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error });
    }
};

// ✅ Obtener producto por ID
export const obtenerProductoPorIdController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const producto = await servicioObtenerProductoPorId(id);
        if (!producto)
            res.status(404).json({ message: 'Producto no encontrado' });

        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener producto', error });
    }
};

// ✅ Actualizar producto
export const actualizarProductoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        const producto = await servicioActualizarProducto(id, req.body);
        res.json({ message: 'Producto actualizado con éxito', producto });
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar producto',
            error,
        });
    }
};

// ✅ Eliminar producto
export const eliminarProductoController = async (
    req: Request,
    res: Response,
) => {
    try {
        const id = Number(req.params.id);
        await servicioEliminarProducto(id);
        res.json({ message: 'Producto eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto', error });
    }
};

export const crearProductoFileController = async (
    req: Request,
    res: Response,
) => {
    try {
        console.log('🔹 Datos recibidos:', req.body);
        console.log('🔹 Archivos recibidos:', req.files);
        const {
            nombre,
            descripcion,
            precio,
            stock,
            impuestos,
            categoria_id,
            marca_id,
            discount_price,
            colors,
            weight,
            condition,
            warranty,
            shipping_included,
            time_left,
            sku,
        } = req.body;
        const archivos = req.files as Express.Multer.File[];

        // Convertir impuestos de JSON a array
        const impuestosArray = impuestos ? JSON.parse(impuestos) : [];

        // ✅ 1. Crear el producto
        const producto = await servicioCrearProducto({
            nombre,
            descripcion,
            precio,
            stock,
            categoria_id,
            marca_id,
            discount_price,
            colors,
            weight,
            condition,
            warranty,
            shipping_included,
            time_left,
            sku,
        });

        // ✅ 2. Subir archivos y asociarlos al producto
        if (archivos.length > 0) {
            await servicioSubirArchivos(producto.id, archivos);
        }

        // ✅ 3. Asociar impuestos al producto
        if (impuestosArray.length > 0) {
            const idProductNumber = Number(producto.id);
            await servicioAsociarImpuestos(idProductNumber, impuestosArray);
        }

        res.status(201).json({
            message: 'Producto creado con éxito',
            producto,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear producto', error });
    }
};

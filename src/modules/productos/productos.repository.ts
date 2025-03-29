import { prisma } from '../../app';

// ✅ Crear un producto
export const crearProducto = async (data: any) => {
    console.log({ message: 'Producto recibe:', data });
    return await prisma.productos.create({
        data: {
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            stock: data.stock,
            categoria_id: data.categoria_id,
            marca_id: data.marca_id,
            discount_price: data.discount_price,
            colors: data.colors,
            weight: data.weight,
            condition: data.condition,
            warranty: data.warranty,
            shipping_included: data.shipping_included,
            time_left: data.time_left,
            sku: data.sku,
        },
    });
};

// ✅ Obtener todos los productos
export const obtenerProductos = async () => {
    return await prisma.productos.findMany({
        include: {
            categorias: true,
            marcas: true,
            imagenes: true,
        },
    });
};

// ✅ Obtener un producto por ID
export const obtenerProductoPorId = async (id: number) => {
    return await prisma.productos.findUnique({
        where: { id },
        include: { categorias: true, marcas: true, imagenes: true },
    });
};

// ✅ Actualizar un producto
export const actualizarProducto = async (id: number, data: any) => {
    return await prisma.productos.update({
        where: { id },
        data,
    });
};

// ✅ Eliminar un producto
export const eliminarProducto = async (id: number) => {
    return await prisma.productos.delete({
        where: { id },
    });
};

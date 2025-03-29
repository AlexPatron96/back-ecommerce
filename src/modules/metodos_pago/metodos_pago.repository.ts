import { prisma } from '../../app';

// ✅ Crear un método de pago
export const crearMetodoPago = async (data: any) => {
    return await prisma.metodos_pago.create({ data });
};

// ✅ Obtener todos los métodos de pago
export const obtenerMetodosPago = async () => {
    return await prisma.metodos_pago.findMany();
};

// ✅ Obtener un método de pago por ID
export const obtenerMetodoPagoPorId = async (id: number) => {
    return await prisma.metodos_pago.findUnique({ where: { id } });
};

// ✅ Actualizar un método de pago
export const actualizarMetodoPago = async (id: number, data: any) => {
    return await prisma.metodos_pago.update({ where: { id }, data });
};

// ✅ Eliminar un método de pago
export const eliminarMetodoPago = async (id: number) => {
    return await prisma.metodos_pago.delete({ where: { id } });
};

import { prisma } from '../../app';

// ✅ Crear un impuesto
export const crearImpuesto = async (data: any) => {
    return await prisma.impuestos.create({
        data: {
            nombre: data.nombre,
            porcentaje: data.porcentaje,
        },
    });
};

// ✅ Obtener todos los impuestos
export const obtenerImpuestos = async () => {
    return await prisma.impuestos.findMany();
};

// ✅ Obtener un impuesto por ID
export const obtenerImpuestoPorId = async (id: number) => {
    return await prisma.impuestos.findUnique({
        where: { id },
    });
};

// ✅ Actualizar un impuesto
export const actualizarImpuesto = async (id: number, data: any) => {
    return await prisma.impuestos.update({
        where: { id },
        data,
    });
};

// ✅ Eliminar un impuesto
export const eliminarImpuesto = async (id: number) => {
    return await prisma.impuestos.delete({
        where: { id },
    });
};

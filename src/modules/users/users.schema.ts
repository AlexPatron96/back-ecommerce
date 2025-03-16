import { z } from 'zod';

// ✅ Esquema para validación de datos de usuario
export const userSchema = z.object({
    // nombre: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
    email: z.string().email('Formato de email inválido'),
    password: z
        .string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    // tipo_usuario: z.enum(['admin', 'cliente'], {
    //     message: 'Tipo de usuario inválido',
    // }),
});

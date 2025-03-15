import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { sendStructuredEmail } from '../../config/mailer';
import {
    createUser,
    findUserByEmail,
    getAllUsers,
    updateUserPassword,
} from './users.repository';

export const validateService = async (token: string) => {
    if (!token) {
        return { error: 'Token requerido' };
    }
    const SECRET_PASSWORD = process.env.JWT_SECRET;
    if (!SECRET_PASSWORD) {
        throw new Error('JWT_SECRET no está definido');
    }
    const decoded = jwt.verify(token, SECRET_PASSWORD);
    if (decoded) {
        return true;
    } else {
        return false;
    }
};

export const getUsersService = async () => {
    return await getAllUsers();
};

export const createUserService = async (data: any) => {
    if (!data.password) {
        throw new Error('La contraseña es obligatoria');
    }

    // Verificar si el email ya está registrado
    const existingUser = await findUserByEmail(data.email);
    if (existingUser) {
        throw new Error('El email ya está en uso');
    }

    console.log('🔑 Hasheando contraseña...');
    const hashedPassword = await bcrypt.hash(data.password, 10);
    console.log('✅ Contraseña hasheada correctamente');

    return await createUser({
        nombre: data.nombre,
        email: data.email,
        password: hashedPassword,
        tipo_usuario: data.tipo_usuario,
        nivel_prioridad: data.nivel_prioridad ?? 0, // No enviar 'id', lo genera la BD
    });
};

export const loginUserService = async (data: any) => {
    if (!data.password) {
        throw new Error('La contraseña es obligatoria');
    }
    console.log('🔍 Buscando usuario en la base de datos:', data.email);
    const user = await findUserByEmail(data.email);
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
        console.error('❌ Credenciales inválidas para:', data.email);
        throw new Error('Credenciales inválidas');
    }
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET!, {
        expiresIn: '6h',
    });
    // const { id, nombre, email, tipo_usuario, nivel_prioridad, createdAt } =
    //     user;
    const returnData = { ...user, id: user.id.toString(), token: token };

    console.log('✅ Usuario autenticado:', user.email);
    // return jwt.sign({ email: user.email }, process.env.JWT_SECRET!, {
    //   expiresIn: "6h",
    // });
    return returnData;
};

export const requestPasswordResetService = async (email: string) => {
    const user = await findUserByEmail(email);
    if (!user) {
        throw new Error('No se encontró un usuario con este correo');
    }
    const resetToken = crypto.randomBytes(32).toString('hex');
    const TokenTemporary = jwt.sign(
        { token: resetToken },
        process.env.JWT_SECRET!,
        {
            expiresIn: '1h',
        },
    );

    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${TokenTemporary}`;
    console.log(`🔗 Enlace de restablecimiento generado: ${resetLink}`);

    // Enviar el correo con el token de restablecimiento
    try {
        await sendStructuredEmail(
            user.email,
            'Recuperación de Contraseña',
            'Haz clic en el siguiente botón para restablecer tu contraseña.',
            resetLink,
        );
        console.log('📧 Correo de restablecimiento enviado con éxito');
    } catch (error) {
        console.error(
            '❌ Error al enviar el correo de restablecimiento:',
            error,
        );
        if ((error as any).response) {
            console.error(
                '📩 Respuesta del servidor de correo:',
                (error as any).response,
            );
        }
        throw new Error(
            'No se pudo enviar el correo de restablecimiento. Inténtalo más tarde.',
        );
    }

    return resetToken;
};

export const resetPasswordService = async (
    email: string,
    token: string,
    newPassword: string,
) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    console.log(`🔍 Verificando token: ${token}`);
    const user = await findUserByEmail(email);

    if (!user) {
        throw new Error('❌ Usuario no valido');
    }
    if (!decoded) {
        return { messagge: '❌ Token no valido' };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const NewPasswordResult = await updateUserPassword(
        Number(user.id),
        hashedPassword,
    );

    console.log('✅ Contraseña restablecida correctamente para el usuario:', {
        ...NewPasswordResult,
        email: user.email,
    });
    return { ...NewPasswordResult, email: user.email };
};

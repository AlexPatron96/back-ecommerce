// modules/users/users.controller.ts
import { Request, Response } from 'express';
import {
    servicioCrearSesion,
    servicioEliminarSesion,
} from './sesiones/sesiones.service';
import {
    crearUsuario,
    createUserService,
    getUsersService,
    loginUserService,
    logoutService,
    obtenerUsuarioPorEmail,
    requestPasswordResetService,
    resetPasswordService,
    validateService,
} from './users.service';

export const getUsers = async (req: Request, res: Response) => {
    console.log('📌 GET /api/users - Consultando usuarios');
    const users = await getUsersService();
    res.status(200).json(
        users.map(user => ({ ...user, id: user.id.toString() })),
    );
};

export const createUser = async (req: Request, res: Response) => {
    try {
        console.log('📌 POST /api/users/register - Creando usuario:', req.body);
        const user = await createUserService(req.body);
        res.status(201).json({ ...user, id: user.id.toString() });
    } catch (error) {
        console.error('❌ Error al crear usuario:', error);
        res.status(400).json({ error: (error as Error).message });
    }
};

/*********************CREAR USUARIO********************************** */
export const loginUser = async (req: Request, res: Response) => {
    try {
        console.log(
            '📌 POST /api/users/login - Intento de login:',
            req.body.email,
        );
        const data = await loginUserService(req.body);
        res.json({ data });
    } catch (error) {
        console.error('❌ Error en login:', error);
        res.status(400).json({ error: (error as Error).message });
    }
};

// ✅ Login con creación de sesión
export const loginUserController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const usuario = await obtenerUsuarioPorEmail(email, password);

        const idNumber = Number(usuario.data.id);
        const sesionInit = await servicioCrearSesion(idNumber, usuario.token);

        res.json({
            message: 'Login exitoso',
            token: usuario.token,
            usuario,
            sesionInit,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error en login', error });
    }
};

// ✅ Logout con eliminación de sesión
export const logoutUserController = async (req: Request, res: Response) => {
    try {
        const usuario_id = req.user.id;
        await servicioEliminarSesion(usuario_id);
        res.json({ message: 'Logout exitoso' });
    } catch (error) {
        res.status(500).json({ message: 'Error en logout', error });
    }
};

// ✅ Registro de usuario con creación de detalles de cliente
export const registerUserController = async (req: Request, res: Response) => {
    try {
        // const hashPassword = await bcrypt.hash(password, 10);
        const usuario = await crearUsuario(req.body);
        res.status(201).json({ message: 'Usuario creado con éxito', usuario });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
};
/*******************************************************
/*******************************************************
/******************************************************* */

export const logoutUser = async (req: Request, res: Response) => {
    try {
        console.log(
            '📌 POST /api/users/logout - Intento de cerrar login:',
            req.headers.authorization?.split(' ')[1],
        );

        const data = await logoutService(req.headers);
        res.json({ message: 'Sesión cerrada correctamente', data });
    } catch (error) {
        console.error('❌ Error en el Logout:', error);
        res.status(400).json({ error: (error as Error).message });
    }
};

export const requestPasswordReset = async (req: Request, res: Response) => {
    try {
        await requestPasswordResetService(req.body.email);
        console.log('Busqueda de correo');
        res.json({ message: 'Correo de restablecimiento enviado' });
    } catch (error) {
        console.error('❌ Error en solicitud de restablecimiento:', error);
        res.status(400).json({ error: (error as Error).message });
    }
};

export const resetPassword = async (req: Request, res: Response) => {
    try {
        const { email, token, newPassword } = req.body;
        await resetPasswordService(email, token, newPassword);
        res.json({ message: 'Contraseña restablecida correctamente' });
    } catch (error) {
        console.error('❌ Error al restablecer contraseña:', error);
        res.status(400).json({ error: (error as Error).message });
    }
};

export const validateController = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;
        const result = await validateService(token);
        console.log('Usuario Esta Autenticado');
        res.status(200).json({
            message: 'Cliente Validado token activo',
            result: result,
        });
    } catch (error) {
        console.error('❌ Error al Validar:', error);
        res.status(400).json({ error: (error as Error).message });
    }
};

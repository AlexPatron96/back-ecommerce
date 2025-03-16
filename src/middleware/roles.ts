// ✅ Middleware para verificar roles de usuario
import { NextFunction, Request, Response } from 'express';

declare module 'express-serve-static-core' {
    interface Request {
        user?: any;
    }
}

export const roleMiddleware = (rolesPermitidos: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ message: 'No autorizado' });
        }

        if (!rolesPermitidos.includes(req.user.tipo_usuario)) {
            return res.status(403).json({
                message: 'No tienes permisos para acceder a esta ruta',
            });
        }

        next();
    };
};

// ************* Forma de uso solo ADmin ************************
// router.get("/users", authMiddleware, roleMiddleware(["admin"]), UserController.getUsers); // Solo admin

import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

declare module 'express-serve-static-core' {
    interface Request {
        user?: any;
    }
}

// modules/middleware/auth.ts
export const authenticateToken = (
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    const token = req.headers.authorization?.split(' ')[1]; // Obtener el token del header
    // console.log("Token leido : " + token);
    if (!token) {
        res.status(401).json({
            error: 'Acceso denegado, token no proporcionado',
        });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        req.user = decoded; // Agregar usuario al request
        console.log(req.user);
        next();
    } catch (error) {
        res.status(403).json({ error: 'Token inválido o expirado' });
    }
};

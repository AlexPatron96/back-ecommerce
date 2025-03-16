import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

// ✅ Middleware genérico para validar datos con `Zod`
export const validateSchema =
    (schema: ZodSchema<any>) =>
    (req: Request, res: Response, next: NextFunction): void => {
        try {
            req.body = schema.parse(req.body);
            next();
        } catch (error: any) {
            res.status(400).json({
                message: 'Datos inválidos',
                errors: error.errors.map((err: any) => err.message),
            });
        }
    };

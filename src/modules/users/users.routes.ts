// modules/users/users.routes.ts
import { Router } from 'express';
import { validateSchema } from '../../middleware/validate';
import {
    getUserDetails,
    updateUserDetails,
} from './detalles/detalles_usuario.controller';
import {
    createUser,
    getUsers,
    loginUser,
    requestPasswordReset,
    resetPassword,
    validateController,
} from './users.controller';
import { userSchema } from './users.schema';

const router = Router();

router.get('/', getUsers);
// router.get('/protec-users-list', authenticateToken, getUsers);
router.get('/protec-users-list', getUsers);
router.post('/register', createUser);
router.post('/login', validateSchema(userSchema), loginUser);
// router.post('/login', loginUser);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);
router.post('/validate', validateController);

// Rutas para detalles de usuario
router.get('/:id/detalles', getUserDetails);
router.put('/:id/detalles', updateUserDetails);

export default router;

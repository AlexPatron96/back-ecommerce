// modules/users/users.routes.ts
import { Router } from 'express';
import { authenticateToken } from '../../middleware/auth';
import {
    createUser,
    getUsers,
    loginUser,
    requestPasswordReset,
    resetPassword,
    validateController,
} from './users.controller';
const router = Router();

router.get('/', getUsers);
router.get('/protec-users-list', authenticateToken, getUsers);
router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);
router.post('/validate', validateController);
export default router;

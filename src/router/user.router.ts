import { Router } from 'express';
import {
  loginController,
  registerController,
} from '../controllers/user.controller';

const router = Router();

router.route('/login').post(loginController);
router.route('/register').post(registerController);

export default router;

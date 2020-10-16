import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPaswordController';
import ResetPasswordController from '../controllers/ResetPaswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot', forgotPasswordController.create);
passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;

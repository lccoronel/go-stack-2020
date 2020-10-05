import { Router } from 'express';

import SessionController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessoinsController = new SessionController();

sessionsRouter.post('/', sessoinsController.create);

export default sessionsRouter;

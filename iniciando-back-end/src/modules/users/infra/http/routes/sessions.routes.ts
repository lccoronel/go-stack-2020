import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SessionController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessoinsController = new SessionController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessoinsController.create,
);

export default sessionsRouter;

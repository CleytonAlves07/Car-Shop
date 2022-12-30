import { Router } from 'express';
import MotoController from '../Controllers/Motorcycle';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new MotoController(req, res, next).create(),
);

routes.get(
  '/',
  (req, res, next) => new MotoController(req, res, next).getAllMotos(),
);

routes.get(
  '/:id',
  (req, res, next) => new MotoController(req, res, next).getById(),
);

routes.put(
  '/:id',
  (req, res, next) => new MotoController(req, res, next).updateMoto(),
);

export default routes;
import { Router } from 'express';
import CarController from '../Controllers/Car';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

export default routes;
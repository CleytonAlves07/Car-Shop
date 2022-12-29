import { ErrorRequestHandler } from 'express';
import IErrorCodes from '../Interfaces/IErrorCodes';

const errorHandler: ErrorRequestHandler = async (err, _req, res, next) => {
  const { name, message } = err;
  console.log(`name: ${name}`);
  console.log(`message: ${message}`);
  const errors: IErrorCodes = {
    notFoundError: 404,
    validationError: 400,
    unauthorized: 401,
    unprocessableEntity: 422,
  };

  const status: number = errors[name] || 500;
  res.status(status).json({ message });

  next();
};

export default errorHandler;

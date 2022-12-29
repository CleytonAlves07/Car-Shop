import { ErrorRequestHandler } from 'express';
import HttpException from '../Validations/HttpException';

const errorHandler: ErrorRequestHandler = async (err, _req, res, next) => {
  const { status, message } = err as HttpException;
  console.log(`name: ${status}`);
  console.log(`message: ${message}`);

  res.status(status || 500).json({ message });

  next();
};

export default errorHandler;

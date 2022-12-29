import express from 'express';
import 'express-async-errors';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRouter from './Routes/Car';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(ErrorHandler);

export default app;

import express from 'express';
import 'express-async-errors';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRouter from './Routes/Car';
import motoRouter from './Routes/Motorcycle';

const app = express();
app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motoRouter);
app.use(ErrorHandler);

export default app;

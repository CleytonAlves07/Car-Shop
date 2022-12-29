import express from 'express';
import 'express-async-errors';
import carRouter from './Routes/Car';

const app = express();
app.use(express.json());
app.use(carRouter);

export default app;

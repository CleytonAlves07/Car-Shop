import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import HttpException from './Validations/HttpException';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async add(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);

    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.find();
    const carArray = cars.map((car) => this.createCarDomain(car));
    return carArray;
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) throw new HttpException('unprocessableEntity', 'Invalid mongo id');
    const carODM = new CarODM();
    const carById = await carODM.findById(id);
    if (!carById) throw new HttpException('notFoundError', 'Car not found');
    return this.createCarDomain(carById);
  }
}
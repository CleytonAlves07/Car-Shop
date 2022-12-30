import { isValidObjectId } from 'mongoose';
import Motorcycles from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoODM from '../Models/MotorcycleODM';
import HttpException from '../Validations/HttpException';

export default class MotoService {
  private createMotoDomain(moto: IMotorcycle | null): Motorcycles | null {
    if (moto) {
      return new Motorcycles(moto);
    }
    return null;
  }

  public async add(moto: IMotorcycle) {
    const motoODM = new MotoODM();
    const newCar = await motoODM.create(moto);

    return this.createMotoDomain(newCar);
  }

  public async getAllMotos() {
    const motoODM = new MotoODM();
    const cars = await motoODM.find();
    const carArray = cars.map((moto) => this.createMotoDomain(moto));
    return carArray;
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');
    const motoODM = new MotoODM();
    const carById = await motoODM.findById(id);
    if (!carById) throw new HttpException(404, 'Motorcycle not found');
    return this.createMotoDomain(carById);
  }

  public async updateMoto(id: string, moto: IMotorcycle) {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');
    const motoODM = new MotoODM();
    const carById = await motoODM.findById(id);
    if (!carById) throw new HttpException(404, 'Motorcycle not found');
    const update = await motoODM.update(id, moto);
    return this.createMotoDomain(update);
  }
}
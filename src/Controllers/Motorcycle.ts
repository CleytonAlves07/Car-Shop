import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoService from '../Services/Motorcycle';

export default class MotoController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotoService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotoService();
  }

  public async create() {
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMoto = await this.service.add(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotos() {
    const motos = await this.service.getAllMotos();
    return this.res.status(200).json(motos);
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const carById = await this.service.findById(id);
      return this.res.status(200).json(carById);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMoto() {
    const { id } = this.req.params;
    const moto = this.req.body;

    try {
      const update = await this.service.updateMoto(id, moto);
      return this.res.status(200).json(update);
    } catch (error) {
      this.next(error);
    }
  }
}
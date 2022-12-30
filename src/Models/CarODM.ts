import { Model, models, model, Schema, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async find(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }

  public async update(_id: string, obj: Partial<ICar>):
  Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<ICar>,
      { new: true },
    );
  }
}
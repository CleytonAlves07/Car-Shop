import { Model, models, Schema, model, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected existModel: string;

  constructor(schema: Schema, existModel: string) {
    this.schema = schema;
    this.existModel = existModel;
    this.model = models[this.existModel] || model(this.existModel, this.schema);
  }
  public async create(elements: T): Promise<T> {
    return this.model.create({ ...elements });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async update(_id: string, obj: Partial<T>):
  Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
} 
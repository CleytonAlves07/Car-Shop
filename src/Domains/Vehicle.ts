import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status || false;
    this.buyValue = vehicle.buyValue;
  }
  
  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }
}
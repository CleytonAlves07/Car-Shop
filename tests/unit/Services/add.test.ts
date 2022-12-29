import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/Car';
import { carInput, carOutput } from './Helpers/carMocks';

describe('Ao incluir um carro', function () {
  const carService = new CarService();
  
  it('Sucesso ao criar um carro', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    const newCarAdd = await carService.add(carInput);
    expect(newCarAdd).to.be.deep.equal(carOutput);
  });

  // afterEach(function () {
  //   sinon.restore();
  // });
});

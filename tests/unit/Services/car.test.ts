import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/Car';
import HttpException from '../../../src/Validations/HttpException';
import { carInput, carOutput, arrayCar } from './Helpers/carMocks';

describe('Testando a rota /cars e suas funções', function () {
  const carService = new CarService();
  
  it('Sucesso ao criar um carro - function create', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    const newCarAdd = await carService.add(carInput);
    expect(newCarAdd).to.be.deep.equal(carOutput);
  });

  it('Sucesso ao tentar buscar todos os carros cadastrados - function getAll', async function () {
    sinon.stub(Model, 'find').resolves(arrayCar);
    const getAllCars = await carService.getAllCars();

    expect(getAllCars).to.be.deep.equal(arrayCar);
  });

  it('Falha ao tentar buscar todos os carros cadastrados - function getAll', async function () {
    sinon.stub(Model, 'find').resolves([]);

    const getAllCars = await carService.getAllCars();

    expect(getAllCars).to.be.deep.equal([]);
  });

  it(
    'Sucesso ao tentar buscar um carro cadastrado pelo id - function getByIId',
    async function () {
      const id = '63ace3ad5499331d2e826451';
      sinon.stub(Model, 'findById').resolves(carOutput);
      const getById = await carService.findById(id);

      expect(getById).to.be.deep.equal(carOutput);
    },
  );

  it(
    'Carro não encontrado ao tentar buscar por um id não cadastrado - function getByIId',
    async function () {
      const idNonExistent = '99ace3ad5499331d2e826357';
      sinon.stub(Model, 'findById').resolves();
      try {
        await carService.findById(idNonExistent);
      } catch (error) {
        expect((error as HttpException).message).to.be.deep.equal('Car not found');
        expect((error as HttpException).status).to.be.deep.equal(404);
      }
    },
  );
  
  it(
    'Falha ao tentar buscar um carro com um id inválido - function getByIId',
    async function () {
      const invalidID = 'invalidID';
      sinon.stub(Model, 'findById').resolves();
      try {
        await carService.findById(invalidID);
      } catch (error) {
        expect((error as HttpException).message).to.be.deep.equal('Invalid mongo id');
        expect((error as HttpException).status).to.be.deep.equal(422);
      }
    },
  );

  it(
    'Carro não encontrado ao tentar buscar por um id não cadastrado - function update',
    async function () {
      const idNonExistent = '99ace3ad5499331d2e826357';
      sinon.stub(Model, 'findByIdAndUpdate').resolves();
      sinon.stub(Model, 'findById').resolves();
      try {
        await carService.updateCar(idNonExistent, carOutput);
      } catch (error) {
        expect((error as HttpException).message).to.be.deep.equal('Car not found');
        expect((error as HttpException).status).to.be.deep.equal(404);
      }
    },
  );
  
  it(
    'Falha ao tentar buscar um carro com um id inválido - function update',
    async function () {
      const invalidID = 'invalidID';
      sinon.stub(Model, 'findByIdAndUpdate').resolves();
      sinon.stub(Model, 'findById').resolves();
      try {
        await carService.updateCar(invalidID, carOutput);
      } catch (error) {
        expect((error as HttpException).message).to.be.deep.equal('Invalid mongo id');
        expect((error as HttpException).status).to.be.deep.equal(422);
      }
    },
  );

  it(
    'Sucesso ao tentar atualizar um carro cadastrado - function update',
    async function () {
      const id = '63ace3ad5499331d2e826451';
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);
      sinon.stub(Model, 'findById').resolves(carOutput);
      const update = await carService.updateCar(id, carInput);

      expect(update).to.be.deep.equal(carOutput);
    },
  );

  afterEach(function () {
    sinon.restore();
  });
});

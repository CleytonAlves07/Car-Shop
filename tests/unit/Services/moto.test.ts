import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorService from '../../../src/Services/Motorcycle';
import HttpException from '../../../src/Validations/HttpException';
import { motoInput, motoOutput, arrayMoto } from './Helpers/motoMocks';

describe('Testando a rota /motorcycles e suas funções', function () {
  const motorService = new MotorService();
  
  it('Sucesso ao criar um carro - function create', async function () {
    sinon.stub(Model, 'create').resolves(motoOutput);
    const newCarAdd = await motorService.add(motoInput);
    expect(newCarAdd).to.be.deep.equal(motoOutput);
  });

  it('Sucesso ao tentar buscar todas as motos cadastradas - function getAll', async function () {
    sinon.stub(Model, 'find').resolves(arrayMoto);
    const getAllMotos = await motorService.getAllMotos();

    expect(getAllMotos).to.be.deep.equal(arrayMoto);
  });

  it('Falha ao tentar buscar todas as motos cadastradas - function getAll', async function () {
    sinon.stub(Model, 'find').resolves([]);

    const getAllMotos = await motorService.getAllMotos();

    expect(getAllMotos).to.be.deep.equal([]);
  });

  it(
    'Sucesso ao tentar buscar uma moto cadastrada pelo id - function getByIId',
    async function () {
      const id = '63ace3ad5499331d2e826451';
      sinon.stub(Model, 'findById').resolves(motoOutput);
      const getById = await motorService.findById(id);

      expect(getById).to.be.deep.equal(motoOutput);
    },
  );

  it(
    'Moto não encontrada ao tentar buscar por um id não cadastrado - function getByIId',
    async function () {
      const idNonExistent = '99ace3ad5499331d2e826357';
      sinon.stub(Model, 'findById').resolves();
      try {
        await motorService.findById(idNonExistent);
      } catch (error) {
        expect((error as HttpException).message).to.be.deep.equal('Motorcycle not found');
        expect((error as HttpException).status).to.be.deep.equal(404);
      }
    },
  );
  
  it(
    'Falha ao tentar buscar uma moto com um id inválido - function getByIId',
    async function () {
      const invalidID = 'invalidID';
      sinon.stub(Model, 'findById').resolves();
      try {
        await motorService.findById(invalidID);
      } catch (error) {
        expect((error as HttpException).message).to.be.deep.equal('Invalid mongo id');
        expect((error as HttpException).status).to.be.deep.equal(422);
      }
    },
  );

  it(
    'Moto não encontrada ao tentar buscar por um id não cadastrado - function update',
    async function () {
      const idNonExistent = '99ace3ad5499331d2e826357';
      sinon.stub(Model, 'findByIdAndUpdate').resolves();
      sinon.stub(Model, 'findById').resolves();
      try {
        await motorService.updateMoto(idNonExistent, motoOutput);
      } catch (error) {
        expect((error as HttpException).message).to.be.deep.equal('Motorcycle not found');
        expect((error as HttpException).status).to.be.deep.equal(404);
      }
    },
  );
  
  it(
    'Falha ao tentar buscar uma moto com um id inválido - function update',
    async function () {
      const invalidID = 'invalidID';
      sinon.stub(Model, 'findByIdAndUpdate').resolves();
      sinon.stub(Model, 'findById').resolves();
      try {
        await motorService.updateMoto(invalidID, motoOutput);
      } catch (error) {
        expect((error as HttpException).message).to.be.deep.equal('Invalid mongo id');
        expect((error as HttpException).status).to.be.deep.equal(422);
      }
    },
  );

  it(
    'Sucesso ao tentar atualizar uma moto cadastrada - function update',
    async function () {
      const id = '63ace3ad5499331d2e826451';
      sinon.stub(Model, 'findByIdAndUpdate').resolves(motoOutput);
      sinon.stub(Model, 'findById').resolves(motoOutput);
      const update = await motorService.updateMoto(id, motoInput);

      expect(update).to.be.deep.equal(motoOutput);
    },
  );

  afterEach(function () {
    sinon.restore();
  });
});

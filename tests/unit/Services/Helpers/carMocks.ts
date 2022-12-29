import ICar from '../../../../src/Interfaces/ICar';

const carInput: ICar = {
  model: 'Fiat Quadrado',
  year: 2010,
  color: 'Rosa puxado para o preto',
  status: true,
  buyValue: 15000,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutput: ICar = {
  id: '63ace3ad5499331d2e826451',
  model: 'Fiat Quadrado',
  year: 2010,
  color: 'Rosa puxado para o preto',
  status: true,
  buyValue: 15000,
  doorsQty: 4,
  seatsQty: 5,
};

export {
  carInput,
  carOutput, 
};
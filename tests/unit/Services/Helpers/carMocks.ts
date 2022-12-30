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

const arrayCar: ICar[] = [
  {
    id: '63ad03c69fee692690035376',
    model: 'Fiat Vivance',
    year: 2020,
    color: 'Azul',
    status: true,
    buyValue: 35000,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63ad055d1c46e2545f76688c',
    model: 'Celta',
    year: 2015,
    color: 'Preto',
    status: true,
    buyValue: 15000,
    doorsQty: 4,
    seatsQty: 5,
  },
];

export {
  carInput,
  carOutput,
  arrayCar,
};
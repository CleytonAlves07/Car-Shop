import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

const motoInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2019,
  color: 'Blue',
  status: true,
  buyValue: 60.000,
  category: 'Street',
  engineCapacity: 600,
};

const motoOutput: IMotorcycle = {
  id: '63ae4be1a9635e1fbeed5312',
  model: 'Honda Cb 600f Hornet',
  year: 2019,
  color: 'Blue',
  status: true,
  buyValue: 60.000,
  category: 'Street',
  engineCapacity: 600,
};

const arrayMoto: IMotorcycle[] = [
  {
    id: '63ae4be1a9635e1fbeed5312',
    model: 'Kawasaki Ninja 650',
    year: 2019,
    color: 'Blue',
    status: true,
    buyValue: 60.000,
    category: 'Street',
    engineCapacity: 650,
  },
  {
    id: '63af222753280e0a24baf77b',
    model: 'BMW G310 R',
    year: 2022,
    color: 'Green',
    status: true,
    buyValue: 85,
    category: 'Street',
    engineCapacity: 900,
  },
];

export {
  motoInput,
  motoOutput,
  arrayMoto,
};
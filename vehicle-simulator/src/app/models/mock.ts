import { IMarca } from './modelVeiculo.model';

export const MOCK_MARCAS = {
  carros: [
    {
      nome: 'Volkswagen',
      codigo: '1',
    },
    {
      nome: 'Ferrari',
      codigo: '2',
    },
    {
      nome: 'Alfa Romeo',
      codigo: '3',
    },
  ] as IMarca[],

  motos: [
    {
      nome: 'Yamaha',
      codigo: '1',
    },
    {
      nome: 'Honda',
      codigo: '2',
    },
    {
      nome: 'Suzuki',
      codigo: '3',
    },
  ] as IMarca[],
};

export const MOCK_MODELOS = {
  carros: {
    '1': [
      {
        nome: 'AMAROK CD2.0 16V/S CD2.0 16V TDI 4x2 Die',
        codigo: 5585,
      },
      {
        nome: 'AMAROK CD2.0 16V/S CD2.0 16V TDI 4x4 Die',
        codigo: 5586,
      },
      {
        nome: 'AMAROK Comfor. 3.0 V6 TDI 4x4 Dies. Aut.',
        codigo: 9895,
      },
    ],
    '2': [
      {
        nome: 'FERRARI 488 GTB',
        codigo: 10000,
      },
      {
        nome: 'FERRARI 488 PISTA',
        codigo: 10001,
      },
    ],
  },
};

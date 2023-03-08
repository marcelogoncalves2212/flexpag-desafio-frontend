import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { VendasCarrosService } from '../services/vendas-carros.service';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss'],
})
export class SimuladorComponent implements OnInit {
  AnoTipos = [
    {
      nome: '2022 Diesel',
      codigo: '2022-3',
    },
    {
      nome: '2021 Diesel',
      codigo: '2021-3',
    },
    {
      nome: '2020 Diesel',
      codigo: '2020-3',
    },
  ];

  veiculos = [
    {
      nome: 'Acura',
      codigo: '1',
    },
    {
      nome: 'Agrale',
      codigo: '2',
    },
    {
      nome: 'Alfa Romeo',
      codigo: '3',
    },
  ];

  modelostipos = [
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
  ];

  result!: any;

  modelos = [{ name: 'carros' }, { name: 'motos' }, { name: 'caminhoes' }];

  tipoVeiculo: string = '';
  valorVenda: string = '';
  tipoMarca: string = '';
  tipoModeloMarca: string = '';
  ano: string = '';

  VVD: number = Number(this.valorVenda);
  VVF: number = Number(this.result?.Valor) ?? 0;

  RESULT = Math.round(((this.VVD - this.VVF) / this.VVD) * 100);

  constructor(private vendaCarros: VendasCarrosService) {}


  ngOnInit(): void {
    this.valorVenda;
    this.vendaCarros.getMarcas().subscribe(
      (data) => {
        console.log(data);
        this.tipoMarca = data;
      },
      (error) => {
        console.log(error);
      }
    );
    /* .pipe(map((response) => console.log(response))); */
  }

  obterValorFipe() {

    this.result = {
      Valor: 'R$ 125.318,00',
      Marca: 'VW - VolksWagen',
      Modelo: 'AMAROK High.CD 2.0 16V TDI 4x4 Dies. Aut',
      AnoModelo: 2014,
      Combustivel: 'Diesel',
      CodigoFipe: '005340-6',
      MesReferencia: 'janeiro de 2023 ',
      TipoVeiculo: 1,
      SiglaCombustivel: 'D',
    };

    console.log([
      this.tipoVeiculo,
      this.tipoMarca,
      this.tipoModeloMarca,
      this.ano,
      this.valorVenda,
      Number(this.valorVenda),
    ]);
  }

  onChangeTipoVeiculo() {
    console.log(this.tipoVeiculo);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMarca } from '../models/modelVeiculo.model';
import { VendasCarrosService } from '../services/vendas-carros.service';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss'],
})
export class SimuladorComponent implements OnInit {
  percentual = 0;

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

  result!: any;

  // Modelos de Veiculos
  modelos = [{ name: 'carros' }, { name: 'motos' }, { name: 'caminhoes' }];

  tipoVeiculo: string = '';
  valorVenda: string = '';
  tipoMarca = '';
  tipoModeloMarca: string = '';
  ano: string = '';

  VVD: number = Number(this.valorVenda);
  VVF: number = Number(this.result?.Valor) ?? 0;

  RESULT = 0;

  marcas$: Observable<IMarca[]> = this.vendaCarrosService.getMarcas(
    this.tipoVeiculo
  );

  modelos$!: Observable<IMarca[]>;

  constructor(private vendaCarrosService: VendasCarrosService) {}

  ngOnInit(): void {
    this.valorVenda;
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

    this.VVD = Number(this.valorVenda);
    this.VVF = Number(
      this.result.Valor.replace('R$ ', '')
        .replace('.', '')
        .replace(',', '.')
        .trim()
    );

    // calculo pra porcetagem
    this.percentual = Math.round(((this.VVD - this.VVF) / this.VVF) * 100);
  }

  onChangeTipoVeiculo() {
    this.getMarcas();
  }

  onChangeTipoMarca() {
    this.getModelos();
  }

  // Chamada de Api para tipo de veiculo
  getMarcas() {
    this.marcas$ = this.vendaCarrosService.getMarcas(this.tipoVeiculo);
  }

  // Chamada de Api para modelos
  getModelos() {
    this.modelos$ = this.vendaCarrosService.getModelos(
      this.tipoVeiculo,
      this.tipoMarca
    );
  }

  // Chamada de Api para anos
  getAnos() {}


  // validação de pocertagem
  get classFromPercentual() {
    if (this.percentual >= 10)
      return {
        percent: 'text-danger',
        alert: 'alert-danger',
      };
    if (this.percentual <= -10)
      return {
        percent: 'text-success',
        alert: 'alert-success',
      };

    return {
      percent: 'text-warning',
      alert: 'alert-warning',
    };
  }
}

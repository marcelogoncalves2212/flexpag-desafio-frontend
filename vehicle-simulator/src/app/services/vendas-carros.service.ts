import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { from, Observable } from 'rxjs';
import { MOCK_MARCAS, MOCK_MODELOS } from '../models/mock';
import { IMarca } from '../models/modelVeiculo.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VendasCarrosService {
  constructor(private httpClient: HttpClient) {}

  public getMarcas(tipoVeiculo: string): Observable<IMarca[]> {
    if (isDevMode()) {
      return from([(MOCK_MARCAS as any)[tipoVeiculo]]);
    }

    return this.httpClient.get<IMarca[]>(
      `${environment.api.API_URL}/${tipoVeiculo}/marcas`
    );
  }

  public getModelos(
    tipoVeiculo: string,
    marcaCodigo: string
  ): Observable<any[]> {
    if (isDevMode()) {
      const modelos = (MOCK_MODELOS as any)[tipoVeiculo] as any;

      return from([modelos[marcaCodigo]]);
    }

    return this.httpClient.get<any[]>(
      `${environment.api.API_URL}/${tipoVeiculo}/marcas/${marcaCodigo}/modelos`
    );
  }
}

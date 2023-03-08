import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VendasCarrosService {


  constructor(private httpClient: HttpClient) {
   }

  public getMarcas(){

    return this.httpClient.get<any>(
       `${environment.api.API_URL}`);
  }
}

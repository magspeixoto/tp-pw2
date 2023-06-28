import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Top10 } from '../models/top10';

@Injectable({
  providedIn: 'root'
})
export class APICallService {
  constructor(private _http: HttpClient) {}

  // Método para obter dados da API
  getRodape() {
    // Realiza uma requisição HTTP GET para a API
    return this._http.get<Top10>(
      `https://api.iex.cloud/v1/data/core/stock_collection/list?collectionName=mostactive&token=sk_e511acd46d734053beec96a280678778`
    );
  }
}

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
      `https://cloud.iexapis.com/stable/stock/market/list/mostactive?token=sk_47eb532dc3424389a5c128e8d48349ae`
    );
  }
}

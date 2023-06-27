import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Acoes } from '../models/acoes';

@Injectable({
  providedIn: 'root'
})
export class APICallService {
  constructor(private _http: HttpClient) {}

  // Método para obter dados da API
  getData(ticker: string) {
    // Realiza uma requisição HTTP GET para a API, passando o ticker como parâmetro
    return this._http.get<Acoes>(
      `https://api.iex.cloud/v1/data/core/quote/${ticker}?token=pk_8dee7373ead0449bbe6e727ea55263f8`
    );
  }
}

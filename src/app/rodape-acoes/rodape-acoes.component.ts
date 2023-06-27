import { Component, OnInit } from '@angular/core';
import { APICallService } from '../services/apicall.service';
import { Acoes } from '../models/acoes';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'rodape-acoes',
  templateUrl: './rodape-acoes.component.html',
  styleUrls: ['./rodape-acoes.component.css']
})
export class RodapeAcoesComponent implements OnInit {
  acoes: Acoes[] = [];

  constructor(
    private http: HttpClient,
    private _apiservice: APICallService
  ) {}

  ngOnInit() {
    console.log('ngOnInit chamado');

    // Obtém os dados do arquivo JSON local
    this.http
      .get<Acoes[]>('assets/carteira_acoes.json')
      .subscribe(
        (data: Acoes[]) => {
          this.acoes = data;

          // Chama o método para obter dados da API para cada ação
          this.fetchAcoesData();
        },
        (error: any) => {
          console.error('Erro ao obter os dados iniciais:', error);
        }
      );
  }

  fetchAcoesData() {
    // Itera sobre cada ação para obter dados da API
    this.acoes.forEach((item: Acoes) => {
      this._apiservice.getData(item.ticker).subscribe(
        (response: any) => {
          // Verifica se os dados de cotação são válidos
          if (
            response &&
            response[0] !== null &&
            response[0].latestPrice !== null &&
            response[0].latestPrice !== undefined
          ) {
            const cotacao = parseFloat(response[0].latestPrice);
            const nome = response[0].symbol;
            item.api1 = cotacao;
            item.ticker = nome;
          } else {
            console.log('Dados de cotação inválidos:', response);
          }
        },
        (error: any) => {
          console.log('Erro na chamada da API:', error);
        }
      );
    });
  }
}

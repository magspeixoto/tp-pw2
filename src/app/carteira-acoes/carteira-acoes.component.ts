import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Acoes } from '../models/acoes';

@Component({
  selector: 'app-carteira-acoes',
  templateUrl: './carteira-acoes.component.html',
  styleUrls: ['./carteira-acoes.component.css']
})
export class CarteiraAcoesComponent implements OnInit {
  acoes: Acoes[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInit chamado'); // Imprime uma mensagem no console ao chamar o método ngOnInit

    this.http
      .get<Acoes[]>('assets/carteira_acoes.json')
      .subscribe((data: Acoes[]) => {
        this.acoes = data;
        console.log(this.acoes); // Imprime os dados recebidos do arquivo JSON

        this.acoes.forEach((item: Acoes) => {
          const url = `https://api.iex.cloud/v1/data/core/quote/${item.ticker}?token=pk_8dee7373ead0449bbe6e727ea55263f8`;
          this.http.get(url).subscribe((response: any) => {
            const cotacao = parseFloat(response[0].latestPrice);
            const variacao = parseFloat(response[0].changePercent);
            console.log(cotacao); // Imprime a cotação obtida da API
            item.api1 = cotacao; // Atribui a cotação ao campo api1 do objeto Acoes
            item.api2 = variacao; // Atribui a variação ao campo api2 do objeto Acoes
          });
        });
      },
      (error) => {
        console.error('Erro ao buscar os dados:', error); // Imprime uma mensagem de erro caso ocorra algum problema ao buscar os dados
      }
    );
  }
}

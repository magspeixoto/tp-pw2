import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Top10 {
  api1: string;
  api2: string;
  api3: number;
  api4: number;
  api5: number;
  api6: number;
  api7: number;
}

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {
  acoes: Top10[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInit called'); // Add this line to check if the method is being called

    const url = `https://api.iex.cloud/v1/data/core/stock_collection/list?collectionName=mostactive&token=sk_e511acd46d734053beec96a280678778`;
    this.http.get(url).subscribe((response: any) => {
      response.forEach((item: any) => {
        const simbolo = item.symbol;
        const nome = item.companyName;
        const abertura = item.previousClose;
        const ultimopreco = item.latestPrice;
        const mudanca = item.change;
        const porcentagem = item.changePercent;
        const volume = item.avgTotalVolume;
        this.acoes.push({ api1: simbolo, api2: nome, api3: abertura, api4: ultimopreco, api5: mudanca, api6: porcentagem, api7: volume });
      });
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  }
}

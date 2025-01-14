import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Top10 } from '../models/top10';
import { WatchlistServiceService } from '../services/watchlist-service.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {
  acoes: Top10[] = [];

  constructor(private http: HttpClient, private watchlistService : WatchlistServiceService) {}

  ngOnInit(): void {
    console.log('ngOnInit called'); // Add this line to check if the method is being called

    const url = `https://cloud.iexapis.com/stable/stock/market/list/mostactive?token=sk_e511acd46d734053beec96a280678778`;
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
  adicionarAcao(acao: Top10){
    this.watchlistService.addActionToWatchList(acao).subscribe();
  }
}

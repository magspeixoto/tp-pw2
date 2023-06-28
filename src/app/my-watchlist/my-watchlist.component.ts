
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WatchlistServiceService } from '../services/watchlist-service.service';
import { Top10 } from '../models/top10';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-my-watchlist',
  templateUrl: './my-watchlist.component.html',
  styleUrls: ['./my-watchlist.component.css']
})
export class MyWatchlistComponent implements OnInit {
  
  acoesWatchList: Top10[] = [];

  constructor(
    private watchListService: WatchlistServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit chamado'); // Imprime uma mensagem no console ao chamar o método ngOnInit
    this.getActions();
  }

  removeAction(acao: Top10): void {
    this.watchListService.deleteActionFromWatchList(acao.id).subscribe(() => this.getActions());
  }

  getActions(): void {
    this.watchListService.getActionsWatchList().subscribe(data => {
      this.acoesWatchList = data;
    });
  }
}

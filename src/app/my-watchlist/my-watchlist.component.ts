import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Top10 } from '../models/top10';
import { Observable } from 'rxjs';
import { WatchlistServiceService } from '../services/watchlist-service.service';

@Component({
  selector: 'app-my-watchlist',
  templateUrl: './my-watchlist.component.html',
  styleUrls: ['./my-watchlist.component.css']
})
export class MyWatchlistComponent implements OnInit{
  acoesWatchList: Top10[] = [];
  constructor (private service:WatchlistServiceService) {
  }

  ngOnInit(): void {
    console.log('ngOnInit chamado'); // Imprime uma mensagem no console ao chamar o método ngOnInit
    this.getActions();
  }

  removeAction(acao : Top10){
    this.service.deleteActionFromWatchList(acao.id).subscribe(()=> this.getActions());   
  }
  getActions(){
    this.service.getActionsWatchList()
    .subscribe(data => this.acoesWatchList = data);
  }
}

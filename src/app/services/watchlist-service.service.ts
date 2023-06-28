import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Top10 } from '../models/top10';
@Injectable({
  providedIn: 'root'
})

export class WatchlistServiceService {


    constructor(private http: HttpClient) { }

    public getActionsWatchList(){
      return this.http.get<Top10 []>(`http://localhost:3000/watchList`);
    }

    addActionToWatchList(acao: Top10) {
      return this.http.post<Top10>(`http://localhost:3000/watchList`, acao);
    }

    deleteActionFromWatchList(id: number) {
      return this.http.delete(`http://localhost:3000/watchList/${id}`);
    } 
}
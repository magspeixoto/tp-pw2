import { Injectable } from '@angular/core';
import { Acoes } from '../models/acoes';
@Injectable({
  providedIn: 'root'
})
export class WatchlistServiceService {
/*
  constructor(private http: HttpClient) { }
  
  getWatchList(ticker:string){
    return this.http.get<Acoes>(``);
  }
*/
  
  
  /*
  constructor(private http: HttpClient) {}

  getMovieToWatchList(id: number) {
    return this.http.get<Movie>(`http://localhost:3000/watchList/${id}`);
  }

  getWatchList(page: number) {
    return this.http.get<Movie[]>(
      `http://localhost:3000/watchList?_page=${page}&_limit=20`,
      { observe: 'response' }
    );
  }

  addMovieToWatchList(movie: Movie) {
    return this.http.post<Movie>(`http://localhost:3000/watchList`, movie);
  }

  deleteMovieToWatchList(id: number) {
    return this.http.delete(`http://localhost:3000/watchList/${id}`);
  }*/
}

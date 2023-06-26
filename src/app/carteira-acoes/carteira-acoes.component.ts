import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carteira-acoes',
  templateUrl: './carteira-acoes.component.html',
  styleUrls: ['./carteira-acoes.component.css']
})
export class CarteiraAcoesComponent implements OnInit{

  result: any;
  urlToJson = 'assets/carteira_acoes.json';

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });
  }
  
}

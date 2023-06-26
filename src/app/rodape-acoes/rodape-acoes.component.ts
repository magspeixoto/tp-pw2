import { Component, OnInit } from '@angular/core';
import { APICallService } from '../services/apicall.service';
import { Acoes } from '../models/acoes';

@Component({
  selector: 'rodape-acoes',
  templateUrl: './rodape-acoes.component.html',
  styleUrls: ['./rodape-acoes.component.css']
})
export class RodapeAcoesComponent implements OnInit {
  acoes: Acoes[] = [];

  constructor(private _apiservice: APICallService) {}

  ngOnInit() {
    this.acoes.forEach(acao => {
      this._apiservice.getData(acao.ticker).subscribe(
        (data: Acoes) => {
          this.acoes.push(data);
          console.log(data); 
        }
      );
    });
  }
  
}


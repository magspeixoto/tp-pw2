import { Component, OnInit } from '@angular/core';
import { APICallService } from '../services/apicall.service';
import { Acoes } from '../models/acoes'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'rodape-acoes',
  templateUrl: './rodape-acoes.component.html',
  styleUrls: ['./rodape-acoes.component.css']
})

export class RodapeAcoesComponent implements OnInit{
  showNotFound = false;
  public posts:Acoes;
  constructor(private route: ActivatedRoute, 
    private _apiservice: APICallService){}

  ngOnInit(){
    
  this.route.params.subscribe((params) => {
    this._apiservice
      .getData(params['ticker'])
      .subscribe({
        next: (posts: Acoes) => (this.posts = posts),
        error: () => (this.showNotFound = true),
      });
});
   
  }}

import { Component } from '@angular/core';
import { APICallService } from '../services/apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './rodape-acoes.component.html',
  styleUrls: ['./rodape-acoes.component.css']
})

export class RodapeAcoesComponent {
  title = 'apidata'; 
  newdata:any;
  constructor(private _apiservice: APICallService){}
    
  ngOnInit(){
    this._apiservice.getData().subscribe(res=> {
      this.newdata=res;
    })
  }

}
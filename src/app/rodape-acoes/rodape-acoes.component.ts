import { Component, OnInit } from '@angular/core';
import { APICallService } from '../services/apicall.service';
import { Top10 } from '../models/top10';

@Component({
  selector: 'rodape-acoes',
  templateUrl: './rodape-acoes.component.html',
  styleUrls: ['./rodape-acoes.component.css']
})
export class RodapeAcoesComponent implements OnInit {

  acoes: Top10[] = [];

  constructor(private service: APICallService) {}

  ngOnInit(): void {
    console.log('ngOnInit called'); // Add this line to check if the method is being called

    this.service.getRodape().subscribe((response: any) => {
      response.forEach((item: any) => {
        const simbolo = item.symbol;
        const preco = item.latestPrice;
        const porcentagem = item.changePercent;
        this.acoes.push({ api1: simbolo, api2: "", api3: porcentagem, api4: preco, api5: 0, api6: 0, api7: 0 });
      });
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  }
}

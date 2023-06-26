import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Acoes {
            ticker: string;
            empresa: string;
            data: Date;
            quantidade: number;
            preco_unitario: number;
}

@Component({
  selector: 'app-carteira-acoes',
  templateUrl: './carteira-acoes.component.html',
  styleUrls: ['./carteira-acoes.component.css']
})
export class CarteiraAcoesComponent implements OnInit{
 acoes : Acoes[] = [];

 constructor(private http: HttpClient) {}

 ngOnInit(): void {
  console.log('ngOnInit called'); // Add this line to check if the method is being called

  this.http
    .get<Acoes[]>('assets/carteira_acoes.json')
    .subscribe((data: Acoes[]) => {
      this.acoes = data;
      console.log(this.acoes); // Add this line to check the received data
    },
    (error) => {
      console.error('Error fetching data:', error);
    });
}

}

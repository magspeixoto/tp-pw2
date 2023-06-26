import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Acoes {
            ticker: string;
            empresa: string;
            data: Date;
            quantidade: number;
            preco_unitario: number;
            api1: number;
            api2: number;
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

      this.acoes.forEach((item: Acoes) => {
        const url = `https://api.twelvedata.com/price?symbol=${item.ticker}&apikey=68d7747062ea44dcaf9b316179154992`;
        this.http.get(url).subscribe((response: any) => {
          const cotacao = parseFloat(response.price);
          console.log(cotacao);
          item.api1 = cotacao;
        });
      });
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
}
}
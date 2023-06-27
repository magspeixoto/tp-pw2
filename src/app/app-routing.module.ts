import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ComprarAcoesComponent } from './comprar-acoes/comprar-acoes.component';
import { CarteiraAcoesComponent } from './carteira-acoes/carteira-acoes.component';
import { MyWatchlistComponent } from './my-watchlist/my-watchlist.component';

const routes: Routes = [
  { path:'pagina-inicial', component:PaginaInicialComponent}, // Rota para a página inicial
  { path:'comprar-acoes', component:ComprarAcoesComponent}, // Rota para a página de compra de ações
  { path:'carteira-acoes', component:CarteiraAcoesComponent}, // Rota para a página da carteira de ações
  { path:'my-watchlist', component:MyWatchlistComponent}, // Rota para a página da lista de acompanhamento
  { path: '', redirectTo: 'pagina-inicial', pathMatch: 'full'}, // Redireciona para a página inicial se nenhum caminho for especificado
  { path: '**', redirectTo: 'pagina-inicial', pathMatch: 'full'}, // Redireciona para a página inicial se o caminho não for encontrado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ComprarAcoesComponent } from './comprar-acoes/comprar-acoes.component';
import { CarteiraAcoesComponent } from './carteira-acoes/carteira-acoes.component';
import { MyWatchlistComponent } from './my-watchlist/my-watchlist.component';

const routes: Routes = [
  { path:'pagina-inicial', component:PaginaInicialComponent},
  { path:'comprar-acoes', component:ComprarAcoesComponent},
  { path:'carteira-acoes', component:CarteiraAcoesComponent},
  { path:'my-watchlist', component:MyWatchlistComponent},
  { path: '', redirectTo: 'pagina-inicial', pathMatch: 'full'},
  { path: '**', redirectTo: 'pagina-inicial', pathMatch: 'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

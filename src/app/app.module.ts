import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TooltipModule } from 'ngx-bootstrap/tooltip';


import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ComprarAcoesComponent } from './comprar-acoes/comprar-acoes.component';
import { NovaCarteiraComponent } from './nova-carteira/nova-carteira.component';
import { MyWatchlistComponent } from './my-watchlist/my-watchlist.component';
import { CarteiraAcoesComponent } from './carteira-acoes/carteira-acoes.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    NavbarComponent,
    ComprarAcoesComponent,
    NovaCarteiraComponent,
    MyWatchlistComponent,
    CarteiraAcoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

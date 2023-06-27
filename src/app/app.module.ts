import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ComprarAcoesComponent } from './comprar-acoes/comprar-acoes.component';
import { RodapeAcoesComponent } from './rodape-acoes/rodape-acoes.component';
import { NovaCarteiraComponent } from './nova-carteira/nova-carteira.component';
import { MyWatchlistComponent } from './my-watchlist/my-watchlist.component';
import { CarteiraAcoesComponent } from './carteira-acoes/carteira-acoes.component';
import { ActionCardComponent } from './action-card/action-card.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    NavbarComponent,
    ComprarAcoesComponent,
    RodapeAcoesComponent,
    NovaCarteiraComponent,
    MyWatchlistComponent,
    CarteiraAcoesComponent,
    ActionCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

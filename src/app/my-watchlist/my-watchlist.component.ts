import { Component, OnInit, ViewChild } from '@angular/core';
import { WatchlistServiceService } from '../services/watchlist-service.service';
import { Top10 } from '../models/top10';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-my-watchlist',
  templateUrl: './my-watchlist.component.html',
  styleUrls: ['./my-watchlist.component.css']
})
export class MyWatchlistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  acoesWatchList: Top10[] = [];
  pagedAcoesWatchList: Top10[] = [];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex = 0;
  pageSize = 8;

  constructor(private watchListService: WatchlistServiceService) {}

  ngOnInit(): void {
    this.getActions();
  }

  removeAction(acao: Top10): void {
    this.watchListService.deleteActionFromWatchList(acao.id).subscribe(() => this.getActions());
  }

  getActions(): void {
    this.watchListService.getActionsWatchList().subscribe(data => {
      this.acoesWatchList = data;
      this.updatePageData();
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePageData();
  }

  updatePageData(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedAcoesWatchList = this.acoesWatchList.slice(startIndex, endIndex);
  }
}
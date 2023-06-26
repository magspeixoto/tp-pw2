import { Component } from '@angular/core';
import { APICallService } from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apidata'; 
  newdata:any;
  constructor(private _apiservice: APICallService){
    this._apiservice.getData().subscribe(res=> {
      this.newdata=res;
    })
  }
}

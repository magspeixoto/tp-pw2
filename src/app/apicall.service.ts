import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APICallService {

  constructor(private _http: HttpClient) { }
    getData(){
      return this._http.get('https://api.iex.cloud/v1/data/core/quote/TSLA?token=pk_8dee7373ead0449bbe6e727ea55263f8')
    }

}

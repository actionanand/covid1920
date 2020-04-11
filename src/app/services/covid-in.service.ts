import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators'

import { environment } from '../../environments/environment';
import { CovidIndType } from '../models/covid-ind.model';

@Injectable({
  providedIn: 'root'
})
export class CovidInService {

  private covidStateInfo: CovidIndType["state_wise"];
  

  constructor(private http: HttpClient) { }

  getIndiaData() {
    return this.http.get<CovidIndType>(environment.urlInd,
      { headers: new HttpHeaders({'x-rapidapi-host': environment.hostInd}),
     responseType: 'json'}).pipe(tap(x => {
       this.covidStateInfo = x.state_wise;
     }));
  }

  getDownloadedData() {
    // console.log(this.covidStateInfo);
    return {... this.covidStateInfo};
  }

}

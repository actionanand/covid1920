import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getIndia() {
    let countryParams = new HttpParams();
    countryParams = countryParams.append('country', 'India');

    return this.http.get(environment.url,
    { headers: new HttpHeaders({'x-rapidapi-host': environment.host}),
    params: countryParams, responseType: 'json'
    });
  }
}

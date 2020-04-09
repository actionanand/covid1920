import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Covid } from '../models/covid.model';

export interface rawData {
  error: string,
  statusCode: number,
  message: string,
  data: {
    lastChecked: Date,
    covid19Stats: Covid[]
  },
  length: number
}


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getIndia() {
    let countryParams = new HttpParams();
    countryParams = countryParams.append('country', 'India');

    return this.http.get<rawData>(environment.url,
    { headers: new HttpHeaders({'x-rapidapi-host': environment.host}),
    params: countryParams, responseType: 'json'
    });
  }
}

import { Component, OnInit } from '@angular/core';

import { CovidService } from '../services/covid.service';
import { Covid } from '../models/covid.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  covidArray: Covid[];
  lastUpdated: Date;
  countryName: string;
  imageUrl: string = 'https://cdn.pixabay.com/photo/2020/03/08/23/24/coronavirus-4914028_960_720.jpg';
  

  constructor(private covidServ: CovidService) {}

  ngOnInit() {
    this.covidServ.getIndia().subscribe(result => {
      console.log(result);
      this.covidArray = result.data.covid19Stats;
      this.lastUpdated = result.data.lastChecked;
      this.countryName = result.data.covid19Stats[0].country;
      console.log(this.covidArray.length);
      // console.log(this.indiaCovid?.data.covid19Stats);
    })
  }

}

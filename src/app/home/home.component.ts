import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs';

import { CovidService } from '../services/covid.service';
import { Covid } from '../models/covid.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  covidArray: Covid[];
  lastUpdated: Date;
  countryName: string;
  imageUrl: string = 'https://cdn.pixabay.com/photo/2020/03/08/23/24/coronavirus-4914028_960_720.jpg';
  covidSub: Subscription;
  availableCountries: string[];
  selectedValue: string;

  constructor(private covidServ: CovidService) {}

  ngOnInit() {
    this.availableCountries = this.covidServ.getAvailableCountry()
    console.log(this.availableCountries);

    this.covidSub = this.covidServ.getCovidInfo().subscribe(result => {
      console.log(result);
      this.covidArray = result.data.covid19Stats;
      this.lastUpdated = result.data.lastChecked;
      this.countryName = result.data.covid19Stats[0].country;
      console.log(this.covidArray.length);
    });

  }

  onSubmit(f: NgForm) {
    this.covidSub = this.covidServ.getCovidInfo(this.selectedValue).subscribe(result => {
      console.log(result);
      this.covidArray = result.data.covid19Stats;
      this.lastUpdated = result.data.lastChecked;
      this.countryName = result.data.covid19Stats[0].country;
      console.log(this.covidArray.length);
    });
  }

  ngOnDestroy() {
    this.covidSub.unsubscribe();
  }

}

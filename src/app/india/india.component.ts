import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CovidInService } from '../services/covid-in.service';
import { CovidIndType } from '../models/covid-ind.model';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit, OnDestroy {

  indSub: Subscription;
  covidRawData: CovidIndType;
  entryComp: boolean = false;
  isLoading: boolean = true;
  passStateName: string = 'Tamil Nadu';

  constructor(private indServ: CovidInService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.indSub = this.indServ.getIndiaData().subscribe(rawData => {
      this.covidRawData = rawData;
      this.isLoading = false;
    })
  }

  openEntryComp(name: string) {
    this.passStateName = name;
    this.entryComp = !this.entryComp;
  }


  ngOnDestroy() {
    this.indSub.unsubscribe();
  }

}

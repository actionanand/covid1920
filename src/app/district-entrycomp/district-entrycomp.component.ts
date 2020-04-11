import { Component, OnInit, Input } from '@angular/core';

import { CovidIndType } from '../models/covid-ind.model';
import { CovidInService } from '../services/covid-in.service';

@Component({
  selector: 'app-district-entrycomp',
  templateUrl: './district-entrycomp.component.html',
  styleUrls: ['./district-entrycomp.component.css']
})
export class DistrictEntrycompComponent implements OnInit {

  @Input('indianState') stateName: string = 'Tamil Nadu';

  covidStates: CovidIndType["state_wise"];
  
  constructor(private indServ: CovidInService) { }

  ngOnInit(): void {
    this.covidStates = this.indServ.getDownloadedData();
    // console.log(this.covidStates.Delhi);
  }

}

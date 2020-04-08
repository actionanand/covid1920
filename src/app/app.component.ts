import { Component, OnInit } from '@angular/core';

import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Covid 19 20';
  constructor(private covidServ: CovidService) {}
  ngOnInit() {
    this.covidServ.getIndia().subscribe(x=> {
      console.log(x);
    })
  }
}

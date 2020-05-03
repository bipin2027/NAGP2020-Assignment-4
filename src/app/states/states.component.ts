import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../core/services/covid19.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  states:[];
  constructor(private covid19Service: Covid19Service, private router: Router) { }

  ngOnInit() {
    this.covid19Service.getCovidStatesData().subscribe((data:any)=>{
      this.states=data.statewise;
    });
  }

  showDistrict(stateName:string){
    console.log(stateName);
    this.router.navigate(['district',stateName]);
  }
}

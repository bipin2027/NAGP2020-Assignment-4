import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  private statesUrl:string="https://api.covid19india.org/data.json";
  private districtUrl:string="https://api.covid19india.org/state_district_wise.json";

  constructor(private http: HttpClient) { }

  getCovidStatesData(){
    return this.http.get(this.statesUrl);
  }

  getCovidDistricts(){
    return this.http.get(this.districtUrl);
  }
}

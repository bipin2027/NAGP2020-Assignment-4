import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../../core/services/covid19.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit {

  districts;
  selectedDistrict: string;
  districtData: [];
  finalDistrictNames;
  finalDistrictValues;
  totalDistricts;

  constructor(private covid19Service: Covid19Service, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedDistrict = this.route.snapshot.params['name'];
    console.log(this.selectedDistrict)
    this.covid19Service.getCovidDistricts().subscribe((data: any) => {
      this.districtData = data[this.selectedDistrict].districtData;
      this.districtSelection();
    });

  }

  districtSelection() {
    this.districts = Object.entries(this.districtData);
  }

}

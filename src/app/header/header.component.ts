import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../core/services/hardcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: HardcodedAuthenticationService) { }


  ngOnInit() {
  }

}

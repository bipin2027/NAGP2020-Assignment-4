import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../core/services/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logOut();
  }
}

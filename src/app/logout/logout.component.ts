import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../core/services/hardcoded-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService : HardcodedAuthenticationService,private router : Router) { }

  ngOnInit() {
    this.performLogout()
  }

  performLogout(){
    this.authenticationService.logOut();
    
    this.router.navigate(['dashboard'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../core/services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username :string ="bipin";
  password :string="";
  errorMessage="Inavlid credientials";
  invalid=false;
  constructor(private router : Router, private authenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
    if(this.authenticationService.isUserLoggedIn()){
    this.router.navigate(['admin']);
    }
  }

  login(){
    if(this.authenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['admin',this.username])
      this.invalid=false
      this.errorMessage="";
    
    }
    else{
      this.errorMessage="Inavlid credientials";
      this.invalid=true;
    }
  }

}

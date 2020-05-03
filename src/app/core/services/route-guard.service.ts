import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private authenticationService : HardcodedAuthenticationService,private router : Router ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authenticationService.isUserLoggedIn()){
     return true
    }
    else{
      this.router.navigate(["login"]) //route to the login page if user not logged in and accessing to particular link 
    }
  }
}




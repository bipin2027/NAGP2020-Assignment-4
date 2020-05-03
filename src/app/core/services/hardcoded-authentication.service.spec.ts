import { TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

describe('HardcodedAuthenticationService', () => {
  let loginService: HardcodedAuthenticationService

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedAuthenticationService = TestBed.get(HardcodedAuthenticationService);
    expect(service).toBeTruthy();
  });

  it('should return false from loginService when there is No userloggedIn', () => {
    expect(loginService.isUserLoggedIn()).toBeFalsy();
  });

  it('should return false UserName and Password is incorrect and doest not match', () => {
    let result = loginService.authenticate("test","abc")
    expect(result).toBeFalsy();
})
});

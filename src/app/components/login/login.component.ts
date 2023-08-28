import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( public auth: AuthService, private router: Router ){};

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe( (authorized)=>{
      if (authorized) {
        this.router.navigate(['/user']);
      }
    })
  }

  login(){
    console.log('Login Clicked');
    this.auth.loginWithRedirect();
  }

}

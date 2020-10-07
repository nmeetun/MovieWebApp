import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import { set } from '../utils/local-store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private  _authService: AuthService) {
    this.username="nil";
    this.password="esh";
   }

  ngOnInit(): void {
  }

  loginUser() {
    this._authService.login().subscribe(response => {
        console.log(response);
        set('USER_ID', this.username);
        set('USER_TOKEN', response.request_token);
        set('AUTHENTICATED', response.success);
        this.router.navigateByUrl('/homepage');
      },
      error => {
        console.log(error);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService, Config } from '../../config/config.service';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../services/token.service';
import { LoginResponse } from '../../interfaces/login.response';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginInvalid = false;
  config: Config;
  error: any;
  model = {
    left: true,
    middle: false,
    right: false
  };
  constructor(private router: Router, private configService: ConfigService, public _http: HttpClient, private _token: TokenService) { }

  ngOnInit() {
  }

  login(event, username, pwd) {
    event.preventDefault();

    this._http.post('https://test.intramalls.com/n/api/account/login/', { username, pwd }, {

    })
      .subscribe(
        (resp: LoginResponse) => {

          // ** not used
          // Get the UserID from the JSON response.
          // let userid = resp.USERID;

          // ** moved token logic to service to reuse else where
          // Set the session_id value in local storage to the SESSIONID value in the JSON response.
          // localStorage.setItem('session_id', resp.json().SESSIONID);
          this._token.setToken(resp.SESSIONID);

          // ** this doesn't exist on the login response
          // localStorage.setItem('id_token', resp['id_token']);

          // Navigate to the home page which has a guard on it.
          this.router.navigate(['home']);

        },
        error => {
          this.loginInvalid = true;

          
        }
      );

  }
  getUser() {
    return this._http.get(`https://test.intramalls.com/n/api/order/log`)
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }
  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }

}

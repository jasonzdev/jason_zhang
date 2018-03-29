import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { OrderLogResponse } from '../interfaces/orderLog.response';
// import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent {

  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router, public _http: HttpClient, private _token: TokenService) {
    this.jwt = localStorage.getItem('id_token');

  }
  // Logout and remove session ID and navigate to login page.
  logout() {
    this._token.removeToken();
    this.router.navigate(['login']);
  }

  get() {
    //     this.http.get(`https://test.intramalls.com/n/api/order/log/`)
    //     .subscribe(
    //       data => {
    // alert('got')
    //       },
    //       error => {
    //         alert('no');
    //         console.log(JSON.stringify(error.json()));
    //       }
    //     );
    this._http.get(`https://test.intramalls.com/n/api/order/log/`).subscribe(
      (orderLogs: Array<OrderLogResponse>) => {
        alert('got');
        console.log(orderLogs);
      },
      error => {
        const keys = error.headers.keys();
        console.log(keys);
        console.log(error);
      }
    );

  }



}

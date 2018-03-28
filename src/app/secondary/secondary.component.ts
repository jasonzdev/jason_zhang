import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent{

    jwt: string;
    decodedJwt: string;
    response: string;
    api: string;
  
    constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
      this.jwt = localStorage.getItem('id_token');
     
    }
  //Logout and remove session ID and navigate to login page.
    logout() {
      localStorage.removeItem('session_id');
      this.router.navigate(['login']);
    }

  get(){
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
this.http.get(`https://test.intramalls.com/n/api/order/log/`).map((response:Response) => {
  console.log(response.json());
 
  console.log(keys);
  alert(keys);
  response.json();
}).subscribe(
        data => {
alert('got')
      },
      error => {
        const keys = error.headers.keys();
        console.log(keys);
        console.log(JSON.stringify(error.json()));
      }
);

  }



}

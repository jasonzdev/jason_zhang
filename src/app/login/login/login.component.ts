import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService, Config } from '../../config/config.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
config: Config;
error: any;
  model = {
    left: true,
    middle: false,
    right: false
  };
  constructor(private router: Router, private configService: ConfigService, public http: Http) { }

  ngOnInit() {
  }

  login(event, username, pwd) {
    event.preventDefault();
  
    var headers = new Headers();

    this.http.post('https://test.intramalls.com/n/api/account/login/', {username, pwd}, {

    })
    .subscribe(
      data => {

        //Get the UserID from the JSON response.
        let userid = data.json().USERID;
        //Set the session_id value in local storage to the SESSIONID value in the JSON response.
        localStorage.setItem('session_id', data.json().SESSIONID);
        localStorage.setItem('id_token', data.json().id_token);
        //Navigate to the home page which has a guard on it.
        this.router.navigate(['home']);


        alert('ok');
      
       
        
   
      },
      error => {
          if (error == "404"){
            console.log("404");
          }
          if (error == "401"){
               console.log("401")
          }
        alert('no');
        console.log(JSON.stringify(error.json()));
      }
    );

 }
  getUser() {
    return this.http.get(`https://test.intramalls.com/n/api/order/log`)
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

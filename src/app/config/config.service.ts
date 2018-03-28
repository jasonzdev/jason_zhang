import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Config {
  USERID: [number],
  EMAIL: [string],
  ULOGINNAME: [string],
  CERTIFIED: [string],
  VERIFIED: [string],
  SESSIONID: [string]
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class ConfigService {
  configUrl = 'https://test.intramalls.com/n/api/';

  constructor(private http: HttpClient) { }



  getConfig() {
    // console.log(this.configUrl);
    // console.log(this.http.get(this.configUrl));
    return this.http.get(this.configUrl);
  }

}

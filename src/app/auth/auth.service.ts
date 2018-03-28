import { Injectable } from '@angular/core';
import { Http, Response, XHRBackend, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService extends Http {

  constructor(backend: XHRBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  // request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
  //   return super.request(url, options).catch((error: Response) => {
  //           if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
  //               console.log('The authentication session expires or the user is not authorised. Force refresh of the current page.');
  //               window.location.href = window.location.href + '?' + new Date().getMilliseconds();
  //           }
  //           return Observable.throw(error);
  //       });
  // }

}

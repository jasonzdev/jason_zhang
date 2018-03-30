import { Component, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { OrderLogResponse } from '../interfaces/orderLog.response';
import { map } from 'rxjs/operator/map';
import { Orders } from '../filters/orders';
import { Subscription } from 'rxjs/Subscription';
import { Sort, MatTableDataSource, MatSort } from '@angular/material';
import { OrderPipe } from 'ngx-order-pipe';

// import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent{
  public orders;
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  sortedData;
  order: string = 'obj.COMPANY';
  reverse: boolean = false;
  sortedCollection: any[];
  @Input()
  public alerts: Array<IAlert> = [];
  constructor(public router: Router, public _http: HttpClient, private _token: TokenService, private orderPipe: OrderPipe) {
   
    

    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'You have successfully Logged in.',
    });

  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  ngOnInit() {
    
    this.get();


  }
  // Logout and remove session ID and navigate to login page.
  logout() {
    this._token.removeToken();
    this.router.navigate(['login']);
  }

  get() {

    this._http.get(`https://test.intramalls.com/n/api/order/log/`)

      .subscribe(

        (orderLogs: Array<OrderLogResponse>) => {
          this.orders = orderLogs;
         
          // console.log(orderLogs);
        },
        error => {
          const keys = error.headers.keys();
          console.log(keys);
          console.log(error);
        }
      );

  }
  sortData(sort: Sort) {
    const data = this.orders;
   
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      
      return;
    }

    this.sortedData = data.sort((a, b) => {
    console.log(b);
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'company': return compare(a.COMPANY, b.COMPANY, isAsc);
        case 'ponum': return compare(+a.PONUM, +b.PONUM, isAsc);
        case 'instid': return compare(+a.INSTID, +b.INSTID, isAsc);
        case 'DESCRIPTION': return compare(+a.DESCRIPTION, +b.DESCRIPTION, isAsc);
        case 'instOCODEid': return compare(+a.OCODE, +b.OCODE, isAsc);
        case 'instid': return compare(+a.INSTID, +b.INSTID, isAsc);
        default: return 0;
      }
    });

  }
  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }


}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
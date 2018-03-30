import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SecondaryComponent } from './secondary/secondary.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { AuthGuard } from './auth/auth.guard';
// import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthService } from './auth/auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';


// import services
import { TokenService } from './services/token.service';

// import interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UnauthInterceptor } from './interceptors/unauth.interceptor';
import { OrderFilter } from './filters/order-filter.pipe';
import { FormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatButton, MatSortModule, MatTableDataSource, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecondaryComponent,
    OrderFilter,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    OrderModule

  ],
  providers: [
    ConfigService, AuthGuard,
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

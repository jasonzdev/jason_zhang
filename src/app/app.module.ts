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

// import services
import { TokenService } from './services/token.service';

// import interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UnauthInterceptor } from './interceptors/unauth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecondaryComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    HttpClientModule
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

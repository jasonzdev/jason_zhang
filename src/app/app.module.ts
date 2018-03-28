import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SecondaryComponent } from './secondary/secondary.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { ConfigService } from './config/config.service';
import { AuthGuard } from './auth/auth.guard';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthService } from './auth/auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
    HttpClientModule,
    HttpModule
    
  ],
  providers: [
    ConfigService, AuthGuard, ...AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

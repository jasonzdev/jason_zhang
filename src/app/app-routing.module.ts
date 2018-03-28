import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';


export const appRoutes: Routes = [
  {
      path: 'login',
      component: LoginComponent,
  },
  {
    path: 'signup', 
    component: SecondaryComponent,
  },
  {
    path: 'home', 
    component: SecondaryComponent,
    canActivate:[AuthGuard]
  },

  {path: '**', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
